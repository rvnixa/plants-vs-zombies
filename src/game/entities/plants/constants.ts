export const PLANT_WIDTH = 96;
export const PLANT_HEIGHT = 96;

export const PlantId = {
  Peashooter: "peashooter",
  Sunflower: "sunflower",
} as const;

export type PlantId = (typeof PlantId)[keyof typeof PlantId];
