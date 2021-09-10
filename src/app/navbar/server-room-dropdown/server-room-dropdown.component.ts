import { Component, Input, OnInit } from '@angular/core';
import { ChatArea } from 'src/app/_models/chat-area';
import { SocketioService } from 'src/app/_services/socketio.service';

@Component({
  selector: 'app-server-room-dropdown',
  templateUrl: './server-room-dropdown.component.html',
  styleUrls: ['./server-room-dropdown.component.css']
})
export class ServerRoomDropdownComponent implements OnInit {
  // type is server or room
  @Input() destination: string = 'server';
  
  //The local array should get the info of servers or rooms from the database
  locArr:string[] = [
    'Test1',
    'Test2',
    'Test3',
  ];
  
  title:string = 'No Selection'
  chatAreaName: any='';

  constructor(private socketioService:SocketioService) { }

  ngOnInit(){
    if(this.destination === 'server') this.title ="Server";
    else this.title = "Room";

    this.socketioService.chatArea$.subscribe((chatArea: ChatArea) => {
      if(this.destination === 'server'){ 
        this.chatAreaName = chatArea.server.id;
      }
      else {
        this.chatAreaName = chatArea.room.id;
      }
    })
  }

  onRouteClick(name:string, index: number){
    this.chatAreaName = name;
    if(this.destination === 'server'){
      this.socketioService.joinServer(index);
    }
    else if(this.destination === 'room'){
      this.socketioService.joinRoom(index);
    }
  }

}
