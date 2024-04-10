import { type DisplayObject, EASE, type IAnimationProps, type IEasingFunction } from "~/shared/lib/CanvasAnimator";

export class CanvasAnimatorAnimation {

  private readonly el: DisplayObject;
  private readonly to: IAnimationProps;
  private readonly duration: number;
  private readonly easing: IEasingFunction;
  private readonly delay: number;
  private readonly onComplete?: (animation: CanvasAnimatorAnimation) => void;
  private readonly onStart?: (animation: CanvasAnimatorAnimation) => void;
  private startTime: number | null = null
  private readonly from: IAnimationProps;
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
    for(const propKey in to) {
      if(propKey in el) {
        const key = propKey as keyof IAnimationProps;
        this.from[key] = el[key];
      }
    }
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
}