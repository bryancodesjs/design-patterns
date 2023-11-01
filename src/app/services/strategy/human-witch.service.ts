import { Injectable } from '@angular/core';
import { Human } from './Human.model';

@Injectable({
  providedIn: 'root',
})
export class HumanWitchService implements Human {
  constructor() {}

  action() {
    console.log('I cast a spell on you!');
  }
}
