const getSum = (a) => a + 3
const getMinus = (a) => a - 1
const getMul = (a) => a * 2

function pipe(...fns) {
  const fs = fns
  return (a) => fs.reduce((v, f) => f(v), a)
  // return (a) => fs[0](a)
  // reduce ((v, f) => f(v), a)
  // reduce ((계산된 누적값, 배열에서 현재값) => 결과값, 계산된 누적값이 없을경우 초기값)
  // p(3) 1. 3, 6
  // p(3) 2. 6, 5
  // p(3) 3. 5, 10
  // 10으로 리턴
}

const p = pipe(getSum, getMinus, getMul)
// p : (a) => fs.reduce((v, f) => f(v), a)
console.log(p(3))

const arr = [1, 2, 3]
arr.reduce((v, v1) => v + v1)

// 1, 1
// 1, 3
// 3, 3 => 6이 리턴
