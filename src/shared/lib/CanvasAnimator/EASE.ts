export class EASE {
  static get LINEAR() {
    return (x: number) => x;
  }
  static get IN_OUT_CUBIC() {
    return (x: number) => x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
  }
}