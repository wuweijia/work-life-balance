const state = {
  count: 0
}
let activeUpdate

function Dep() {
  this.deps = []
  this.depend = function () {
    if (activeUpdate) {
      console.log(activeUpdate);
      this.deps.push(activeUpdate)
    }
  }

  this.notify = function () {
    this.deps.forEach(dep => dep())
  }
}

const dep = new Dep()

function Observe(obj) {
  Object.keys(obj).forEach(function(key){
    let internalValue = obj[key]
    Object.defineProperty(obj, key, {
      get() {
        dep.depend()
        return internalValue
      },
      set(newValue){
        dep.notify()
        internalValue = newValue
      }
    })
  })
}

Observe(state)

function autoRun(update) {
  function wrappenUpdate() {
    activeUpdate = wrappenUpdate
    update()
    activeUpdate = null
  }
  wrappenUpdate()
}

autoRun(() => {
  console.log('duqu', state.count);
})

state.count = 3
