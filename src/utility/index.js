export const arrayToObject = array => {
  return array.reduce((arrayMap, entry) => {
    arrayMap[entry.id] = entry
    return arrayMap
  }, {})
}
