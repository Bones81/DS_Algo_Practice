// this example has linear O(n) time complexity
const sumUp = (n) => {
  let result = 0;
  for (let i = 0; i <= n; i++) {
    result += i
  }
  return result
}

console.log(sumUp(4))

//same function with O(1) constant time
const constantSumUp = (n) => {
  return (n/2) * (1 + n)
}

console.log(constantSumUp(4))


// sum an array, define time complexity, find lowest possible time complexity

const sumArray = (array) => {
  let result = 0
  for (let num of array) {
    result += num
  }
  return result
  //should be O(n)
}

console.log(sumArray([1,3,4,6,10]))

const reduceArray = (array) => {
  return array.reduce((sum, num) => sum + num, 0)
  //should also be O(n), even though it's fewer lines of code
}

console.log(reduceArray([1,3,4,6,10]))
