import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { API_URL } from 'src/environments/environment';
import { Message } from '../_models/message';
import { MessageService } from './message.service';

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
  // set emit(event: {eventName: string, data: any}){
  //   this.socket.emit(event.eventName, event.data);
  // }

  establishConnection(){
    this.socket = io(API_URL);
    console.log('Creating connection');
    // console.log('Socket id:', this.socket.id);
    // console.log(this.socket.id);
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


