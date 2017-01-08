import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { TimelinePage } from '../timeline/timeline';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  user: any = {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private loader: LoadingController
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  doLogin () {
    console.log(this.user);
    let loader = this.loader.create({
      message: 'Please wait...'
    });

    loader.present();
  }

  goToRegisterPage () {
    this.navCtrl.push(RegisterPage);
  }

}
