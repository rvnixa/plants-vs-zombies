import type { ShotDrawOptions, ShotState, ShotUpdateOptions } from "./types";

export interface Shot<S extends ShotState = ShotState> {
  getState(): S;
  draw(options: ShotDrawOptions): void;
  update(options: ShotUpdateOptions): void;
}
