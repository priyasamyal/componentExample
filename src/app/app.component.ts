import {Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {IonicPage, NavController, NavParams, Nav} from 'ionic-angular';
import {Component, ViewChild, Inject} from '@angular/core';
import {NetworkcheckProvider} from '../providers/networkcheck/networkcheck';
import {ToastProvider} from '../providers/toast/toast';

@Component({
  templateUrl: 'app.html',
})
export class MyApp {
  rootPage: any = 'LoginPage';
  value;
  showbutton;

  @ViewChild(Nav) nav: Nav;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    networkcheck: NetworkcheckProvider,
    public toastprovider: ToastProvider
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  pageChange() {
    console.log('a');
    this.nav.push('ProfilePage');
  }
  logoutFunc() {
    window.localStorage.removeItem('userobj');
    this.nav.setRoot('LoginPage');
    this.toastprovider.isLogin = false;
  }
  cameraFunc() {
    this.nav.push('CameraPage');
  }
}
