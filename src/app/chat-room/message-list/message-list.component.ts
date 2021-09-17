import { Component, OnInit } from '@angular/core';
import { ChatRoom } from 'src/app/_models/chatRoom';
import { Message } from 'src/app/_models/message';
import { MessageService } from 'src/app/_services/message.service';
import { RoomService } from 'src/app/_services/room.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {

  constructor(private roomService: RoomService, private messageService: MessageService) { }
  localMessages: Message[] = [];
  ngOnInit(): void {
    this.localMessages = this.roomService.messages;
    this.roomService.roomChanged$.subscribe((room: ChatRoom) => {
      this.localMessages = this.roomService.messages;
    });
    this.messageService.messageListChanged$.subscribe((newMessageList: Message[]) => {
      this.localMessages = newMessageList;
    })
  }
}
