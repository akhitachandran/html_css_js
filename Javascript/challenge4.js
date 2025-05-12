//Loops
//1.Sum of First N Natural Numbers
function sumOfN(n) {
  let sum=0;
  for(let i=0;i<=n;i++){
      sum+=i;
  }
return sum;
}

//2.Multiplication Table
function printMultiplicationTable(n) {
  let arr=[];
  for(let i=1;i<=10;i++){
      let a=n*i;
      arr.push(`${n} * ${i} = ${a}`);
  }
  
return arr;
}

//3.Count Vowels in a String
function countVowels(str) {
  let count=0;
  const vowel=[`a`,`e`,`i`,`o`,`u`,`A`,`E`,`I`,`O`,`U`];
  for(let key of str){
      if(vowel.includes(key)){
          count++;
      }
  }
return count;
}
x=countVowels("Hello World");
console.log(count);
