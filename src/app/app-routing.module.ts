import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ServerRoomDropdownComponent } from './navbar/server-room-dropdown/server-room-dropdown.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'navbar/dropdown', component: ServerRoomDropdownComponent},
  {path: 'chat-room/:server/:room', component: ChatRoomComponent}, 

  {path:"**", redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
