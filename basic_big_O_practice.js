const sumUp = (n) => {
  let result = 0;
  for (let i = 0; i<=n; i++) {
    result += i
  }
  return result
}

console.log(sumUp(4))

const constantSumUp = (n) => {
  return (n/2) * (1 + n)
}

console.log(constantSumUp(4))
