export default (array, key) => {
  return array.reduce((a, b) => a + b[key], 0) / array.length
}
