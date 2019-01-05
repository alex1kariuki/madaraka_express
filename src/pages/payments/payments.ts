import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormGroup, FormControl } from '@angular/forms';
import { DashboardPage } from '../dashboard/dashboard';

/**
 * Generated class for the PaymentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payments',
  templateUrl: 'payments.html',
})
export class PaymentsPage {
  langs;
  langForm;
  constructor(public navCtrl: NavController, public navParams: NavParams, private view: ViewController,) {
    this.langForm = new FormGroup({
      "langs": new FormControl({value: 'golang', disabled: false})
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentsPage');
  }
  closeModal(){
    this.view.dismiss();
  }
  doSubmit(event) {
    console.log('Submitting form', this.langForm.value);
    event.preventDefault();
  }
  confirmPayment(){
   this.view.dismiss()
  }
}
