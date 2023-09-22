/**
 * Determines if an element is in the viewport.
 * @param element HTMLElement.
 * @param offset Offset in pixels.
 * @returns True if the element is in the viewport, false otherwise.
 * @link https://stackoverflow.com/questions/45514676/react-check-if-element-is-visible-in-dom
 */
export const isInViewport = (element: HTMLElement, offset = 0): boolean => {
  if (!element) return false;
  const top = element.getBoundingClientRect().top;
  return top + offset >= 0 && top - offset <= window.innerHeight;
};
