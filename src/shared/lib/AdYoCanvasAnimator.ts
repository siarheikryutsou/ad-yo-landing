import { CanvasAnimator } from "~/shared/lib/CanvasAnimator";

export class AdYoCanvasAnimator extends CanvasAnimator {

  private readonly canvasWidth: number;
  private readonly canvasCenterX: number;
  constructor(canvas: HTMLCanvasElement, canvasWidth: number) {
    super(canvas);
    this.canvasWidth = canvasWidth;
    this.canvasCenterX = Math.round(canvasWidth / 2);
  }

  override draw() {
    this.animations.forEach(animation => animation.displayObject.y += 0.5);
    super.draw();
    this.context.clearRect(this.canvasCenterX, 0, this.canvasCenterX, this.canvas.height);
    this.context.save();
    this.context.scale(-1, 1);
    this.context.drawImage(
      this.canvas,
      0,
      0,
      this.canvasCenterX,
      this.canvas.height,
      -this.canvasWidth,
      0,
      this.canvasCenterX,
      this.canvas.height,
    );
    this.context.restore();
  }

}