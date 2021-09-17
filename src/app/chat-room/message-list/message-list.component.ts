import { Component, OnInit } from '@angular/core';
import { ChatRoom } from 'src/app/_models/chatRoom';
import { Message } from 'src/app/_models/message';
import { MessageService } from 'src/app/_services/message.service';
import { RoomService } from 'src/app/_services/room.service';
import { ServerService } from 'src/app/_services/server.service';
import { SocketioService } from 'src/app/_services/socketio.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {

  constructor(private serverService: ServerService, private roomService: RoomService) { }
  localMessages: Message[] = [];
  ngOnInit(): void {
    this.localMessages = this.roomService.messages;
    this.roomService.roomChanged$.subscribe((room: ChatRoom) => {
      this.localMessages = this.roomService.messages;
    });
    // this.serverService.serverChanged$.subscribe(() => {
    //   this.localMessages = this.roomService.messages;
    // })

    // this.socketioService.chatAreaUpdated$.subscribe((chatArea)=>{
    //   this.messageService.getAllMessages(chatArea);
    // });

    // this.messageService.roomMessages$.subscribe((messages: Message[]) => {
    //   this.localMessages = messages;
    // });

    // this.messageService.getAllMessages(this.socketioService.getChatArea());
  }
}
