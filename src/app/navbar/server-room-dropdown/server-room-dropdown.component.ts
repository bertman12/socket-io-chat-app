import { Component, Input, OnInit } from '@angular/core';
import { ChatArea } from 'src/app/_models/chatArea';
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
  localChatAreas: any[] = [];
  
  title:string = 'No Selection'
  chatAreaName: any='';

  constructor(private socketioService:SocketioService) { }
  //make component get chat areas from socketio service to populate the dropdown items
  ngOnInit(){
    if(this.destination === 'server'){ 
      this.title ="Server"
    this.socketioService.getChatAreas().forEach( (chatArea:ChatArea) => {
      this.localChatAreas.push(chatArea.server);
    });
    }
    else {
      this.title = "Room"
      this.socketioService.getChatAreas().forEach( (chatArea:ChatArea) => {
        if (this.socketioService.currentServer.id === chatArea.room.serverId){
          this.localChatAreas.push(chatArea.room);
        }
      });
    };
    // this.localChatAreas = this.socketioService.getChatAreas();
    this.socketioService.chatAreaUpdated$.subscribe((chatArea: ChatArea) => {
      if(this.destination === 'server'){ 
        this.chatAreaName = chatArea.server.id;
      }
      else {
        this.chatAreaName = chatArea.room.id;
      }
    });
  }

  onRouteClicked(chatArea: any){
    console.log('this is the chat area clicked', chatArea);
    this.chatAreaName = chatArea.name;
    if(this.destination === 'server'){
      this.socketioService.joinServer(chatArea.id);
    }
    else if(this.destination === 'room'){
      this.socketioService.joinRoom(chatArea.id);
    }
  }

}
