import { Component, OnInit } from '@angular/core';
import { ChatArea } from '../_models/chatArea';
import { SocketioService } from '../_services/socketio.service';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {

  constructor(){}
  // locChatArea: ChatArea = {server: {id:0, name: 'Server', image: '' }, room: {id: 0, name: 'Room', serverId: 0, image: ''}}
  
  ngOnInit(): void {
    // this.socketioService.chatAreaUpdated$.subscribe((chatArea: ChatArea) => {
    //   this.locChatArea = chatArea;
    // })

  }
}
