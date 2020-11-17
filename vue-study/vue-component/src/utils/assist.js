function findComponentUpward(context, componentName) {
  let parent = context.$parent;
  let name = parent.$options.name
  while (parent && (!name || [componentName].indexOf(name) < 0  )) {
    parent = parent.$parent;
    if (parent) {
      name = parent.$options.name;
    }
  }
  return parent
}

// typeOf
function typeOf(obj) {
  const toString = Object.prototype.toString;
  const map = {
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]': 'null',
    '[object Object]': 'object'
  }
  return map[toString.call(obj)]
}

// deepCopy
function deepCopy(data) {
  const type = typeOf(data)
  let cpData
  if (type == 'array') {
    cpData = []
  } else if(type === 'object') {
    cpData = {}
  } else {
    return data
  }

  if (type === 'array') {
    for (let i = 0; i < data.length; i++) {
      cpData.push(deepCopy(data[i]))
    }
  } else if( type === 'object') {
    for (const key in data) {
      cpData[key] = deepCopy(data[key]);
    }
  }
  return cpData
}



export {
  findComponentUpward,
  deepCopy
}
