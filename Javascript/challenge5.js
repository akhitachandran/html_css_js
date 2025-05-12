//Using Array Methods
const squareNumbers = (arr) => {
    return arr.map((key)=>{
        return key*key;
    });
};

//Custom Filter Function
const filterEvenNumbers = (arr) =>{
    return arr.filter((key)=>{
        if(key%2==0){
            return key;
        };
    });
}

//Sum of Positive Numbers
const sumPositiveNumbers = (arr) => {
    const a=arr.filter((key)=>{
            return key>0;
    });
    return a.reduce((sum,key)=>{
        return sum+=key;
    },0);
};

//Transform Array of Objects
const getNames = (arr) => {
    return arr.map((key)=>{
        return key.name
});
};

//Find the Longest Word
const findLongestWord = (arr) => {
    return arr.reduce((a,key)=>{
        return key.length>a.length?key:a
    });
};

let arr=[-1,-2,3,4,5,6,8];
let arr2=["hi","hello","everybody","world"];
let arr3=[{name:"abc",age:15},{name:"xyz",age:20},{name:"mno",age:17}];
console.log(squareNumbers(arr));
console.log(filterEvenNumbers(arr));
console.log(sumPositiveNumbers(arr));
console.log(getNames(arr3));
console.log(findLongestWord(arr2));


