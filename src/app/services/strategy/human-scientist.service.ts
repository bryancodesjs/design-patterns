import { Injectable } from '@angular/core';
import { Human } from './Human.model';

@Injectable({
  providedIn: 'root',
})
export class HumanScientistService implements Human {
  type = 'scientist';
  message = "I'm a scientist!";
  constructor() {}

  action() {
    window.alert(this.message);
  }
}
