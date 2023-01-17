import { Component, Input, OnInit, Output } from '@angular/core';
import { faMessage, faPencil } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { RoomService } from '../services/room.service';
import { Room } from '../models/room';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
})
export class RoomsComponent implements OnInit {
  faPencil = faPencil; // got the idea from traversy media
  faSearch = faSearch;
  faPlus = faPlus;
  faTimes = faTimes;
  faMessage = faMessage;

  rooms: Room[] = [];
  editStatePublic: boolean = false;
  editStatePrivate: boolean = false;

  roomToEdit?: Room;
  users: User[] = [];
  addButtonActive: boolean = false;

  @Input() loggedInUser: any;
  @Output() pickedRoom = new EventEmitter<string>();
  emailList?: string;

  constructor(
    private roomService: RoomService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.roomService.getRooms().subscribe((rooms) => {
      this.rooms = rooms;
    });

    this.userService.getUsers().subscribe((users: User[]) => {
      this.users = users;
    });
    console.log(this.users);
  }

  deleteRoom(event: any, room: Room) {
    this.roomService.deleteRoom(room);
  }

  editRoom(event: any, room: Room) {
    if (room.access === 'public') {
      this.editStatePublic = true;
    } else {
      this.editStatePrivate = true;
    }
    this.roomToEdit = room;
  }

  updateRoom(room: Room) {
    if (this.emailList) {
      room.members.push(this.emailList);
    }
    this.roomService.updateRoom(room);
    this.clearState();
  }

  clearState() {
    this.editStatePublic = false;
    this.editStatePrivate = false;
    this.roomToEdit = undefined;
  }

  chooseRoom(room: Room) {
    this.pickedRoom.emit(room.id);
    if (
      this.userService.currentUser &&
      room.access === 'public' &&
      !room.members.includes(this.userService.currentUser.email)
    ) {
      this.signUpForARoom(room);
    }
  }

  chooseUser(user: User) {
    let roomFound = this.rooms.find(
      (r) =>
        r.members.length == 2 &&
        r.members.includes(user.email) &&
        r.members.includes(this.loggedInUser)
    );
    if (roomFound) {
      this.pickedRoom.emit(roomFound.id);
    } else {
      let current = this.users.find((u) => u.email === this.loggedInUser);
      if (current) {
        this.createRoom(current, user);
      }
    }
  }

  signUpForARoom(room: Room) {
    if (this.userService.currentUser) {
      room.members.push(this.userService.currentUser.email);
    }
    console.log('current user: ' + this.userService.currentUser?.email);
    console.log('rooms: ' + room.members);

    this.roomService.updateRoom(room);
  }

  createRoom(current: User, user: User) {
    let room: Room = {
      name: '',
      members: [],
      access: '',
      pic: '',
    };
    if (current && user) {
      room.name = current.firstName + ' & ' + user.firstName;
      room.pic = current.pic;
      room.members = [current.email, user.email];
      room.access = 'pairConversation';
      this.roomService.addRoom(room);
    }
    this.pickedRoom.emit(room.id);
  }

  addButtonActiveStatus(event: any) {
    this.addButtonActive = event;
  }
}
