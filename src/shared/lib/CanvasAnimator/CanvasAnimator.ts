import type { CanvasAnimatorAnimation } from "~/shared/lib/CanvasAnimator";

export class CanvasAnimator {
  protected readonly canvas: HTMLCanvasElement;
  protected readonly context: CanvasRenderingContext2D;
  protected animations: CanvasAnimatorAnimation[] = [];
  private paused = false;
  private animationFrameId: number | null = null;
  private startTime: number = 0;
  private pauseTime: number = 0;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.context = this.canvas.getContext("2d") as CanvasRenderingContext2D;
  }

  public start() {
    this.startTime = performance.now();
    this.animate();
  }

  public stop() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
  }

  public pause() {
    this.paused = true;
    this.pauseTime = performance.now();
  }

  public resume() {
    this.paused = false;
    this.startTime += performance.now() - this.pauseTime;
    this.animate();
  }

  public togglePause(force?: boolean) {
    const value = force !== undefined ? force : !this.paused;
    value ? this.pause() : this.resume();

  }

  public addAnimation(animation: CanvasAnimatorAnimation): void {
    this.animations.push(animation);
  }

  public removeAnimation(animation: CanvasAnimatorAnimation): void {
    this.animations = this.animations.filter(el => el !== animation);
  }

  public getAnimations(): CanvasAnimatorAnimation[] {
    return this.animations;
  }

  public removeCompletedAnimations() {
    this.animations = this.animations.filter(animation => !animation.isComplete);
  }

  private animate() {
    if(this.paused) return;
    const currentTime = performance.now();
    const elapsedTime = currentTime - this.startTime;
    this.update(elapsedTime);
    this.draw();

    if (this.animations.length > 0) {
      this.animationFrameId = requestAnimationFrame(() => this.animate());
    }
  }

  private update(elapsedTime: number) {
    this.animations.forEach(animation => animation.update(elapsedTime));
  }

  protected draw() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.animations.forEach((animation) => {
      const { x, y, width, height, color } = animation.displayObject;
      this.context.fillStyle = color;
      this.context.fillRect(x, y, width, height);
    });
  }

}