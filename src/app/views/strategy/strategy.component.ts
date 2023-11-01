import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Human } from 'src/app/services/strategy/Human.model';
import { HumanBuilderService } from 'src/app/services/strategy/human-builder.service';
import { HumanScientistService } from 'src/app/services/strategy/human-scientist.service';
import { HumanWarriorService } from 'src/app/services/strategy/human-warrior.service';
import { HumanWitchService } from 'src/app/services/strategy/human-witch.service';

@Component({
  selector: 'app-strategy',
  templateUrl: './strategy.component.html',
  styleUrls: ['./strategy.component.css'],
})
export class StrategyComponent {
  characters: Human[] = [];

  form = new FormGroup({
    humanType: new FormControl('', Validators.required),
  });

  submit() {
    if (this.form.invalid) {
      return;
    }

    const chosenType = this.form.controls['humanType'].value;

    switch (chosenType) {
      case 'warrior':
        this.characters.push(new HumanWarriorService());
        break;
      case 'witch':
        this.characters.push(new HumanWitchService());
        break;
      case 'scientist':
        this.characters.push(new HumanScientistService());
        break;
      case 'builder':
        this.characters.push(new HumanBuilderService());
        break;
      default:
        break;
    }

    this.form.reset();
  }
}
