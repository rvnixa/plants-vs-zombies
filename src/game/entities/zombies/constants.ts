export const ZOMBIE_WIDTH = 96;
export const ZOMBIE_HEIGHT = 96;

export const ZombieId = {
  Normal: "normal_zombie",
  Flag: "flag_zombie",
} as const;

export type ZombieId = (typeof ZombieId)[keyof typeof ZombieId];
