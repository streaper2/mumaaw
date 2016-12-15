import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Reglage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-reglage',
  templateUrl: 'reglage.html'
})
export class ReglagePage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello ReglagePage Page');
  }

}
