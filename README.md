ES6 promises don't provide any(). A small library to implement them. Will convert arguments to promises if not already a promise.

## Installation

Using npm:

```bash
npm install promise.any2 --save
```

## Import

ESModule

```js
import 'promise.any2'
```

CommonJS

```js
require('promise.any2')
```

Browser

```html
<script src="https://cdn.jsdelivr.net/npm/promise.any2"></script>
```

## Usage

```js
Promise.any([Promise.reject('✗'), Promise.resolve('✓')]).then(function (value) {
  // value is '✓' :)
  console.log(value)
})

Promise.any([Promise.reject('✗'), Promise.reject('✗')]).catch(function (reasons) {
  // reasons is ['✗', '✗'] :(
  console.log(reasons)
})
```
