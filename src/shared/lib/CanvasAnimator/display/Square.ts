import { DisplayObject } from "~/shared/lib/CanvasAnimator";

export class Square extends DisplayObject {
  constructor(x: number = 0, y: number = 0, width: number = 0, height: number = 0, color: string = "#000000") {
    super();
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
  }
}