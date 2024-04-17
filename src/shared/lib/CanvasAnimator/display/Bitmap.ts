import { DisplayObject } from "~/shared/lib/CanvasAnimator";

export class Bitmap extends DisplayObject {
  private readonly imageSource: HTMLImageElement;

  get image() {
    return this.imageSource;
  }

  constructor(image: HTMLImageElement) {
    super();
    this.imageSource = image;
    this.width = image.width;
    this.height = image.height;
  }
}