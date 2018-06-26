import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { MainComponent } from './main/main';
@NgModule({
	declarations: [MainComponent],
	imports: [IonicModule.forRoot(MainComponent)],
	exports: [MainComponent],

})
export class ComponentsModule { }
