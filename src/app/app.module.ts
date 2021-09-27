import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocketioService } from './_services/socketio.service';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MapComponent } from './map/map.component';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { MessageComponent } from './chat-room/message-list/message/message.component';
import { MessageListComponent } from './chat-room/message-list/message-list.component';
import { MessageHeaderComponent } from './chat-room/message-list/message/message-header/message-header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarSettingsComponent } from './navbar/navbar-settings/navbar-settings.component';
import { NavbarUserComponent } from './navbar/navbar-user/navbar-user.component';
import { ServerRoomDropdownComponent } from './navbar/server-room-dropdown/server-room-dropdown.component';
import { UserService } from './_services/user.service';
import { MessageService } from './_services/message.service';
import { RoomService } from './_services/room.service';
import { ServerService } from './_services/server.service';
import { MessageInputComponent } from './chat-room/message-input/message-input.component';
import { MessageOptionsComponent } from './chat-room/message-list/message/message-header/message-options/message-options.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    UserProfileComponent,
    LoginComponent,
    RegisterComponent,
    MapComponent,
    ChatRoomComponent,
    MessageComponent,
    MessageListComponent,
    FooterComponent,
    MessageHeaderComponent,
    NavbarSettingsComponent,
    NavbarUserComponent,
    ServerRoomDropdownComponent,
    MessageInputComponent,
    MessageOptionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [
    SocketioService,
    UserService,
    MessageService,
    RoomService,
    ServerService  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
