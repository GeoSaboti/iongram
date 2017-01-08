import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { AngularFireModule, AuthProviders, AuthMethods} from 'angularfire2';

// AF2 Settings
const firebaseConfig = {
  apiKey: "AIzaSyBbFg2QeC1XWPc98bwZ9NRZuRNJeGX3WUo",
  authDomain: "iongram-e3d4d.firebaseapp.com",
  databaseURL: "https://iongram-e3d4d.firebaseio.com",
  storageBucket: "iongram-e3d4d.appspot.com",
  messagingSenderId: "501350512497"
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)
  ],
  bootstrap: [LoginPage],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
