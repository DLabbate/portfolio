import {
  differenceInSeconds,
  format,
  formatDuration,
  intervalToDuration,
  parseISO,
} from "date-fns";

/**
 * Formats a date in the format "Month Year", e.g. "May 2021".
 *
 * @param date - The ISO date string to format.
 * @returns The formatted date string in "Month Year" format.
 */
export function formatISOString(date: string): string {
  return format(parseISO(date), "MMMM yyyy");
}

/**
 * Calculates the time difference in seconds between a date (timestamp in **milliseconds**) and the current date.
 *
 * @param dateMs - Unix timestamp in **milliseconds**.
 * @returns The time difference in seconds as a number.
 */
export function getDeltaSeconds(dateMs: number): number {
  // Get the current timestamp as a Date object
  const currentDate = new Date();

  // Convert the provided timestamp (in milliseconds) to a Date object
  const resetDate = new Date(dateMs);

  // Calculate the absolute difference in seconds
  return Math.abs(differenceInSeconds(resetDate, currentDate));
}

/**
 * Formats the duration between a start and end date.
 *
 * @param start - The start date
 * @param end - The end date
 * @returns The interval formatted as a string, such as "1 year 6 months".
 */
export function getFormattedDuration(start: Date, end: Date): string {
  return formatDuration(intervalToDuration({ start, end }), {
    format: ["years", "months"],
  });
}
