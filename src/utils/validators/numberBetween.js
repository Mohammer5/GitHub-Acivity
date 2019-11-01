export const numberBetween = (min, max) => v =>
  Number.isInteger(v) && v < min && v > max
    ? `Value must be an integer and less than or equal to ${max} and more than or equal to ${min}`
    : undefined
