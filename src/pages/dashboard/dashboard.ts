import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { BookingPage } from '../booking/booking';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public modal: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }
  new_booking_clicked(){
    const faq = this.modal.create(BookingPage);
    faq.present();
  }
}
