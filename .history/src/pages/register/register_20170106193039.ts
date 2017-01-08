import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { AuthService } from '../../providers/auth';

import { TimelinePage } from '../timeline/timeline';
import { LoginPage } from '../login/login';

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
    public loading: LoadingController,
    public alert: AlertController
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
        this.navCtrl.setRoot(LoginPage);
      })
      .catch((error) => {
        let alert = this.alert.create({
          title: '¡Existing User!',
          message: error.message,
          buttons: ['Ok']
        });
        alert.present();
        debugger;
        load.dismiss();
        console.log('ESTE ES EL ERROR', error);
      });
  }

}
