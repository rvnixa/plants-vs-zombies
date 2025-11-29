import type { PlantDrawOptions, PlantState, PlantUpdateOptions } from "./types";

export interface Plant<S extends PlantState = PlantState> {
  getState(): S;
  draw(options: PlantDrawOptions): void;
  update(options: PlantUpdateOptions): void;
}
