export class EASE {
  static get LINEAR() {
    return (x: number) => x;
  }

  // Sine

  static get OUT_SINE() {
    return (x: number) => Math.sin((x * Math.PI) / 2);
  }

  // Cubic

  static get OUT_CUBIC() {
    return (x: number) => 1 - Math.pow(1 - x, 3);
  }

  static get IN_OUT_CUBIC() {
    return (x: number) => x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
  }

  // Quint
  static get OUT_QUINT() {
    return (x: number) => 1 - Math.pow(1 - x, 5);
  }

  // Circ
  static get OUT_CIRC() {
    return (x: number) => Math.sqrt(1 - Math.pow(x - 1, 2));
  }

  // Elastic
  static get OUT_ELASTIC() {
    return (x: number) => {
      const c4 = (2 * Math.PI) / 3;
      return x === 0 ? 0 : x === 1 ? 1 : Math.pow(2, -10 * x) * Math.sin((x * 10 - 0.75) * c4) + 1;
    }
  }

  // Quad
  static get OUT_QUAD() {
    return (x: number) => 1 - (1 - x) * (1 - x);
  }

  // Quart
  static get OUT_QUART() {
    return (x: number) => 1 - Math.pow(1 - x, 4);
  }

  // Expo
  static get OUT_EXPO() {
    return (x: number) => x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
  }

  // Back
  static get OUT_BACK() {
    return (x: number) => {
      const c1 = 1.70158;
      const c3 = c1 + 1;
      return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2);
    }
  }

  // Bounce
  static get OUT_BOUNCE() {
    return (x: number) => {
      const n1 = 7.5625;
      const d1 = 2.75;
      if (x < 1 / d1) {
        return n1 * x * x;
      } else if (x < 2 / d1) {
        return n1 * (x -= 1.5 / d1) * x + 0.75;
      } else if (x < 2.5 / d1) {
        return n1 * (x -= 2.25 / d1) * x + 0.9375;
      } else {
        return n1 * (x -= 2.625 / d1) * x + 0.984375;
      }
    }
  }
}