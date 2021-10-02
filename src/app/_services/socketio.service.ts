import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { API_URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class SocketioService {
  
  socket!: Socket;

  constructor() {}
  events: string[] = [
    'chat-message',
    'joined-room',
    'left-room',
    'joined-server',
    'left-server',
  ];

  establishConnection(){
    this.socket = io(API_URL);
    console.log('Creating connection');
    // console.log('Socket id:', this.socket.id);
    // console.log(this.socket.id);
  }
  getSocketId():string{
    return this.socket.id.substring(0,6);
  }

  //setup listener for all events then use the appropriate service to handle the event
  buildEventListeners(){
    for(let eventName of this.events){
      this.socket.on(eventName,(dataObj)=> {
        
      });
    }
  }

  initialize(){
    this.establishConnection();
    this.pingServer();
    // this.buildEventListeners();
  }

  pingServer(){
    const msg:string = "Pinging server now!";
    this.socket.emit('myEvent', msg);
  }
  
  emit(eventName: string, data:any){
    this.socket.emit(eventName, data);
  }

}


