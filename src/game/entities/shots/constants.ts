export const SHOT_WIDTH = 32;
export const SHOT_HEIGHT = 32;

export const ShotId = {
  Peashot: "peashot",
} as const;

export type ShotId = (typeof ShotId)[keyof typeof ShotId];
