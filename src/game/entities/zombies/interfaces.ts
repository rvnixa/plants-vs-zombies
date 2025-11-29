import type {
  ZombieDrawOptions,
  ZombieState,
  ZombieUpdateOptions,
} from "./types";

export interface Zombie<S extends ZombieState = ZombieState> {
  getState(): S;
  draw(options: ZombieDrawOptions): void;
  update(options: ZombieUpdateOptions): void;
}
