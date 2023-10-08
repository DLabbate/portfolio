/**
 * Determines if an element is in the viewport.
 * @param element HTMLElement.
 * @param offsetTop Offset in pixels from the top of the viewport (can be useful to account for a header component).
 * @returns True if the element is in the viewport, false otherwise.
 * @link https://www.javascripttutorial.net/dom/css/check-if-an-element-is-visible-in-the-viewport/
 */
export const isInViewport = (element: HTMLElement, offsetTop = 0): boolean => {
  if (!element) return false;
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= offsetTop &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};
