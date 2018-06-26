import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignupPage } from './signup';
import { MainComponent } from '../../components/main/main';

@NgModule({
  declarations: [SignupPage, MainComponent],
  imports: [IonicPageModule.forChild(SignupPage)],
  exports: [SignupPage],
})
export class SignupPageModule { }
