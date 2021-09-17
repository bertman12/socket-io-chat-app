import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/_services/message.service';
import { RoomService } from 'src/app/_services/room.service';

@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html',
  styleUrls: ['./message-input.component.css']
})
export class MessageInputComponent implements OnInit {

  constructor(private messageService: MessageService, private roomService:RoomService) { }

  ngOnInit(): void {

  }

  onMessageEntered(message: string){
    console.log('the message you input', message);
    const NEW_MESSAGE_ID: number = this.roomService.messages.length;
    this.messageService.createMessage(this.roomService.currentRoom.serverId, this.roomService.currentRoom.id, NEW_MESSAGE_ID, message);
  }
}
