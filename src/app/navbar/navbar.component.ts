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
  
  //subscribe to the user service behavior to see if the user is logged in
  ngOnInit(): void {
    if(this.userService.isLoggedin){
      console.log('User is logged in!');
      this.userLoggedIn = true;
    }
    else{
      console.error('User not logged in!');
      this.userLoggedIn = false;
    }
    this.userService.logInStatus$.subscribe(
      (value: boolean) => {
        if (value === true){
          console.log('User has logged in!');
          this.userLoggedIn = true;
        }
      }
    )
  }

}
