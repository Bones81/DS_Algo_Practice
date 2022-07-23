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

// //Maps practice
// const resultData = new Map()

// resultData.set('average', 1.53)
// resultData.set('lastResult', null)

// const germany = {name: 'Germany', population: 82}

// resultData.set(germany, 0.89)

// for (const el of resultData) {
//   console.log(el);
// }

// resultData.set('average', 33.89)
// console.log(resultData);

// console.log(resultData.get('average'))
// console.log(resultData.average);

// resultData.delete(germany)
// console.log(resultData)

//Linked List
class LinkedList {
  constructor() {
    this.head = null; //first el of list
    this.tail = null; //last el of list
  }

  append = (value) => {
    const newNode = {
      value: value,
      next: null
    }
    if (this.tail) {
      this.tail.next = newNode // update the old tail next property
    }
    this.tail = newNode
    if (!this.head) { // if there is no head or tail, then node becomes both to start list
      this.head = newNode
    }
  }

  prepend = (value) => {
    const newNode = {
      value: value,
      next: this.head
    }

    this.head = newNode

    if (!this.tail) {
      this.tail = newNode
    }
  }

  find = (value) => {
    if (!this.head) {
      return null;
    }

    let currentNode = this.head
    while (currentNode) {
      if(currentNode.value === value) {
        return currentNode
      }

      currentNode = currentNode.next
    }

    return null;
  }

  insertAfter = (value, afterValue) => {
    const existingNode = this.find(afterValue)
    if (existingNode) {
      const newNode = { value: value, next: existingNode.next }
      existingNode.next = newNode
    }
  }

  delete = (value) => {
    if (!this.head) {
      return null
    }

    //ensure that we remove any head nodes that have target value
    while(this.head && this.head.value === value) {
      this.head = this.head.next
    }

    let currentNode = this.head
    while (currentNode.next) {
      if (currentNode.next.value === value) {
        currentNode.next = currentNode.next.next
      } else {
        currentNode = currentNode.next
      }
    }

    if (this.tail.value === value) {
      this.tail = currentNode
    }

  }

  toArray = () => {
    const elements = []
    
    let currentNode = this.head
    while (currentNode) {
      elements.push(currentNode)
      currentNode = currentNode.next
    }

    return elements
  }
}

const linkedList1 = new LinkedList()
linkedList1.append(1)
linkedList1.append('hello')
linkedList1.prepend(8.563)
linkedList1.prepend(8.563)
linkedList1.append('Max')
linkedList1.append(true)

// console.log(linkedList1.toArray())

linkedList1.delete('Max')
linkedList1.delete(8.563)
// linkedList1.delete(true)

// console.log(linkedList1.toArray())

console.log(linkedList1.find('Max'))
console.log(linkedList1.find('hello'))

linkedList1.insertAfter('new value - 1', 1)
linkedList1.insertAfter('new value - 2', 'hello')
console.log(linkedList1.toArray())