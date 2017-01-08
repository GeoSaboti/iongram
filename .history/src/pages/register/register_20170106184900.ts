import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { AuthService } from '../../providers/auth';

import { TimelinePage } from '../timeline/timeline';

/*
  Generated class for the Register page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  newUser: any = {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private autService: AuthService
  ) {}

  ionViewDidLoad() {
  }

  doRegister () {
    let load = LoadingController.
    console.log(this.newUser);
    this.autService.registerUser(this.newUser.email, this.newUser.password)
      .then(user => {
        console.log(user)
        this.navCtrl.setRoot(TimelinePage,{}, {
          animation: 'slideDown'
        })
      });
  }

}
