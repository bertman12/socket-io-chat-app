import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { io, Socket } from 'socket.io-client'
import { ChatArea } from '../_models/chat-area';
import { ChatRoom } from '../_models/chatRoom';
import { ChatServer } from '../_models/chatServer';

@Injectable({
  providedIn: 'root'
})

export class SocketioService {
  socket!: Socket;
  currentServer:ChatServer = {id:0, name: 'Server', image: '' };
  currentRoom:ChatRoom = {id: 0, name: 'Room', serverId: 0, image: ''};
  currentChatArea: ChatArea = {server: this.currentServer, room: this.currentRoom};
  chatArea$:Subject<ChatArea> = new Subject();

  constructor(private route: ActivatedRoute, private router: Router) {
  }


  establishConnection(){
    this.socket = io("http://localhost:3000");
    console.log('Creating connection');
    console.log('Socket id:', this.socket.id);
    console.log(this.socket.id);
  }

  pingServer(){
    const msg:string = "Pinging server now!"
    this.socket.emit('myEvent', msg);
  }

  joinRoom(roomId: number){
    this.currentRoom.id = roomId;
    this.chatArea$.next(this.currentChatArea);
    this.router.navigate(['chat-room', this.currentServer.id  , this.currentRoom.id ]);
  }

  leaveRoom(){

  }

  joinServer(serverId: number){
    this.currentServer.id = serverId;
    this.currentRoom.id = 0;
    this.chatArea$.next(this.currentChatArea);
    this.router.navigate(['chat-room', this.currentServer.id, this.currentRoom.id ]);
  }

  leaveServer(){

  }

}


