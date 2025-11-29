import { createHitbox, drawHitbox } from "@/game/helpers/hitbox";
import { drawShotId, drawShotRect, syncShotHitbox } from "./helpers";

import { SHOT_HEIGHT, SHOT_WIDTH, ShotId } from "./constants";

import type { ShotDrawOptions, ShotState, ShotUpdateOptions } from "./types";
import type { Shot } from "./interfaces";
import type { Vector2 } from "@/game/utils/vector";

type PeashotState = ShotState;

interface Peashot extends Shot<PeashotState> {}

type CreatePeashotOptions = Vector2;

const PEASHOT_DAMAGE = 25;
const PEASHOT_SPEED = 150;

function createPeashot(options: CreatePeashotOptions): Peashot {
  const { x, y } = options;
  const state: PeashotState = {
    id: ShotId.Peashot,
    x,
    y,
    width: SHOT_WIDTH,
    height: SHOT_HEIGHT,
    damage: PEASHOT_DAMAGE,
    speed: PEASHOT_SPEED,
    hitbox: createHitbox({
      x,
      y,
      width: SHOT_WIDTH,
      height: SHOT_HEIGHT,
    }),
  };

  return {
    getState: () => state,
    draw: drawPeashot,
    update: updatePeashot,
  };
}

function drawPeashot(options: ShotDrawOptions<PeashotState>) {
  const { state, board } = options;
  const { ctx } = board;

  if (ctx === null) {
    return;
  }

  drawShotRect(options);
  drawShotId(options);
  drawHitbox(state.hitbox, board);
}

function updatePeashot(options: ShotUpdateOptions<PeashotState>) {
  const { deltaTime, state } = options;

  state.x += state.speed * (deltaTime / 1000);

  syncShotHitbox(options);
}

export { createPeashot, drawPeashot, updatePeashot };
