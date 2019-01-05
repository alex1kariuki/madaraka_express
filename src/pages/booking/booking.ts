import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ViewController, ModalController } from 'ionic-angular';
import { PaymentsPage } from '../payments/payments';

/**
 * Generated class for the BookingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-booking',
  templateUrl: 'booking.html',
})
export class BookingPage {
  booking: string = "one_way";
  isAndroid: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams,platform: Platform, private view: ViewController, public modal: ModalController) {
    this.isAndroid = platform.is('android');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookingPage');
  }
  closeModal(){
    this.view.dismiss();
  }
  bookButtonClicked(){
    const faq = this.modal.create(PaymentsPage);
    faq.present();
    this.view.dismiss();
  }
}
