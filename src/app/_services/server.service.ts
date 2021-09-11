import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { ChatRoom } from '../_models/chatRoom';
import { ChatServer } from '../_models/chatServer';
import { Message } from '../_models/message';
import { RoomService } from './room.service';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private roomService:RoomService, private router:Router) { }
  serverList: ChatServer[] = [
    {id:0, name: 'Server', image: '' },
    {id:1, name: 'Server', image: '' },
    {id:2, name: 'Server', image: '' },
  ];

  serverChanged$ = new Subject<number>()
  currentServerId:number = 0; 
  

  get rooms():ChatRoom[]{
    return this.roomService.getRooms(this.currentServerId);
  }

  get roomMessages():Message[]{
    return this.roomService.messages;
  }

  get servers():ChatServer[] {
    return this.serverList.slice();
  }

  joinServer(selectedServerId: number){
    this.currentServerId = selectedServerId;
    this.roomService.room = 0;
    // this.chatAreaUpdated$.next(this.currentChatArea);
    this.router.navigate(['chat-room', this.currentServerId, this.roomService.currentRoom.id ]);
  }
}
