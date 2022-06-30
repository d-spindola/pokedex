export const mediaQuery = (query: 'min' | 'max', value: string) => {
  return `@media (${query}-width: ${value})`
}
