import {Injectable} from '@angular/core';
import {ToastController} from 'ionic-angular';

/*
  Generated class for the ToastProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ToastProvider {
  isLogin;
  constructor(private toastCtrl: ToastController) {}
  toast(message, duration, position) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: duration,
      position: position,
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
}
