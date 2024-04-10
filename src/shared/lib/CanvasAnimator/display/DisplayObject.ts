export class DisplayObject {
  public x: number = 0;
  public y: number = 0;
  public width: number = 0;
  public height: number = 0;
  public color: string = "transparent";

  constructor() {
  }

  public setSize(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
}