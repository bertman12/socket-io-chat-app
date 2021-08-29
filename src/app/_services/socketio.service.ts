import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client'


@Injectable({
  providedIn: 'root'
})

export class SocketioService {
  socket!: Socket;
  constructor() {
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

  joinRoom(){

  }

  leaveRoom(){

  }

  joinServer(){

  }

  leaveServer(){

  }



}


