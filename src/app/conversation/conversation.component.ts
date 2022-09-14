import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../models/message';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {

  @Input() room: any;

  // messages: string[] = ['This is a message.', 'This is another message.', 'This is just another one.', 'This one is quite long, just to thest how it looks'];

    messages: Message[] = [
      {
        text: 'This is a message.' ,
        time: '18:20',
        userId: 'ojfnvojnde',
        roomid: 'snovdnon',
      },
      {
        text: 'This is another message.' ,
        time: '18:22',
        userId: 'svsdvsvsv',
        roomid: 'snovdnon',
      },
      {
        text: 'This is just another one.' ,
        time: '18:25',
        userId: 'ojfnvojnde',
        roomid: 'snovdnon',
      },
      {
        text:'This one is quite long, just to thest how it looks' ,
        time: '18:27',
        userId: 'svsdvsvsv',
        roomid: 'snovdnon',
      },
      
    ]


  constructor() { }

  ngOnInit(): void {
    console.log(this.messages);
    
  }

}
