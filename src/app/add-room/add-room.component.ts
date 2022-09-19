import { Component, Input, OnInit } from '@angular/core';
import { RoomService } from '../services/room.service';
import { Room } from '../models/room';
import {faTimes} from '@fortawesome/free-solid-svg-icons';;


@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css']
})
export class AddRoomComponent implements OnInit {

  faTimes=faTimes;

  @Input() addButtonActive?: boolean;

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


  clearAddState(){
    this.addButtonActive = false;
    console.log(this.addButtonActive);
  }

}
