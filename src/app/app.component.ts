import { Component, OnInit } from '@angular/core';
import { SocketioService } from './_services/socketio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(private socketioService: SocketioService){}

  ngOnInit(){
    this.socketioService.initialize();
  }
}
