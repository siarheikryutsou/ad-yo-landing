export function getElementRect(el: HTMLElement, relative?: HTMLElement) {
  if (relative) {
    const rect = el.getBoundingClientRect();
    const relativeRect = relative.getBoundingClientRect();
    return new DOMRect(rect.left - relativeRect.left, rect.top - relativeRect.top, rect.width, rect.height);
  }
  return el.getBoundingClientRect();
}