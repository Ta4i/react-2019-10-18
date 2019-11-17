export const arrayToMap = array =>
  array.reduce((map, item) => {
    map[item.id] = item
    return map
  }, {})

export const length = obj => {
  if (Array.isArray(obj)) {
    return obj.length
  }
  return Object.keys(obj).length
}
