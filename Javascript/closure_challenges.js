//Task 1: Creating a Counter Using Closures
function createCounter() {
    let counter=0;
    return function count(){
        counter++;
        return counter;
    };
    
};
const a=createCounter();
console.log(a());
console.log(a());
console.log(a());

//Task 2: Rate Limiter Function
function rateLimiter(fn, limit) {
  let lastCalled = 0;
  return function(...args) {
    const now = Date.now();
    if (now - lastCalled < limit) {
      return 'Rate limit exceeded';
    } else {
      lastCalled = now;
      return fn(...args);
    }
  };
}
console.log(rateLimiter());

//Task 3: Memoization Function
function memoize(fn){
  const cache={};
  return function(...args){ //It allows the function to accept any number of arguments and packs them into an array named args
   const key=args.join(","); ////args.join() is used to concatenate all elements of an array into a single string 
   if(cache[key]!== undefined){ 
     return cache[key];
   }
   const result=fn(...args);
   cache[key]=result;
   return result;
  }
} 

function add(a,b){
  res=a+b;
  return res;
}

let func= memoize(add);
console.log(func(2,2));
console.log(func(4,2));
console.log(func(4,4));




