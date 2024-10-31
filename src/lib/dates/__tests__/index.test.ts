import { formatISOString, getDeltaSeconds, getFormattedDuration } from "..";
import { expect } from "@jest/globals";

describe("formatISOString", () => {
  test("formats ISO date string to 'Month Year'", () => {
    const date = "2021-05-15";
    const formattedDate = formatISOString(date);
    expect(formattedDate).toBe("May 2021");
  });
});

describe("getDeltaSeconds", () => {
  test("calculates the time difference in seconds", () => {
    const mockDateMs = new Date().getTime() - 10_000;
    const deltaSeconds = getDeltaSeconds(mockDateMs);
    expect(deltaSeconds).toBe(10);
  });
});

describe("getFormattedDuration", () => {
  test("formats the duration between two dates", () => {
    const start = new Date("2020-01-01");
    const end = new Date("2021-06-01");
    const duration = getFormattedDuration(start, end);
    expect(duration).toBe("1 year 5 months");
  });
});
