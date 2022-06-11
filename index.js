if (!Promise.any) Promise.any = implementation

// From: https://github.com/m0ppers/promise-any
function reverse(promise) {
  return new Promise((resolve, reject) =>
    Promise.resolve(promise).then(reject, resolve)
  )
}

function implementation(iterable) {
  return reverse(Promise.all(Array.from(iterable).map(reverse)))
}
