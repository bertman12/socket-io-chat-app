import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { API_URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class SocketioService {
  
  // private readonly DEFAULT_ROOM_NUMBER: number = 0;
  
  socket!: Socket;
  // currentServer:ChatServer = {id:0, name: 'Server', image: '' };
  // currentRoom:ChatRoom = {id: 0, name: 'Room', serverId: 0, image: ''};
  // currentChatArea: ChatArea = {server: this.currentServer, room: this.currentRoom};
  // chatAreaUpdated$:Subject<ChatArea> = new Subject();
  
  // chatAreas: ChatArea[] = [
  //   {
  //     server:{id:0, name: 'Server', image: '' }, 
  //     room: {id: 0, name: 'Room', serverId: 0, image: ''}
  //   },
  //   {
  //     server:{id:1, name: 'Server', image: '' }, 
  //     room: {id: 0, name: 'Room', serverId: 1, image: ''}
  //   },
  //   {
  //     server:{id:2, name: 'Server', image: '' }, 
  //     room: {id: 0, name: 'Room', serverId: 2, image: ''}
  //   },
  //   {
  //     server:{id:3, name: 'Server', image: '' }, 
  //     room: {id: 1, name: 'Room', serverId: 3, image: ''}
  //   },
  // ]

  constructor() {}

  establishConnection(){
    this.socket = io(API_URL);
    console.log('Creating connection');
    console.log('Socket id:', this.socket.id);
    console.log(this.socket.id);
  }

  pingServer(){
    const msg:string = "Pinging server now!"
    this.socket.emit('myEvent', msg);
  }

  // getRooms():ChatRoom[] {
  //   const locArr:ChatRoom[] = [];
  //   this.chatAreas.forEach( (chatArea:ChatArea) => {
  //     if (this.currentServer.id === chatArea.room.serverId){
  //       locArr.push(chatArea.room);
  //     }
  //   });
  //   return locArr;
  // }

  // joinRoom(roomId: number){
  //   this.currentRoom.id = roomId;
  //   this.chatAreaUpdated$.next(this.currentChatArea);
  //   this.router.navigate(['chat-room', this.currentServer.id  , this.currentRoom.id ]);
  // }

  // leaveRoom(){

  // }

  // getServers():ChatServer[] {
  //   const locArr:ChatServer[] = [];
  //   this.chatAreas.forEach((chatArea: ChatArea) => {
  //     locArr.push(chatArea.server);
  //   });
  //   return locArr;
  // }

  // joinServer(serverId: number){
  //   this.currentServer.id = serverId;
  //   this.currentRoom.id = this.DEFAULT_ROOM_NUMBER;
  //   this.chatAreaUpdated$.next(this.currentChatArea);
  //   this.router.navigate(['chat-room', this.currentServer.id, this.currentRoom.id ]);
  // }

  // leaveServer(){

  // }

  // getChatArea(){
  //   return this.currentChatArea;
  // }

  // getChatAreas(){
  //   return this.chatAreas.slice();
  // }
  
}


