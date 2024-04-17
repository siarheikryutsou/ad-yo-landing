import { type DisplayObject, EASE, type IAnimationProps, type IEasingFunction } from "~/shared/lib/CanvasAnimator";

export class CanvasAnimatorAnimation {

  private readonly el: DisplayObject;
  private to: IAnimationProps;
  private readonly duration: number;
  private readonly easing: IEasingFunction;
  private delay: number;
  private readonly onComplete?: (animation: CanvasAnimatorAnimation) => void;
  private readonly onStart?: (animation: CanvasAnimatorAnimation) => void;
  private startTime: number | null = null
  private from: IAnimationProps;
  private completed: boolean = false;

  constructor(
    el: DisplayObject,
    to: IAnimationProps,
    duration: number,
    delay: number = 0,
    easing: IEasingFunction = EASE.LINEAR,
    onComplete?: (animation: CanvasAnimatorAnimation) => void,
    onStart?: (animation: CanvasAnimatorAnimation) => void,
  ) {
    this.el = el;
    this.to = to;
    this.duration = duration;
    this.easing = easing;
    this.delay = delay;
    this.onComplete = onComplete;
    this.onStart = onStart;
    this.from = {};
    this.setFrom(to);
  }

  public setTarget(to: IAnimationProps, delay?: number): void {
    this.to = to;
    this.setFrom(to);
    this.startTime = null;
    if(delay !== undefined) {
      this.delay = delay;
    }
    this.completed = false;
  }

  public update(currentTime: number): void {
    if(this.completed) return;
    if(this.startTime === null) {
      this.startTime = currentTime + this.delay;
      this.onStart?.(this);
    }

    const elapsedTime = currentTime - this.startTime;
    if(elapsedTime < 0) {
      return;
    }

    const progress = Math.min(elapsedTime / this.duration, 1);
    const easedProgress = this.easing(progress);

    for(const propKey in this.to) {
      const key = propKey as keyof IAnimationProps;
      const start = this.from[key] as number;
      const end = this.to[key] as number;
      this.el[key] = start + (end - start) * easedProgress;
    }

    if(progress === 1) {
      this.completed = true;
      this.onComplete?.(this);
    }
  }

  public get isComplete(): boolean {
    return this.completed;
  }

  public get displayObject(): DisplayObject {
    return this.el;
  }

  private setFrom(to: IAnimationProps): void {
    this.from = {};
    for(const propKey in to) {
      if(propKey in this.el) {
        const key = propKey as keyof IAnimationProps;
        this.from[key] = this.el[key];
      }
    }
  }
}