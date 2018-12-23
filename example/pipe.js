const getSum = (a) => a + 3
const getMinus = (a) => a - 1
const getMul = (a) => a * 2

function pipe(...fns) {
  const fs = fns
  return (a) => fs.reduce((v, f) => f(v), a)
}

const p = pipe(getSum, getMinus, getMul)
p(3)

const arr = [ 1, 2, 3 ]
arr.reduce((v, v1) => v + v1)