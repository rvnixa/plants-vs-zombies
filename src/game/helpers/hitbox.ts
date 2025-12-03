import type { Board } from "../board";
import type { Size } from "../utils/size";
import type { Vector2 } from "../utils/vector";

type Hitbox = {
  draw(hitbox: Hitbox, board: Board): void;
} & Vector2 &
  Size;

type CreateHitboxOptions = Vector2 & Size;

function createHitbox(options: CreateHitboxOptions): Hitbox {
  return {
    ...options,
    draw,
  };
}

function draw(hitbox: Hitbox, board: Board) {
  const { ctx } = board;

  if (ctx === null) {
    return;
  }

  ctx.strokeStyle = "red";
  ctx.strokeRect(hitbox.x, hitbox.y, hitbox.width, hitbox.height);
  ctx.stroke();
}

export { createHitbox };
export type { Hitbox };
