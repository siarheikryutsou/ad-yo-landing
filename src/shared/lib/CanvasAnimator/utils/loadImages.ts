export function loadImages(imageUrls: string[]): Promise<HTMLImageElement[]> {
  return Promise.all(imageUrls.map(url => {
    return loadImage(url);
  }));
}

function loadImage(url: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = url;
  });
}