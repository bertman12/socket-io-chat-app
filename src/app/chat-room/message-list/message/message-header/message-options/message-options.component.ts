import { Component, Input, OnInit } from '@angular/core';
import { Message } from 'src/app/_models/message';
import { MessageService } from 'src/app/_services/message.service';

@Component({
  selector: 'app-message-options',
  templateUrl: './message-options.component.html',
  styleUrls: ['./message-options.component.css']
})
export class MessageOptionsComponent implements OnInit {

  constructor(private messageService:MessageService) { }
  @Input() currentMessage: Message = {id:0 ,userId: 0, serverId: 0, roomId: 0, content: 'MESSAGE NOT RECEIVED'};

  ngOnInit(): void {
    
  }

  onEditMessage(){
    this.messageService.toggleEditing(this.currentMessage.id);
  }

  onDeleteMessage(){
    this.messageService.emitDeletedMessage(this.currentMessage);
  }

}
