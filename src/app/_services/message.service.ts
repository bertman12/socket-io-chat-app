import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Message } from '../_models/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  roomMessages$: Subject<Message[]> = new Subject();
  messages: Message[] = [
    {id:0 ,userId: 0, serverId: 0, roomId: 0, content: 'Im the message content'}
  ]

  createMessage(){

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
    
    //in the backend i find messages that match the server and room id and return that list
    this.roomMessages$.next(arr);
    return arr;
  }

  editMessage(){

  }

  deleteMessage(){

  }


}
