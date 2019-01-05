import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the StationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stations',
  templateUrl: 'stations.html',
})
export class StationsPage {
  stations: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.stations = [
      { title: 'Nairobi Railway Station', image: 'assets/imgs/1Nairobi.jpg' },
      { title: 'Mtito Andei Railway Station', image: 'assets/imgs/2Mtito.jpg' },
      { title: 'Mombasa Railway Station', image: 'assets/imgs/3Mombasa.jpg' },
      { title: 'Voi Railway Station', image: 'assets/imgs/4Voi.jpg' },
      { title: 'Athi Railway Station', image: 'assets/imgs/5Athi.jpg' },
      { title: 'Emali Railway Station', image: 'assets/imgs/6Emali.jpg' },
      { title: 'Mariakani Railway Station', image: 'assets/imgs/7Mariakani.jpg' },
      { title: 'Miasenyi Railway Station', image: 'assets/imgs/8Miasenyi.jpg' },
    ];


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StationsPage');
  }


}
