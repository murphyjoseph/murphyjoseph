export function debounce(limit: number | undefined, callback: (args_0: any[]) => void) {
  let timeoutId: string | number | NodeJS.Timeout | undefined
  return (...args: any[]) => {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
    timeoutId = setTimeout(callback, limit, args)
  }
}
