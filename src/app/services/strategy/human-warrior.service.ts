import { Injectable } from '@angular/core';
import { Human } from './Human.model';

@Injectable({
  providedIn: 'root',
})
export class HumanWarriorService implements Human {
  constructor() {}

  action() {
    console.log('I will fight for my king!');
  }
}
