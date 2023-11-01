import { Injectable } from '@angular/core';
import { Human } from './Human.model';

@Injectable({
  providedIn: 'root',
})
export class HumanBuilderService implements Human {
  constructor() {}

  action() {
    console.log('Leave the castle restoration to me!');
  }
}
