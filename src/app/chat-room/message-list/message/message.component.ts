import { Component, Input, OnInit } from '@angular/core';
import { Message } from 'src/app/_models/message';
import { MessageService } from 'src/app/_services/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
})
export class MessageComponent implements OnInit {

  constructor(private messageService: MessageService) { }
  @Input() currentMessage: Message = {id:0 ,userId: 0, serverId: 0, roomId: 0, content: 'MESSAGE NOT RECEIVED'};

  messageEditId: number = -1;
  
  ngOnInit(): void {
    this.messageService.messageEditId$.subscribe((messageId: number) => {
      this.messageEditId = messageId;
    });
  }

}
