import { Component } from '@angular/core';

/**
 * Generated class for the CustomListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'custom-list',
  templateUrl: 'custom-list.html'
})
export class CustomListComponent {

  text: string;

  constructor() {
    console.log('Hello CustomListComponent Component');
    this.text = 'Hello World!!!!';
  }

}
