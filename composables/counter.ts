export function useCounter() {
  return useState('counter', () =>
    Math.round(Math.random() * 1000))
}

export function counterPlus() {
  useCounter().value++
}
