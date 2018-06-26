import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CameraPage } from './camera';

import { ComponentsModule } from '../../components/components.module'
@NgModule({
  declarations: [CameraPage],
  imports: [IonicPageModule.forChild(CameraPage), ComponentsModule],
  exports: [CameraPage],
})
export class CameraPageModule { }
