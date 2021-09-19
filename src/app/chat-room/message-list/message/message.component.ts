import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Message } from 'src/app/_models/message';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class MessageComponent implements OnInit {

  constructor() { }
  @Input() currentMessage: Message = {id:0 ,userId: 0, serverId: 0, roomId: 0, content: 'MESSAGE NOT RECEIVED'};

  ngOnInit(): void {
  }

}
