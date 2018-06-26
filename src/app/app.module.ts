import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Network } from '@ionic-native/network';
import { Camera, CameraOptions } from '@ionic-native/camera';

import { MyApp } from './app.component';

import { ToastProvider } from '../providers/toast/toast';
import { NetworkcheckProvider } from '../providers/networkcheck/networkcheck';
import { ActionsheetProvider } from '../providers/actionsheet/actionsheet';
import { SocialSharing } from '@ionic-native/social-sharing';
//import { MainComponent } from '../components/main/main';
import { ComponentsModule } from '../components/components.module'
@NgModule({
  declarations: [MyApp,],
  imports: [BrowserModule, IonicModule.forRoot(MyApp), ComponentsModule],
  bootstrap: [IonicApp],
  entryComponents: [MyApp],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ToastProvider,
    ToastProvider,
    NetworkcheckProvider,
    Network,
    ActionsheetProvider,
    Camera,
    SocialSharing,

  ],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
