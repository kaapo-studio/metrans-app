import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularFireModule} from "@angular/fire";
import {AngularFireDatabaseModule} from "@angular/fire/database";
import {AngularFireAuthModule} from "@angular/fire/auth";
import {ComponentsModule} from "./components/components.module";

import {environment} from "../environments/environment";
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {FollowersService} from "./services/followers.service";
import {AuthService} from "./services/auth.service";
import {UserService} from "./services/user.service";

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    ComponentsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    FollowersService,
    AuthService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
