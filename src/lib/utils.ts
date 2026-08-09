type ClassValue = string | undefined | null | false | number

export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(' ')
}

export function formatError(error: unknown): string {
  if (error instanceof Error) return error.message
  return String(error)
}
