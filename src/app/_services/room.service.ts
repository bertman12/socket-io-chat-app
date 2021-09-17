import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
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
    {id: 1, name: 'Room', serverId: 0, image: ''},
    {id: 0, name: 'Room', serverId: 1, image: ''},
    {id: 1, name: 'Room', serverId: 1, image: ''},
    {id: 2, name: 'Room', serverId: 1, image: ''},
    {id: 0, name: 'Room', serverId: 2, image: ''},
    {id: 1, name: 'Room', serverId: 2, image: ''},
    {id: 2, name: 'Room', serverId: 2, image: ''},
    {id: 3, name: 'Room', serverId: 2, image: ''},
    {id: 4, name: 'Room', serverId: 2, image: ''},
  ];

  currentRoom: ChatRoom = {id: 0, name: 'Room', serverId: 0, image: ''};
  roomChanged$ = new Subject<ChatRoom>();

  get messages() {
    return this.messageService.getAllMessages(this.currentRoom.serverId, this.currentRoom.id);
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

  joinRoom(selectedRoomId: number, selectedRoomServerId?: number){
    console.log('RoomServerId:', selectedRoomServerId, ' RoomID ', selectedRoomId);
    this.rooms.forEach((room: ChatRoom) => {
      if((room.serverId === selectedRoomServerId) && (room.id === selectedRoomId)){
        this.currentRoom = room;
        this.roomChanged$.next(this.currentRoom);
        this.messageService.getAllMessages(this.currentRoom.id, this.currentRoom.serverId);
        this.router.navigate(['chat-room', this.currentRoom.serverId  , this.currentRoom.id ]);
      }
      else {
        //this.router.navigate(['404']); //room does not exist
        console.error('Room does not exist!');
      }
    });
  }

  leaveRoom(){

  }

  createRoom(){

  }

  deleteRoom(){

  }

}
