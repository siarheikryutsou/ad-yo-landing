import type { CanvasAnimatorAnimation } from "~/shared/lib/CanvasAnimator";

export class CanvasAnimator {
  protected readonly canvas: HTMLCanvasElement;
  protected readonly context: CanvasRenderingContext2D;
  protected animations: CanvasAnimatorAnimation[] = [];
  private animationFrameId: number | null = null;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.context = this.canvas.getContext("2d") as CanvasRenderingContext2D;
    this.setSize();
    window.addEventListener("resize", () => this.setSize());
  }

  public start() {
    this.animate();
  }

  public stop() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
  }

  public addAnimation(animation: CanvasAnimatorAnimation): void {
    this.animations.push(animation);
  }

  public removeAnimation(animation: CanvasAnimatorAnimation): void {
    this.animations = this.animations.filter(el => el !== animation);
  }

  private animate() {
    const currentTime = performance.now();
    this.update(currentTime);
    this.draw();

    if (this.animations.length > 0) {
      this.animationFrameId = requestAnimationFrame(() => this.animate());
    }
  }

  private update(currentTime: number) {
    this.animations.forEach(animation => animation.update(currentTime));
    /*this.animations = this.animations.filter(animation => !animation.isComplete);*/
  }

  protected draw() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.animations.forEach((animation) => {
      const { x, y, width, height, color } = animation.displayObject;
      this.context.fillStyle = color;
      this.context.fillRect(x, y, width, height);
    });
  }

  private setSize() {
    const rect = this.canvas.getBoundingClientRect();
    /*this.canvas.width = rect.width;*/
    this.canvas.height = rect.height;
  }
}