import { Injectable } from '@angular/core';
import { Human } from './Human.model';

@Injectable({
  providedIn: 'root',
})
export class HumanBuilderService implements Human {
  type = 'builder';
  message = "I'm a builder!";
  constructor() {}

  action() {
    window.alert(this.message);
  }
}
