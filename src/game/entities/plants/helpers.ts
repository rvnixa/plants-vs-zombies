import type { PlantDrawOptions, PlantUpdateOptions } from "./types";

export function drawPlantRect({ board, state }: PlantDrawOptions) {
  const { ctx } = board;

  if (ctx === null) {
    return;
  }

  ctx.fillStyle = "#ffffff";
  ctx.fillRect(state.x, state.y, state.width, state.height);
  ctx.fill();
}

export function drawPlantId({ board, state }: PlantDrawOptions) {
  const { ctx } = board;

  if (ctx === null) {
    return;
  }

  ctx.fillStyle = "#000000";
  ctx.fillText(state.id, state.x, state.y + state.height / 2);
}

export function syncPlantHitbox({ state }: PlantUpdateOptions) {
  state.hitbox.x = state.x;
  state.hitbox.y = state.y;
}
