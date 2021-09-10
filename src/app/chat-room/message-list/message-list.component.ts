import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/_models/message';
import { MessageService } from 'src/app/_services/message.service';
import { SocketioService } from 'src/app/_services/socketio.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {

  constructor(private messageService: MessageService, private socketioService: SocketioService) { }
  localMessages: Message[] = [];
  ngOnInit(): void {
    this.socketioService.chatAreaUpdated$.subscribe((chatArea)=>{
      this.messageService.getAllMessages(chatArea);
    });
    this.messageService.chatAreaMessages$.subscribe((messages: Message[]) => {
      this.localMessages = messages;
    });
    // this.socketioService.getChatArea();
    this.messageService.getAllMessages(this.socketioService.getChatArea());
  }
}
