export type Size = {
  width: number;
  height: number;
};

export function createSize(w: number, h: number): Size {
  return {
    width: w,
    height: h,
  };
}
