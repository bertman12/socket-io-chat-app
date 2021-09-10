import { Component, Input, OnInit } from '@angular/core';
import { Message } from 'src/app/_models/message';

@Component({
  selector: 'app-message-header',
  templateUrl: './message-header.component.html',
  styleUrls: ['./message-header.component.css']
})
export class MessageHeaderComponent implements OnInit {

  constructor() { }
  @Input() currentMessage: Message = {id:0 ,userId: 0, serverId: 0, roomId: 0, content: 'MESSAGE NOT RECEIVED'};

  ngOnInit(): void {
  }

}
