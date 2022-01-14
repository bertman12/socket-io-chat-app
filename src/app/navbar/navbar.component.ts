import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private userService: UserService) { }
  userLoggedIn: boolean = false;


  ngOnInit(): void {
    if(this.userService.isLoggedin){
      console.log('User is logged in!');
      this.userLoggedIn = true;
    }
    else{
      console.error('User not logged in!');
      this.userLoggedIn = false;
    }
  }

}
