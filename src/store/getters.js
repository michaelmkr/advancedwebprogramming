export const getDemo = state => {
  return 'some random number: ' + Math.ceil((state.demo * 10) % 5)
}
