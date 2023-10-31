export interface Miner {
  hash_rate: number;
  profit: number;
  power: string;
  interval_id: any;
  start(): void;
  stop(): void;
}
