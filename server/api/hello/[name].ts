export default defineEventHandler(async (event) => {
  await new Promise(resolve => setTimeout(resolve, 1000))

  const name = getRouterParam(event, 'name')
  return `hello, ${name}!`
})
