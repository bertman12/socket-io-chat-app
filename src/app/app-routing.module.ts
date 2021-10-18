import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'chat-room/:server/:room', component: ChatRoomComponent}, 
  {path: 'user-profile', component: UserProfileComponent}, 
  {path: 'register', component: RegisterComponent}, 

  {path:"**", redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
