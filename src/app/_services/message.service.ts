import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Message } from '../_models/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() {
  }

  messageListChanged$: Subject<Message[] | Message> = new Subject();
  messageEditId$: Subject<number> = new Subject();
  private DEFAULT_EDIT_ID:number = -1;
  
  messages: Message[] = [
    {id:0 ,userId: 0, serverId: 0, roomId: 0, content: 'Im the message content'},
    {id:0 ,userId: 0, serverId: 1, roomId: 0, content: 'Im the message content'},
    {id:0 ,userId: 0, serverId: 2, roomId: 0, content: 'Im the message content'},
    {id:0 ,userId: 0, serverId: 2, roomId: 1, content: 'Im the message content'},
  ];

  createMessage(serverId: number, roomId: number, messageId:number, message: string){
    const date = new Date();
    const messageTime:string = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}`
    const TEMP_USER_ID: number = 0;
    const NEW_MESSAGE = {id: messageId, userId: TEMP_USER_ID, serverId: serverId, roomId: roomId, content: message, time: messageTime};
    this.messages.push(NEW_MESSAGE);
    this.messageListChanged$.next(NEW_MESSAGE);
  }

  getMessage(){

  }

  getRoomMessages(serverId:number, roomId: number){
    const arr: Message[] = [];
    this.messages.forEach((message: Message) => {
      if((message.serverId === serverId ) && (message.roomId === roomId )){
        arr.push(message);
      }
    });
    return arr;
  }

  onEditMessage(messageId: number){
    if(messageId >= 0){
      this.messageEditId$.next(messageId);
    }
  }

  editMessage(messageSelected: Message){
    this.messages.forEach(
      (msg) =>{
        if(messageSelected === msg){
          msg.content = messageSelected.content;
          this.messageEditId$.next(this.DEFAULT_EDIT_ID);
          this.messageListChanged$.next();
        }
    });
  }

  deleteMessage(messageSelected: Message){
    if(messageSelected.id >= 0){
      this.messages.forEach(
        (msg, index) =>{
          if(messageSelected === msg){
            this.messages.splice(index, 1);
            this.messageListChanged$.next();
          }
      });
    }
  }
}
