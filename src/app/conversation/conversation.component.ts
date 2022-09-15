import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../models/message';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {

  chosedRoomId?: string;
  currentUserId?: string = "lMsbqeIMduV2d9mHA4CF";
  
  messages: Message[] = [];

  message: Message = {
    text: '',
    time: '',
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
      this.message.time = '';
      this.message.userId = '';
      this.message.roomId = '';
      
    }

  }

}
 