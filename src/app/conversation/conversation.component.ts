import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../models/message';
import { MessageService } from '../services/message.service';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Room } from '../models/room';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { RoomService } from '../services/room.service';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {

  faTimes=faTimes;
  @Input() pickedRoomId?: string;
  loggedInUser?: any ;
  messages: Message[] = [];
  users: User[] = [];
  rooms: Room[] = [];
  text: string = ''


  constructor(
    private messageService: MessageService, 
    private roomService: RoomService,
    private userService: UserService,
    private authService: AuthService
    ) {}

  ngOnInit(): void {
    this.messageService.getMessages().subscribe(messages => {
      this.messages = messages;
    })

    this.authService.getAuth().subscribe(auth => {
      if(auth){
       this.loggedInUser = auth.email;
      }
    });
    
    this.roomService.getRooms().subscribe((rooms: any) => {
      this.rooms = rooms;
    })
    

    this.userService.getUsers().subscribe((users: any) => {
      this.users = users;
    })
    
  }

  onSubmit(){
    if(this.text !== '' && this.pickedRoomId){
      const message: Message = {
        text: this.text,
        userId: this.loggedInUser,
        roomId: this.pickedRoomId,
        time: Date.now(),
      }
      this.messageService.addMessage(message);
      this.text = '';
      
    }

  }

  deleteMessage(event: any, message: Message){
    this.messageService.deleteMessage(message);
  }

  displayTime(time: number){ 
    // half of the code from stackoverflow
    var date = new Date (time)
    var hours= date.getHours();
    var minutes = date.getMinutes();
    if(minutes<10){
      var formatMinute = "0" + minutes;
    }else{
      formatMinute = "" + minutes;
    }
    var formattedTime = hours + ':' + formatMinute;
    return formattedTime;
  }

}
 