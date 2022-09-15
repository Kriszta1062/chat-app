import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../models/message';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {

  chosedRoomId?: string;

  @Input() room: any;

    messages: Message[] = [
      {
        text: 'This is a message.' ,
        time: '18:20',
        userId: 'ojfnvojnde',
        roomId: 'snovdnon',
      },
      {
        text: 'This is another message.' ,
        time: '18:22',
        userId: 'svsdvsvsv',
        roomId: 'snovdnon',
      },
      {
        text: 'This is just another one.' ,
        time: '18:25',
        userId: 'ojfnvojnde',
        roomId: 'snovdnon',
      },
      {
        text:'This one is quite long, just to thest how it looks' ,
        time: '18:27',
        userId: 'svsdvsvsv',
        roomId: 'snovdnon',
      },
      
    ]


  constructor() { }

  ngOnInit(): void {
    console.log(this.messages);
    
  }

}
