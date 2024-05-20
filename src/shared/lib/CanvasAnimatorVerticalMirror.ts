import { CanvasAnimator } from "~/shared/lib/CanvasAnimator";

export class CanvasAnimatorVerticalMirror extends CanvasAnimator {
  private canvasCenterY: number;

  constructor(canvas: HTMLCanvasElement) {
    super(canvas);
    this.canvasCenterY = Math.round(this.canvas.height / 2);
  }

  override draw(): void {
    super.draw();
    this.context.clearRect(0, this.canvasCenterY, this.canvas.width, this.canvasCenterY);
    this.context.save();
    this.context.scale(1, -1);
    this.context.drawImage(
      this.canvas,
      0,
      0,
      this.canvas.width,
      this.canvasCenterY,
      0,
      -this.canvas.height,
      this.canvas.width,
      this.canvasCenterY,
    );
    this.context.restore();
  }
}