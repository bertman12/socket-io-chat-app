import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ChatRoom } from '../_models/chatRoom';
import { Message } from '../_models/message';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private router: Router, private messageService: MessageService) { }

  rooms: ChatRoom[] = [
    {id: 0, name: 'Room', serverId: 0, image: ''},
    {id: 0, name: 'Room', serverId: 1, image: ''},
    {id: 0, name: 'Room', serverId: 2, image: ''},
  ]

  currentRoom: ChatRoom = {id: 0, name: 'Room', serverId: 0, image: ''};
    
  get messages() {
    return this.messageService.getAllMessages(this.currentRoom.serverId, this.currentRoom.id);
  }

  set room(newRoomId: number){
    this.rooms.forEach( (room: ChatRoom) => {
      if(room.id = newRoomId) this.currentRoom = room;
    });
  }

  getRooms(currentServerId: number):ChatRoom[] {
    const locArr:ChatRoom[] = [];
    this.rooms.forEach( (room:ChatRoom) => {
      if (currentServerId === room.serverId){
        locArr.push(room);
      }
    });
    return locArr;
  }

  joinRoom(roomId: number, currentServerId: number){
    this.currentRoom.id = roomId;
    // this.chatAreaUpdated$.next(this.currentChatArea);
    this.router.navigate(['chat-room', currentServerId  , this.currentRoom.id ]);
  }

  leaveRoom(){

  }

  createRoom(){

  }

  deleteRoom(){

  }

}
