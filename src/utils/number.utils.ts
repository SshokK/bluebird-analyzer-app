export const isInteger = (value: unknown): boolean => {
  return Boolean(value) && !Number.isNaN(Number(value)) && Number.isInteger(Number(value))
}

export const isFloat = (value: unknown): boolean => {
  return Boolean(value) && !Number.isNaN(Number(value)) && Number(value) % 1 !== 0
}

export const isNumber = (value: unknown): boolean => {
  return Boolean(value) && !Number.isNaN(Number(value));
}