function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]'
}
function isArray(arr) {
  return Array.isArray(arr)
}
const merge = (target, ...arg) => {
  return arg.reduce((acc, cur) => {
    return Object.keys(cur).reduce((subAcc, key) => {
      const srcVal = cur[key]
      if (isObject(srcVal)) {
        subAcc[key] = merge(subAcc[key] ? subAcc[key] : {}, srcVal)
      } else if (isArray(srcVal)) {
        // series: []，下层数组直接赋值
        subAcc[key] = srcVal.map((item, idx) => {
          if (isObject(item)) {
            const curAccVal = subAcc[key] ? subAcc[key] : []
            return merge(curAccVal[idx] ? curAccVal[idx] : {}, item)
          } else {
            return item
          }
        })
      } else {
        subAcc[key] = srcVal
      }
      return subAcc
    }, acc)
  }, target)
}
const deepClone = (source) => {
  if (!source && typeof source !== 'object') {
    throw new Error('error arguments')
  }
  const targetObj = source.constructor === Array ? [] : {}
  Object.keys(source).forEach((keys) => {
    if (source[keys] && typeof source[keys] === 'object') {
      targetObj[keys] = deepClone(source[keys])
    } else {
      targetObj[keys] = source[keys]
    }
  })
  return targetObj
}
const formatLabel = (value, maxLen) => {
  let rt = ''
  const valLen = value.length
  const rowN = Math.ceil(valLen / maxLen)
  if (rowN > 1) {
    for (let i = 0; i < rowN; i++) {
      let temp = ''
      const start = i * maxLen
      const end = start + maxLen
      temp = value.substring(start, end) + '\n'
      rt += temp
    }
    return rt
  } else {
    return value
  }
}
export { merge, deepClone, formatLabel }
