import { Component, OnInit } from '@angular/core';
import { RoomService } from '../services/room.service';
import { Room } from '../models/room';


@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css']
})
export class AddRoomComponent implements OnInit {
  room: Room = {
    name: '',
    members: [],
    active: true,
    access: '',
    pic: '',
  }

  constructor(private roomService: RoomService) {}


  ngOnInit(): void {
  }

  onSubmit(){
    if(this.room.access != '' && this.room.name != '' && this.room.pic != '' && this.room.members != []){
      this.roomService.addRoom(this.room);
      this.room.name = '';
      this.room.pic = '';
      this.room.members = [];
      this.room.access = '';
      this.room.active = true;
      
    }
  }

}
