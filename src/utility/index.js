export const arrayToObject = array => {
  return array.reduce((arrayMap, entry) => {
    arrayMap[entry.id] = entry
    return arrayMap
  }, {})
}

export const generateId = (length = 36) => {
  var result = ''
  var characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  var charactersLength = characters.length
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}
