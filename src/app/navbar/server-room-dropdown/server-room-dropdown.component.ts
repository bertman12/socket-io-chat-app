import { Component, Input, OnInit } from '@angular/core';
import { ChatArea } from 'src/app/_models/chatArea';
import { ChatRoom } from 'src/app/_models/chatRoom';
import { ChatServer } from 'src/app/_models/chatServer';
import { SocketioService } from 'src/app/_services/socketio.service';

@Component({
  selector: 'app-server-room-dropdown',
  templateUrl: './server-room-dropdown.component.html',
  styleUrls: ['./server-room-dropdown.component.css']
})
export class ServerRoomDropdownComponent implements OnInit {
  // type is server or room
  @Input() listType: string = 'server';
  
  //The local array should get the info of servers or rooms from the database
  listItemsArr: ChatRoom[] | ChatServer[] = [];
  
  dropdownLabel:string = 'No Selection'
  listItemId: number = 0;

  constructor(private socketioService:SocketioService) { }
  //make component get chat areas from socketio service to populate the dropdown items
  ngOnInit(){
    if(this.listType === 'server'){ 
      this.dropdownLabel ="Server"
      this.listItemsArr = this.socketioService.getServers();
    }
    else {
      this.dropdownLabel = "Room"
      this.listItemsArr = this.socketioService.getRooms();
    };
    this.socketioService.chatAreaUpdated$.subscribe((chatArea: ChatArea) => {
      if(this.listType === 'server'){ 
        this.listItemId = chatArea.server.id;
      }
      else {
        this.listItemId = chatArea.room.id;
      }
    });
  }

  onItemClicked(item: ChatServer | ChatRoom){
    this.listItemId = item.id;
    if(this.listType === 'server'){
      this.socketioService.joinServer(item.id);
    }
    else if(this.listType === 'room'){
      this.socketioService.joinRoom(item.id);
    }
  }

}
