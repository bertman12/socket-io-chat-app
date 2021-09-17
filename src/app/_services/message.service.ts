import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Message } from '../_models/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() {}

  messageListChanged$: Subject<Message[]> = new Subject();
  messages: Message[] = [
    {id:0 ,userId: 0, serverId: 0, roomId: 0, content: 'Im the message content'},
    {id:0 ,userId: 0, serverId: 1, roomId: 0, content: 'Im the message content'},
    {id:0 ,userId: 0, serverId: 2, roomId: 0, content: 'Im the message content'},
    {id:0 ,userId: 0, serverId: 2, roomId: 1, content: 'Im the message content'},
  ];

  createMessage(serverId: number, roomId: number, messageId:number, message: string){
    //get data about current server, room and user
    const TEMP_USER_ID: number = 0;
    this.messages.push({id: messageId, userId: TEMP_USER_ID, serverId: serverId, roomId: roomId, content: message});
    console.log('The current new message...',{id: messageId, userId: TEMP_USER_ID, serverId: serverId, roomId: roomId, content: message});
    console.log('The current list of messages...',this.messages);
    this.getAllMessages(serverId, roomId);
  }

  getMessage(){

  }

  getAllMessages(serverId:number, roomId: number){
    const arr: Message[] = [];
    this.messages.forEach((message: Message) => {
      if((message.serverId === serverId ) && (message.roomId === roomId )){
        arr.push(message);
      }
    });
    //in the backend I find messages that match the server and room id and return that list
    this.messageListChanged$.next(arr);
    return arr;
  }

  editMessage(){

  }

  deleteMessage(){

  }
}
