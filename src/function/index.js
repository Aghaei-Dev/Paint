export const generateId = (length) =>
  Array(length)
    .fill('')
    .map((v) => Math.random().toString(36).charAt(2))
    .join('')
