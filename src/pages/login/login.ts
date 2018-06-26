import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ToastProvider } from '../../providers/toast/toast';

import { NetworkcheckProvider } from '../../providers/networkcheck/networkcheck';
//import {MainComponent} from '../../components/main/main';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  users;
  email = 'priya@gmail.com';
  password = '123456a';
  user;
  loggedin = 'false';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastprovider: ToastProvider,
    public networkcheck: NetworkcheckProvider,
    //  public header: MainComponent
  ) {
    this.toastprovider.isLogin = false;
    window.localStorage.setItem('loginvariable', this.loggedin);
    if (!this.networkcheck.networkCheck()) {
      this.toastprovider.toast('No Internet Connection', 3000, 'bottom');
    }
    this.users = JSON.parse(window.localStorage.getItem('user'));
    console.log(this.users);
  }

  page() {
    this.navCtrl.setRoot('SignupPage');
  }
  loginFunc() {
    console.log(this.email);
    if (this.email == '' || this.password == '') {
      this.toastprovider.toast(
        'Please Enter Email or Password',
        3000,
        'bottom'
      );
    } else {
      for (let i in this.users) {
        if (
          this.email == this.users[i].email &&
          this.password == this.users[i].password
        ) {
          this.navCtrl.setRoot('HomePage');
          window.localStorage.setItem('userobj', JSON.stringify(this.users[i]));
          this.toastprovider.isLogin = true;
        } else {
          this.toastprovider.toast(
            'Email and Password Incorrect',
            3000,
            'bottom'
          );
          this.toastprovider.isLogin = true;

          break;
        }
      }
    }
  }
}
