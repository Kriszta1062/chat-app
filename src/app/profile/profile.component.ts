import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { RoomService } from '../services/room.service';
import { Room } from '../models/room';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  loggedInUser?: string;
  users: User[] = [];
  userService: any;
  roomService: any;
  rooms: Room[] =[];

  constructor(private authService: AuthService, userService: UserService, roomService: RoomService) { }

  ngOnInit(): void {
    this.authService.getAuth().subscribe(auth => {
      if(auth){
       this.loggedInUser = auth.email;
      }
    });
    
    // this.roomService.getRooms().subscribe((rooms: any) => {
    //   this.rooms = rooms;
    // })
    // console.log(this.rooms);
    

    // this.userService.getUsers().subscribe((users: any) => {
    //   this.users = users;
    // })

    // console.log(this.users);
    

  }

}
