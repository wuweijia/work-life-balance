const deepClone = (target) => {
  if (typeof target === 'object' && target !== null) {
    let cloneTarget = Array.isArray(target) ? [] : {}
    for (const key in target) {
      if (target.hasOwnProperty(key)) {
        cloneTarget[key] = deepClone(target[key])
      }
    }
    return cloneTarget
  } else {
    return target
  }
}
