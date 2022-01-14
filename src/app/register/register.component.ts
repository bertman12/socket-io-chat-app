import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../_services/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private formBuidler: FormBuilder, private userService:UserService) { }

  ngOnInit(): void {
  }

  registerForm = this.formBuidler.group({
    username: [''],
    email: [''],
    password: [''],
  });

  onRegister(){
    console.log('User form sent to the backend.',this.registerForm.value);
    this.userService.registerUser(this.registerForm.value);
  }


}
