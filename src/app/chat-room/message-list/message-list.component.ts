import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/_models/message';
import { MessageService } from 'src/app/_services/message.service';
import { ServerService } from 'src/app/_services/server.service';
import { SocketioService } from 'src/app/_services/socketio.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {

  constructor(private serverService: ServerService) { }
  localMessages: Message[] = [];
  ngOnInit(): void {
    this.serverService.serverChanged$.subscribe(() => {
      this.localMessages = this.serverService.roomMessages;
    })
    this.localMessages = this.serverService.roomMessages;

    // this.socketioService.chatAreaUpdated$.subscribe((chatArea)=>{
    //   this.messageService.getAllMessages(chatArea);
    // });

    // this.messageService.roomMessages$.subscribe((messages: Message[]) => {
    //   this.localMessages = messages;
    // });

    // this.messageService.getAllMessages(this.socketioService.getChatArea());
  }
}
