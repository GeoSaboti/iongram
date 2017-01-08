import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { LoginPage } from '../pages/login/login';
import { TimelinePage } from '../pages/timeline/timeline';
import { AuthService } from '../providers/auth';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any;

  constructor(
    platform: Platform,
    private auth: AuthService
  ) {
    this.checkSession();
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  checkSession () {
    this.auth.session
      .subscribe(session => {
        debugger;
        this.rootPage = this.getPageInit(session);
      });
  }

  getPageInit (session): any {
    if (session) return TimelinePage;
    return LoginPage;
  }
}
