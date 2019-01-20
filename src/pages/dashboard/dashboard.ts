import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController } from 'ionic-angular';
import { BookingPage } from '../booking/booking';
import { FcmProvider } from '../../providers/fcm/fcm';
import { tap } from 'rxjs/operators';
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

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public modal: ModalController,
    public fcm: FcmProvider,
    public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
    this.fcm.getToken();
    
    this.fcm.listenToNotifications().pipe(
      tap(msg => {
        const toast = this.toastCtrl.create({
          message: msg.body,
          duration: 3000,
        });
        toast.present();
      })
    ).subscribe()
  }
  new_booking_clicked() {
    const faq = this.modal.create(BookingPage);
    faq.present();
  }
}
