import { isInViewport } from "..";

describe("isInViewport", () => {
  let element: HTMLElement;

  beforeEach(() => {
    // Set up a simple element with fixed dimensions
    element = document.createElement("div");
    document.body.appendChild(element);
  });

  afterEach(() => {
    document.body.removeChild(element);
  });

  test.each([
    {
      description: "completely within the viewport",
      rect: { top: 0, left: 0, bottom: 100, right: 100 },
      innerHeight: 500,
      innerWidth: 500,
      offsetTop: 0,
      expected: true,
    },
    {
      description: "partially out of the viewport at the top",
      rect: { top: -10, left: 0, bottom: 90, right: 100 },
      innerHeight: 500,
      innerWidth: 500,
      offsetTop: 0,
      expected: false,
    },
    {
      description: "partially out of the viewport at the bottom",
      rect: { top: 450, left: 0, bottom: 510, right: 100 },
      innerHeight: 500,
      innerWidth: 500,
      offsetTop: 0,
      expected: false,
    },
    {
      description: "partially out of the viewport on the left",
      rect: { top: 0, left: -10, bottom: 100, right: 90 },
      innerHeight: 500,
      innerWidth: 500,
      offsetTop: 0,
      expected: false,
    },
    {
      description: "partially out of the viewport on the right",
      rect: { top: 0, left: 450, bottom: 100, right: 510 },
      innerHeight: 500,
      innerWidth: 500,
      offsetTop: 0,
      expected: false,
    },
    {
      description: "exactly at the top edge of the viewport",
      rect: { top: 0, left: 0, bottom: 100, right: 100 },
      innerHeight: 500,
      innerWidth: 500,
      offsetTop: 0,
      expected: true,
    },
    {
      description: "exactly at the bottom edge of the viewport",
      rect: { top: 400, left: 0, bottom: 500, right: 100 },
      innerHeight: 500,
      innerWidth: 500,
      offsetTop: 0,
      expected: true,
    },
    {
      description: "within the viewport with an offsetTop",
      rect: { top: 10, left: 0, bottom: 110, right: 100 },
      innerHeight: 500,
      innerWidth: 500,
      offsetTop: 10,
      expected: true,
    },
  ])(
    "returns $expected when $description",
    ({ rect, innerHeight, innerWidth, offsetTop, expected }) => {
      // Set viewport size
      Object.defineProperty(window, "innerHeight", { value: innerHeight });
      Object.defineProperty(window, "innerWidth", { value: innerWidth });

      // Mock getBoundingClientRect
      Object.defineProperty(element, "getBoundingClientRect", {
        writable: true,
        value: jest.fn(() => ({
          ...rect,
          width: rect.right - rect.left,
          height: rect.bottom - rect.top,
          x: rect.left,
          y: rect.top,
          toJSON: jest.fn(() => ({})),
        })),
      });

      expect(isInViewport(element, offsetTop)).toBe(expected);
    }
  );

  test("returns false if the element is null", () => {
    expect(isInViewport(null as unknown as HTMLElement)).toBe(false);
  });
});
