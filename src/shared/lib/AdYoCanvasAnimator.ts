import { CanvasAnimator, DisplayObject } from "~/shared/lib/CanvasAnimator";

export class AdYoCanvasAnimator extends CanvasAnimator {

  private readonly canvasWidth: number;
  private readonly canvasCenterX: number;
  private lastMovedTopEl: DisplayObject | undefined;
  private readonly pt: number;
  constructor(canvas: HTMLCanvasElement, canvasWidth: number, pt:number) {
    super(canvas);
    this.canvasWidth = canvasWidth;
    this.canvasCenterX = Math.round(canvasWidth / 2);
    this.pt = pt;
  }

  override draw() {
    this.animations.forEach(animation => {
      animation.displayObject.y += 0.5;
      if(animation.displayObject.y > this.canvas.height) {
        if(this.lastMovedTopEl) {
          let newY = this.lastMovedTopEl.y - animation.displayObject.height;

          if(newY + animation.displayObject.height > 0) {
            newY = -animation.displayObject.height;
          }
          animation.displayObject.y = newY;
        } else {
          animation.displayObject.y = -animation.displayObject.height;
        }

        if(Math.random() > 0.5) {
          animation.displayObject.y -= this.pt;
        }

        this.lastMovedTopEl = animation.displayObject;
      }
    });
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