import { Injectable } from '@angular/core';
import { Human } from './Human.model';

@Injectable({
  providedIn: 'root',
})
export class HumanScientistService implements Human {
  constructor() {}

  action() {
    console.log('I will invent a new technology!');
  }
}
