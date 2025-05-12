//1.Creating a Simple Generator
function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
}
const t1=numberGenerator();
console.log(t1.next().value);
console.log(t1.next().value);
console.log(t1.next().value);

//2.Create a Custom Iterator
function* rangeIterator(start, end) {
    for (let i = start; i <= end; i++) {
        yield i;
    }
}
const t2 = rangeIterator(2,5);
console.log(t2.next().value);
console.log(t2.next().value);
console.log(t2.next().value);
console.log(t2.next().value);

///3.Generator Function for Fibonacci Sequence
function* fibonacciGenerator() {
  let a = 1, b = 1;
  yield a;
  yield b;
  while (true) {
    let next = a + b;
    yield next;
    a = b;
    b = next;
  }
}
const t3 = fibonacciGenerator();
console.log(t3.next().value);
console.log(t3.next().value);
console.log(t3.next().value);
console.log(t3.next().value);
console.log(t3.next().value);
console.log(t3.next().value);
console.log(t3.next().value);
console.log(t3.next().value);