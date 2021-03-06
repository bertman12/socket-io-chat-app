import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ChatRoom } from '../_models/chatRoom';
import { ChatServer } from '../_models/chatServer';
import { RoomService } from './room.service';

@Injectable({
  providedIn: 'root'
})

export class ServerService {
  constructor(private roomService:RoomService) { }

  serverList: ChatServer[] = [
    {id:0, name: 'Server', image: '' },
    {id:1, name: 'Server', image: '' },
    {id:2, name: 'Server', image: '' },
  ];
  
  serverChanged$ = new Subject<ChatServer>()
  currentServer:ChatServer = {id:0, name: 'Server', image: '' }; 

  get rooms():ChatRoom[]{
    return this.roomService.getRooms(this.currentServer.id);
  }

  get servers():ChatServer[] {
    return this.serverList.slice();
  }

  joinServer(selectedServer: ChatServer){
    const DEFAULT_ROOM:number = 0
    this.currentServer = selectedServer;
    this.roomService.joinRoom(DEFAULT_ROOM, selectedServer.id,'server service');
    this.serverChanged$.next(this.currentServer);
  }
}
