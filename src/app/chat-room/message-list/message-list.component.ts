import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/_models/message';
import { MessageService } from 'src/app/_services/message.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {

  constructor(private messageService: MessageService) { }
  localMessages: Message[] = [];
  ngOnInit(): void {
    this.messageService.chatAreaMessages$.subscribe((messages: Message[]) => {
      this.localMessages = messages;
    });
    this.messageService.getAllMessages();
  }

}
