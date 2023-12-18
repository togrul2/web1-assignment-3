/***
 * Truncates string if it exceeds given length
 * @param text text to be truncated
 * @param limit max length allowed for string
 */
export function truncateString (text: string, limit: number): string {
  if (text.length > limit) {
    return text.substring(0, limit - 3) + "...";
  }
  return text;
}