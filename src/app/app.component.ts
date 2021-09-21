import { Component, OnInit } from '@angular/core';
import { MessageService } from './_services/message.service';
import { SocketioService } from './_services/socketio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(private socketioService: SocketioService, private messageService: MessageService){}

  ngOnInit(){
    this.socketioService.initialize();
    
    this.socketioService.socket.on('chat-message', (message) => {
      this.messageService.createNewMessage(message);
    });
    
    this.socketioService.socket.on('chat-message-edited', (message) => {
      this.messageService.editMessage(message);
    });
    
    this.socketioService.socket.on('chat-message-deleted', (message) => {
      this.messageService.deleteMessage(message);
    });






  }
}
