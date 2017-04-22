import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routes } from './app.routes';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { FirebaseService } from './services/firebase.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { EventsComponent } from './components/events/events.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EventComponent } from './components/event/event.component';
import { AddeventComponent } from './components/addevent/addevent.component';
import { EditeventComponent } from './components/editevent/editevent.component';

export const firebaseConfig = {
    apiKey: "AIzaSyAKe-lDMdw4b_xjSaf1Gnmy6ztlgPyafBM",
    authDomain: "event-app-29883.firebaseapp.com",
    databaseURL: "https://event-app-29883.firebaseio.com",
    storageBucket: "event-app-29883.appspot.com",
    messagingSenderId: "329599915168"
  };

  const FirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EventsComponent,
    NavbarComponent,
    EventComponent,
    AddeventComponent,
    EditeventComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes,
    AngularFireModule.initializeApp(firebaseConfig, FirebaseAuthConfig),
    FlashMessagesModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
