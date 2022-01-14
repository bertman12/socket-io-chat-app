import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../_models/user';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor(private restService: RestService) { }

  user!: User;
  userJwtToken: string = '';
  isLoggedin: boolean = false;
  userState$ = new Subject<User>();
  logInStatus$ = new Subject<boolean>();

  async registerUser(form: any){
    const response = await this.restService.post('register', form);
    console.log('Response from the resolved promise in the user service...', response);
    this.userJwtToken = response.key;
    this.isLoggedin = true;
    if(response.success === true){
      this.logInStatus$.next(true);
    }
    this.userState$.next(this.user);
    console.log('Response from registration!', response);
  }
  
  loginUser(){

  }

  getUsers(){

  }

  getUser(){
    
  }
}
