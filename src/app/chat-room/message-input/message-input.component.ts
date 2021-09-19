import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MessageService } from 'src/app/_services/message.service';
import { RoomService } from 'src/app/_services/room.service';

@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html',
  styleUrls: ['./message-input.component.css']
})
export class MessageInputComponent implements OnInit {
  @ViewChild('input') input!: ElementRef;
  constructor(private messageService: MessageService, private roomService:RoomService) { }
  messageInput: string = '';
  
  ngOnInit(): void {

  }

  
  //The function triggers when user presses enter or uses submit button
  onMessageEntered(keyEvent?: KeyboardEvent){
    const createMessage = () => {
      const NEW_MESSAGE_ID: number = this.roomService.messages.length;
      this.messageService.createMessage(this.roomService.currentRoom.serverId, this.roomService.currentRoom.id, NEW_MESSAGE_ID, this.messageInput);
      this.messageInput = '';
      window.scrollTo(0, window.visualViewport.height);
    }

    if(keyEvent?.code === 'Enter'){
      createMessage();
    } 
    else if(!keyEvent){
      createMessage();
    }
  }
}
