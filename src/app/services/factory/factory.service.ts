import { Injectable } from '@angular/core';
import { Miner } from 'src/app/models/Miner.model';

@Injectable({
  providedIn: 'root',
})
export class FactoryService {
  constructor() {}

  createMiner(hash_rate: number) {
    return new MinerMachine(hash_rate);
  }
}

class MinerMachine implements Miner {
  profit = 0;
  power = 'off';
  interval_id: any;
  constructor(public hash_rate: number) {
    this.hash_rate = hash_rate;
  }

  start() {
    this.power = 'on';
    this.interval_id = setInterval(() => {
      this.profit += this.hash_rate * 0.14;
    }, 1000);
    console.log(this.hash_rate + 'hs miner started');
  }

  stop() {
    this.power = 'off';
    //clear interval
    if (this.interval_id) {
      clearInterval(this.interval_id);
    }
    console.log(this.hash_rate + 'hs miner stopped');
  }
}
