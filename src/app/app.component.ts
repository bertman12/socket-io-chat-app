import { Component, OnInit } from '@angular/core';
import { SocketioService } from './_services/socketio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(private socketioService: SocketioService){}
  events: string[] = [
    'chat-message',
    'joined-room',
    'left-room',
    'joined-server',
    'left-server',
  ];


  ngOnInit(){
    this.socketioService.establishConnection();
    this.socketioService.pingServer();
    //setup listener for all events then use the appropriate service to handle the event
    for(let eventName of this.events){
      this.socketioService.socket.on(eventName,(dataObj)=> {
        
      })
    }
  }

}
