import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { TimelinePage } from '../timeline/timeline';
import { AuthService } from '../../providers/auth';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  user: any = {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private loader: LoadingController,
    private authService: AuthService
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  doLogin () {
    let loader = this.loader.create({
      content: 'Please wait...'
    });

    loader.present();

    this.authService.loginUser(this.user.email, this.user.password)
      .then(user => {
        loader.dismiss();
        this.navCtrl.setRoot(TimelinePage);
      })
      .catch(error => {

      })
  }

  goToRegisterPage () {
    this.navCtrl.push(RegisterPage);
  }

}
