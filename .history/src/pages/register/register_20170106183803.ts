import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth';

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
    console.log(this.newUser);
    this.autService.registerUser(this.newUser.email, this.newUser.password)
  }

}
