import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../models/message';
import { MessageService } from '../services/message.service';
import { faTimes } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {

  faTimes=faTimes;
  chosedRoomId?: string;
  @Input() loggedInUser: any ;
  messages: Message[] = [];

  currentTime = new Date();
  
  time= this.currentTime.getHours() + ':' + this.currentTime.getMinutes();

  
  message: Message = {
    text: '',
    time:  this.time, // current date
    userId: '',
    roomId: '',
  }

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.messageService.getMessages().subscribe(messages => {
      this.messages = messages;
    })

    
  }

  onSubmit(){
    if(this.message.text != ''){
      this.messageService.addMessage(this.message);
      this.message.text = '';
      this.message.time = this.time;
      this.message.userId = '';
      this.message.roomId = '';
      
    }

  }

  deleteMessage(event: any, message: Message){
    this.messageService.deleteMessage(message);
  }

}
 