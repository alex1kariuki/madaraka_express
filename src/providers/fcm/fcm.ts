import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Firebase } from '@ionic-native/firebase';
import { Platform } from 'ionic-angular';
import { AngularFirestore } from '@angular/fire/firestore';
/*
  Generated class for the FcmProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FcmProvider {

  constructor(public http: HttpClient,
    public afs: AngularFirestore,
    private platform: Platform,
    public firebaseNative: Firebase, ) {
    console.log('Hello FcmProvider Provider');
  }
  async getToken() {
    let token;

    if (this.platform.is('android')) {
      token = await this.firebaseNative.getToken()
    }
    if (this.platform.is('ios')) {
      token = await this.firebaseNative.getToken();
      await this.firebaseNative.grantPermission();
    }
    if (this.platform.is('cordova')) {
      token = await this.firebaseNative.getToken();
      await this.firebaseNative.grantPermission();
    }

    return this.saveTokenToFirestore(token)
  }
  private saveTokenToFirestore(token) {
    if (!token) return;
    const devicesRef = this.afs.collection('devices');

    const docData = {
      token,
      userId: 'testUser',
    }
    return devicesRef.doc(token).set(docData);

  }
  listenToNotifications() {
    return this.firebaseNative.onNotificationOpen()
  }
}
