import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-room-dropdown',
  templateUrl: './server-room-dropdown.component.html',
  styleUrls: ['./server-room-dropdown.component.css']
})
export class ServerRoomDropdownComponent implements OnInit {
  // type is server or room
  @Input() dropdownType: string = 'server';
  
  locArr:string[] = [
    'Test1',
    'Test2',
    'Test3',
  ]
  title:string = ''
  itemSelected: string='';
  constructor() { }

  ngOnInit(): void {
    if(this.dropdownType === 'server') this.title ="Server";
    else this.title = "Room"
  }

  onItemClick(name:string){
    this.itemSelected = name;
  }

}
