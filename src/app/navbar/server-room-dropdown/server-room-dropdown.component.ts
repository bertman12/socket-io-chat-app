import { Component, Input, OnInit } from '@angular/core';
import { ChatArea } from 'src/app/_models/chatArea';
import { ChatRoom } from 'src/app/_models/chatRoom';
import { ChatServer } from 'src/app/_models/chatServer';
import { RoomService } from 'src/app/_services/room.service';
import { ServerService } from 'src/app/_services/server.service';
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
  selectedItemId: number = 0;

  constructor(private serverService: ServerService, private roomService:RoomService) { }
  ngOnInit(){
    if(this.listType === 'server'){ 
      this.dropdownLabel ="Server"
      this.listItemsArr = this.serverService.servers;
    }
    else {
      this.dropdownLabel = "Room"
      this.listItemsArr = this.serverService.rooms;
    }
    this.serverService.serverChanged$.subscribe((selectedServer: ChatServer) => {
      //update the dropdown list to show the correct rooms when a new server is selected
      if(this.listType === 'server'){ 
        this.selectedItemId = selectedServer.id;
      }
      else {
        this.selectedItemId = this.roomService.currentRoom.id;
        this.listItemsArr = this.serverService.rooms;
      }
    });
  }

  onItemClicked(item: any){
    this.selectedItemId = item.id;
    if(this.listType === 'server'){
      this.serverService.joinServer(item);
    }
    else if(this.listType === 'room'){
      this.roomService.joinRoom(item.id, this.serverService.currentServer.id);
    }
  }

}
