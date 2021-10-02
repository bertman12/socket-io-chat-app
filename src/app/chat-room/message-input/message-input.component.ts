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
  constructor(private messageService: MessageService, private roomService:RoomService) { }
  
  @Input() editor: {isEditing: boolean, message: Message} = {isEditing: false, message: {id:0 ,userId: 0, serverId: 0, roomId: 0, content: 'MESSAGE NOT RECEIVED'} };
  
  newMessageContent: string = '';
  editedMessageContent: string = '';
  
  ngOnInit(): void {
    this.editedMessageContent = this.editor.message.content;
  }
  
  //The function triggers when user presses enter or uses submit button
  onMessageEntered(keyEvent?: KeyboardEvent){
    const bundleMessage = () => {
      let NEW_MESSAGE_ID: number = this.roomService.messages.length + 1
      if(this.roomService.messages.length === 1){
        NEW_MESSAGE_ID = 1;
      }
      console.log('NEW MESSAGE ID: ', NEW_MESSAGE_ID);
      let newMessage:Message = {id: NEW_MESSAGE_ID, userId: 0, serverId: this.roomService.currentRoom.serverId , roomId: this.roomService.currentRoom.id, content: this.newMessageContent };
      this.messageService.emitNewMessage(newMessage);
      this.newMessageContent = '';
      window.scrollTo(0,document.body.scrollHeight);
    }

    const editMessage = () => {
      this.editor.message.content = this.editedMessageContent;
      this.messageService.emitEditedMessage(this.editor.message);
      window.scrollTo(0,document.body.scrollHeight);
    }

    if(keyEvent?.code === 'Enter'){
      if(this.editor.isEditing === false){
        bundleMessage();
      } 
      else{
        editMessage();
      }
    } 
    else if(!keyEvent){
      if(this.editor.isEditing === false){
        bundleMessage();
      } 
      else{
        editMessage();
      }
    }
  }
}
