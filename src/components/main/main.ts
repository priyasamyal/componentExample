import {Component, Input, Output, EventEmitter} from '@angular/core';

/**
 * Generated class for the MainComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'main',
  templateUrl: 'main.html',
})
export class MainComponent {
  @Input('name') nameontheheader;
  text: string;

  constructor() {
    console.log('Hello MainComponent Component');
    this.text = 'zumba';
  }
  ngAfterViewInit() {
    this.text = this.nameontheheader;
  }
}
