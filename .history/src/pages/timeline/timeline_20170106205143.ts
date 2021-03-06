import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth';

/*
  Generated class for the Timeline page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-timeline',
  templateUrl: 'timeline.html'
})
export class TimelinePage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private auth: Aut
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TimelinePage');
  }

}
