export const omitNulls = <T extends Record<string, unknown> = Record<string, unknown>>(object: T): T => {
  return Object.fromEntries(
    Object.entries(object).filter(([, value]) => {
      return value !== null
    })
  ) as T
}