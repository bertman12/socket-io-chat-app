import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Message } from '../_models/message';
import { SocketioService } from './socketio.service';

@Injectable({
  providedIn: 'root'
})

export class MessageService {

  constructor(private socketioService:SocketioService) {}

  messageListChanged$: Subject<Message[] | Message> = new Subject();
  messageEditId$: Subject<number> = new Subject();
  private DEFAULT_EDIT_ID:number = -1;
  
  messages: Message[] = [
    {id:0 ,userId: 0, serverId: 0, roomId: 0, content: 'Im the message content'},
    {id:0 ,userId: 0, serverId: 1, roomId: 0, content: 'Im the message content'},
    {id:0 ,userId: 0, serverId: 2, roomId: 0, content: 'Im the message content'},
    {id:0 ,userId: 0, serverId: 2, roomId: 1, content: 'Im the message content'},
  ];
  
  // a client wont start listening for the chat-message event until it runs createMessage(), so we should start listening to events on app startup.
  createMessage(serverId: number, roomId: number, messageId:number, message: string){
    //first emit the data to clients
    this.socketioService.emit('chat-message', message);
    //then the clients will listen for the event and add it to their message array
    this.socketioService.socket.on('chat-message', (data:string) => {
      console.log('inside the message service...', data);
      const date = new Date();
      const messageTime:string = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}`;
      const TEMP_USER_ID: number = 0;
      const NEW_MESSAGE = {id: messageId, userId: TEMP_USER_ID, serverId: serverId, roomId: roomId, content: data, time: messageTime};
      console.log('the new message is...', NEW_MESSAGE);
      this.messages.push(NEW_MESSAGE);
      this.messageListChanged$.next(NEW_MESSAGE);
    });
    // const date = new Date();
    // const messageTime:string = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}`;
    // const TEMP_USER_ID: number = 0;
    // const NEW_MESSAGE = {id: messageId, userId: TEMP_USER_ID, serverId: serverId, roomId: roomId, content: message, time: messageTime};
    // this.messages.push(NEW_MESSAGE);
    // this.messageListChanged$.next(NEW_MESSAGE);

    // this.socketioService.emit('chat-message', message);
    // this.socketioService.emitMessage(message);
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
