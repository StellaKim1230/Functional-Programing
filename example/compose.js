const g = (n) => n + 1
const f = (n) => n * 2

const h = (x) => f(g(x))

console.log(h(20))

const compose = (f, g) => (x) => f(g(x))

console.log(compose(f, g)(1))
