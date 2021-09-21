import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Message } from 'src/app/_models/message';
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
  @Input() editor: {isEditing: boolean, message: Message} = {isEditing: false, message: {id:0 ,userId: 0, serverId: 0, roomId: 0, content: 'MESSAGE NOT RECEIVED'} };
  editedMessageContent: string = '';
  
  ngOnInit(): void {
    const date = new Date;
    console.log('the date is ...', date);
    this.editedMessageContent = this.editor.message.content;
  }

  
  //The function triggers when user presses enter or uses submit button
  onMessageEntered(keyEvent?: KeyboardEvent){
    const createMessage = () => {
      const NEW_MESSAGE_ID: number = this.roomService.messages.length;
      this.messageService.createMessage(this.roomService.currentRoom.serverId, this.roomService.currentRoom.id, NEW_MESSAGE_ID, this.messageInput);
      this.messageInput = '';
      window.scrollTo(0,document.body.scrollHeight);
    }

    const editMessage = () => {
      console.log('you reached the edit message function');
      this.editor.message.content = this.editedMessageContent;
      this.messageService.editMessage(this.editor.message);
      window.scrollTo(0,document.body.scrollHeight);
    }

    if(keyEvent?.code === 'Enter'){
      if(this.editor.isEditing === false){
        createMessage();
      } 
      else{
        editMessage();
      }
    } 
    else if(!keyEvent){
      if(this.editor.isEditing === false){
        createMessage();
      } 
      else{
        editMessage();
      }
    }
  }
}
