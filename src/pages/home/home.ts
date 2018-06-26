import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Platform, ActionSheetController} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  users: any = [];
  userobj;
  i;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.userobj = JSON.parse(window.localStorage.getItem('userobj'));
    this.users = JSON.parse(window.localStorage.getItem('user'));
  }
}
