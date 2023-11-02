import { Injectable } from '@angular/core';
import { Human } from './Human.model';

@Injectable({
  providedIn: 'root',
})
export class HumanWarriorService implements Human {
  type = 'warrior';
  message = 'I am a warrior!';
  constructor() {}

  action() {
    window.alert(this.message);
  }
}
