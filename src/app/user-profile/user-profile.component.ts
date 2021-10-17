import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  username: string = 'Username';
  nameEdit: boolean = false;
  avatarSource: string = 'https://avatars.dicebear.com/api/jdenticon/null.svg';
  constructor() { }

  ngOnInit(): void {
    
  }

  onToggleEdit(){
    this.avatarSource = `https://avatars.dicebear.com/api/jdenticon/${this.username}.svg`;
    this.nameEdit = !this.nameEdit;
  }

}
