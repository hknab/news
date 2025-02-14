export function filterParams(
  paramsObject: Record<string, string | string[]>,
  defaultValue: [string, string][]
) {
  const paramsEntries = Object.entries(paramsObject || {});
  return Object.fromEntries(
    (paramsEntries.length ? paramsEntries : defaultValue).filter(
      ([_, value]) => value !== ""
    )
  );
}
