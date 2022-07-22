// // this example has linear O(n) time complexity
// const sumUp = (n) => {
//   let result = 0;
//   for (let i = 0; i <= n; i++) {
//     result += i
//   }
//   return result
// }

// console.log(sumUp(4))

// //same function with O(1) constant time
// const constantSumUp = (n) => {
//   return (n/2) * (1 + n)
// }

// console.log(constantSumUp(4))


// // sum an array, define time complexity, find lowest possible time complexity

// const sumArray = (array) => {
//   let result = 0
//   for (let num of array) {
//     result += num
//   }
//   return result
//   //should be O(n)
// }

// console.log(sumArray([1,3,4,6,10]))

// const reduceArray = (array) => {
//   return array.reduce((sum, num) => sum + num, 0)
//   //should also be O(n), even though it's fewer lines of code
// }

// console.log(reduceArray([1,3,4,6,10]))


// //Sets Practice
// const ids = new Set()

// ids.add('abc')
// ids.add(1)
// ids.add('bb2')
// ids.add(1)

// for (const el of ids) {
//   console.log(el);
// }

// // console.log(ids[1]); doesn't work like an array. Instead use:
// console.log(ids.has('abc'));

// ids.delete('bb2')

// console.log(ids);

//Maps practice
const resultData = new Map()

resultData.set('average', 1.53)
resultData.set('lastResult', null)

const germany = {name: 'Germany', population: 82}

resultData.set(germany, 0.89)

for (const el of resultData) {
  console.log(el);
}

resultData.set('average', 33.89)
console.log(resultData);

console.log(resultData.get('average'))
console.log(resultData.average);

resultData.delete(germany)
console.log(resultData)