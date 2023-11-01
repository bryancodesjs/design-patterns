import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FactoryService } from 'src/app/services/factory/factory.service';
import { Miner } from 'src/app/models/Miner.model';
@Component({
  selector: 'app-factory',
  templateUrl: './factory.component.html',
  styleUrls: ['./factory.component.css'],
})
export class FactoryComponent {
  miners: Miner[] = [];
  constructor(private _factory: FactoryService) {}
  form = new FormGroup({
    hash_rate: new FormControl(0, [Validators.required, Validators.min(1)]),
  });

  submit() {
    if (this.form.hasError('min', 'hash_rate')) {
      return;
    }

    if (this.form.controls['hash_rate'].value) {
      const miner = this._factory.createMiner(
        this.form.controls['hash_rate'].value
      );
      this.miners.push(miner);
      this.form.reset();
    }
  }
}
