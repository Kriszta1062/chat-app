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
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  faPencil=faPencil; // got the idea from traversy media
  faSearch=faSearch;
  faPlus=faPlus;
  faTimes=faTimes;
  faMessage = faMessage;

  rooms: Room[] = [];
  editState: boolean = false;
  roomToEdit?: Room;
  users: User[] = [];
  addButtonActive: boolean = false; 

  @Input() loggedInUser: any;
  @Output() pickedRoom = new EventEmitter<string>();

  constructor(private roomService: RoomService, private userService: UserService) {}

  ngOnInit(): void {
    this.roomService.getRooms().subscribe(rooms => {
      this.rooms = rooms;
    })

    this.userService.getUsers().subscribe((users: User[]) => {
      this.users = users;
    })
    console.log(this.users);
  }

  deleteRoom(event: any, room: Room){
    this.roomService.deleteRoom(room);
  }

  editRoom(event: any, room: Room){
    this.editState = true;
    this.roomToEdit = room;
  }

  updateRoom(room: Room){
    this.roomService.updateRoom(room);
    this.clearState();
  }

  clearState(){
    this.editState = false;
    this.roomToEdit = undefined;
  }

  chooseRoom(room: Room){
    this.pickedRoom.emit(room.id)    
    if(this.userService.currentUser  && room.access === "public" && !room.members.includes(this.userService.currentUser.email)){
      this.signUpForARoom(room)
    }
  }

  chooseUser(user: User){
    this.pickedRoom.emit(user.email)
    console.log(user.email);
    console.log(this.pickedRoom);
  }

  signUpForARoom(room: Room){
    if(this.userService.currentUser){
      room.members.push(this.userService.currentUser.email);
    }
    console.log("current user: " + this.userService.currentUser?.email);
    console.log("rooms: " + room.members);
    
    this.roomService.updateRoom(room);
  }
}
