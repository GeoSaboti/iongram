import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
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
    private authService: AuthService,
    private alert: AlertController
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
        loader.dismiss();
        let alert = this.alert.create({
          title: '¡Login Error!',
          message: error.message,
          buttons: ['Ok']

        });
        alert.present();

      })
  }

  goToRegisterPage () {
    this.navCtrl.push(RegisterPage);
  }

}
