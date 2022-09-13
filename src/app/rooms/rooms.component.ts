import { Component, OnInit, Output } from '@angular/core';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { RoomService } from '../services/room.service';
import { Room } from '../models/room';



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

  rooms: Room[] = [];
  editState: boolean = false;
  roomToEdit?: Room;

  @Output() addButtonActive: boolean = false;

  constructor(private roomService: RoomService) { 

  }

  ngOnInit(): void {
    this.roomService.getRooms().subscribe(rooms => {
      this.rooms = rooms;
      
    })
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

}
