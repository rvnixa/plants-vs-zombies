import type { Board } from "../board";
import type { Size } from "../utils/size";
import type { Vector2 } from "../utils/vector";

type Hitbox = Vector2 & Size;

type CreateHitboxOptions = Hitbox;

function createHitbox(options: CreateHitboxOptions): Hitbox {
  return options;
}

function drawHitbox(hitbox: Hitbox, board: Board) {
  const { ctx } = board;

  if (ctx === null) {
    return;
  }

  ctx.strokeStyle = "red";
  ctx.strokeRect(hitbox.x, hitbox.y, hitbox.width, hitbox.height);
  ctx.stroke();
}

export { createHitbox, drawHitbox };
export type { Hitbox };
