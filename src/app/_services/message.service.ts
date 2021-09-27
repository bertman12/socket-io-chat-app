import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Message } from '../_models/message';
import { RestService } from './rest.service';
import { SocketioService } from './socketio.service';

@Injectable({
  providedIn: 'root'
})

export class MessageService {

  constructor(private socketioService:SocketioService, private restService: RestService) {}

  messageListChanged$: Subject<Message[] | Message> = new Subject();
  messageEditId$: Subject<number> = new Subject();
  private DISABLE_EDITING_ID:number = -1;
  
  messages: Message[] = [
    // {id:0 ,userId: 0, serverId: 0, roomId: 0, content: 'Im the message content'},
    // {id:1 ,userId: 0, serverId: 1, roomId: 0, content: 'Im the message content'},
    // {id:2 ,userId: 0, serverId: 2, roomId: 0, content: 'Im the message content'},
    // {id:3 ,userId: 0, serverId: 2, roomId: 1, content: 'Im the message content'},
  ];
  
  // a client wont start listening for the chat-message event until it runs createMessage(), so we should start listening to events on app startup.
  getAllMessages(){
    this.restService.get('all').then((data)=> {
      this.messages = data;
      this.messageListChanged$.next();
    });
  }


  generateMessageTime(){
    const date = new Date();
    const messageTime:string = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}`;
    return messageTime;
  }

  emitNewMessage(newMessage: Message){
      const TEMP_USER_ID: number = 0; //when user service is ready, use the specific user's id
      newMessage.time = this.generateMessageTime();
      newMessage.userId = TEMP_USER_ID;

      this.socketioService.emit('chat-message', newMessage);
  }

  createNewMessage(message: Message){
      this.messages.push(message);
      this.messageListChanged$.next(message);
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

  toggleEditing(messageId: number){
    if(messageId >= 0){
      this.messageEditId$.next(messageId);
    }
  }

  //TODO: implement a promise where I can use socketio service to emit the event then I can await a promise from sent back from the server OR...
  /**
   * @param emitEditedMessage 'yeaaaaaa boiiiii'
   * @param messageSelected 'test
   */
  emitEditedMessage(messageSelected: Message){
    this.socketioService.emit('chat-message-edited', messageSelected);
  }

  editMessage(messageSelected: Message){
    this.messages.forEach(
      (msg:Message) =>{
        if(messageSelected.id === msg.id){
          msg.content = messageSelected.content;
          this.messageEditId$.next(this.DISABLE_EDITING_ID);
          this.messageListChanged$.next();
        }
    });
  }


  emitDeletedMessage(messageSelected: Message){
    this.socketioService.emit('chat-message-deleted', messageSelected);
  }

  deleteMessage(messageSelected: Message){
    console.log('reached delete message function. the id is', messageSelected.id);
    if(messageSelected.id >= 0){
      this.messages.forEach(
        (msg, index) =>{
          if(messageSelected.id === msg.id){
            console.log('the message in our array', msg, ' and the message to be deleted', messageSelected);
            this.messages.splice(index, 1);
            this.messageListChanged$.next();
          }
      });
    }
  }
}
