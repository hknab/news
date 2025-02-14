export function parseSearchParams(
  query: string
): Record<string, string | string[]> {
  const params = new URLSearchParams(query);
  const result: Record<string, string | string[]> = {};

  params.forEach((value, key) => {
    // Check if the key already exists (for handling multiple values like domains)
    if (result[key]) {
      if (Array.isArray(result[key])) {
        (result[key] as string[]).push(value);
      } else {
        result[key] = [result[key] as string, value];
      }
    } else {
      result[key] = value.includes(",") ? value.split(",") : value;
    }
  });

  return result;
}
