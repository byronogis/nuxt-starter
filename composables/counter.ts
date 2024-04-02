export const useCounter = () => {
  return useState('counter', () => Math.round(Math.random() * 1000))
}

export const counterPlus = () => {
  useCounter().value++
}
