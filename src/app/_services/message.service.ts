import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ChatArea } from '../_models/chatArea';
import { Message } from '../_models/message';
import { SocketioService } from './socketio.service';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private socketioService: SocketioService) { }
  chatAreaMessages$: Subject<Message[]> = new Subject();
  messages: Message[] = [
    {id:0 ,userId: 0, serverId: 0, roomId: 0, content: 'Im the message content'}
  ]

  createMessage(){

  }

  getMessage(){

  }

  getAllMessages(chatArea: ChatArea){
    const {server, room} = chatArea;
    console.log('getting all messages: here is the server', server, ' and room ', room);
    const arr: Message[] = [];
    this.messages.forEach((message: Message, index: number) => {
      if((message.serverId === server.id ) && (message.roomId === room.id )){
        arr.push(message);
      }
    });
    //in the backend i find messages that match the server and room id and return that list
    this.chatAreaMessages$.next(arr);
  }

  editMessage(){

  }

  deleteMessage(){

  }


}
