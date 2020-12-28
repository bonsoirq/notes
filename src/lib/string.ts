export const isBlank = (s: string): boolean => s.trim() === ''
//TODO: consider using uuid
export const randomString = (): string => Math.ceil(Math.random() * 100_000_000).toString(16)
