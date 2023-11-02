import { Injectable } from '@angular/core';
import { Human } from './Human.model';

@Injectable({
  providedIn: 'root',
})
export class HumanWitchService implements Human {
  type = 'witch';
  message = 'I am a witch!';
  constructor() {}

  action() {
    window.alert(this.message);
  }
}
