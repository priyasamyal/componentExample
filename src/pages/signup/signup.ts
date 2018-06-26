import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ToastProvider} from '../../providers/toast/toast';
import {MainComponent} from '../../components/main/main';
import {IonicPageModule} from 'ionic-angular';
import {NgModule} from '@angular/core';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  user: any = {username: '', email: '', password: '', confirm_password: ''};
  public emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
  usernamePattern = /^[a-zA-Z0-9_]+$/;
  email;
  localstorage_value;
  total_user: any = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastprovider: ToastProvider,
    public header: MainComponent
  ) {
    console.log(JSON.parse(window.localStorage.getItem('user')));
    this.localstorage_value = JSON.parse(window.localStorage.getItem('user'));
    if (this.localstorage_value != null) {
      this.total_user = this.localstorage_value;
    }
  }

  validation() {
    let email = this.emailPattern.test(this.user.email);
    let password = this.passwordPattern.test(this.user.password);
    let username = this.usernamePattern.test(this.user.username);
    if (this.user.username == '') {
      console.log('a');
      this.toastprovider.toast('Please Enter User Name ', 3000, 'bottom');
    } else if (!username) {
      this.toastprovider.toast(
        'Username can be alphanumeric including underscore only.',
        3000,
        'bottom'
      );
    } else if (this.user.email == '') {
      this.toastprovider.toast('Please Enter Email ', 3000, 'bottom');
    } else if (!email) {
      console.log('b');
      this.toastprovider.toast('Please Enter a Valid Email ', 3000, 'bottom');
    } else if (this.user.password == '') {
      this.toastprovider.toast('Please Enter Password ', 3000, 'bottom');
    } else if (this.user.confirm_password == '') {
      this.toastprovider.toast('Please Enter Confirm Password', 3000, 'bottom');
    } else if (this.user.password != this.user.confirm_password) {
      this.toastprovider.toast('Password does not match', 3000, 'bottom');
    } else if (!password) {
      this.toastprovider.toast(
        'Password must contain minimum 6 characters.',
        3000,
        'bottom'
      );
    } else {
      window.localStorage.setItem('userobj', JSON.stringify(this.user));

      this.total_user.push(this.user);
      window.localStorage.setItem('user', JSON.stringify(this.total_user));
      this.navCtrl.setRoot('HomePage');
    }
  }
}
