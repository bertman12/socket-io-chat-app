import { Component, Input, OnInit } from '@angular/core';
import { Message } from 'src/app/_models/message';
import { SocketioService } from 'src/app/_services/socketio.service';

@Component({
  selector: 'app-message-header',
  templateUrl: './message-header.component.html',
  styleUrls: ['./message-header.component.css']
})
export class MessageHeaderComponent implements OnInit {

  constructor(private socketioService: SocketioService) { }
  @Input() currentMessage: Message = {id:0 ,userId: 0, serverId: 0, roomId: 0, content: 'MESSAGE NOT RECEIVED'};
  messageCreationDate: string = '';
  socketID: string = '';
  
  ngOnInit(): void {
    this.socketID = this.socketioService.getSocketId();
    // const date = new Date();
    // this.messageCreationDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}`; 
  }

}
