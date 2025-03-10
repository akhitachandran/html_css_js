function printMultiplicationTable(n) {
    let arr=[];
    for(let i=0;i<=10;i++){
        arr.push(`${n} * ${i} = ${n*i}`);
    }
    
  return arr;
}
let a=printMultiplicationTable(2);
console.log(a);
