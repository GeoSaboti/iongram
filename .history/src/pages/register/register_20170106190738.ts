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
    private autService: AuthService,
    public loading: LoadingController
  ) {}

  ionViewDidLoad() {
  }

  doRegister () {
    let load = this.loading.create({
      content: 'Please wait...'
    });
    load.present();
    console.log(this.newUser);
    this.autService.registerUser(this.newUser.email, this.newUser.password)
      .then((user) => {
        console.log(user);
        load.dismiss();
        debugger;
        this.navCtrl.setRoot(TimelinePage);
      })
      .catch((error) => {
        debugger;
        load.dismiss();
        console.log('ESTE ES EL ERROR', error);
      });
  }

}
