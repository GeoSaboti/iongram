import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { AngularFireModule, AuthProviders, AuthMethods} from 'angularfire2';
import { AuthService } from '../providers/auth';


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
    LoginPage,
    RegisterPage
  ],
  imports: [
    IonicModule.forRoot(MyApp, {
      mode: 'ios'
    }),
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegisterPage
  ],
  providers: [AuthService]
})
export class AppModule {}
