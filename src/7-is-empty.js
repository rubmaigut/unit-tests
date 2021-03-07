export const isEmpty = (stringArrayOrObject) => {
  const type = typeof stringArrayOrObject
  if (type === 'string') {
    return stringArrayOrObject === ''
  }

  if(type === 'object'){
    return stringArrayOrObject.length === 0 || Object.keys(stringArrayOrObject).length === 0
  }

  return false
}
