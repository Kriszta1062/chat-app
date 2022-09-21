import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RoomService } from '../services/room.service';
import { Room } from '../models/room';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css'],
})
export class AddRoomComponent implements OnInit {
  faTimes = faTimes;
  @Input() addButtonActive?: boolean;
  @Output() changedButtonActivity = new EventEmitter<boolean>();
  emailList!: string;

  room: Room = {
    name: '',
    members: [],
    // active: true,
    access: '',
    pic: '',
  };

  constructor(private roomService: RoomService) {}

  ngOnInit(): void {}

  onSubmit() {
    if (
      this.room.access != '' &&
      this.room.name != '' &&
      this.room.pic != '' &&
      this.emailList != ''
    ) {
      this.room.members = this.emailList.split(' ');
      this.roomService.addRoom(this.room);
      this.room.name = '';
      this.room.pic = '';
      this.room.access = '';
      this.room.members = [];

      // this.room.active = true;
    }
    this.buttonChange();
  }

  buttonChange() {
    this.changedButtonActivity.emit(false);
  }
}
