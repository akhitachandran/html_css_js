//while loop
let sum=0;
let i=0;
while(i<=5){
    sum+=i;
    i++
}
console.log(sum);

//while loop that counts from 5 to 1 and stores value in an array
let countdown=[];
let m=5;
while(m>0){
    countdown.push(m);
    m--;
}
console.log(countdown);

/*take input from user until stop is given as an input and store values in an array
let teaCollection=[];
let tea;
do {
    tea=prompt("enter your fav tea name (enter stop to end): ");
    if(tea!="stop"){
        teaCollection.push(tea);
    }
} while (tea!="stop");
console.log(teaCollection)
*/

//sum of no. 1 to 3 
let total=0;
let j=1;
do{
    total+=j;
    j++
}while(j<=3);
console.log(total);

//for 
let num=[2,4,6];
let newNum=[];
let k=0;
for(k=0;k<num.length;k++){
    newNum.push(num[k]*2);
}
console.log(newNum);

//move values of one array to another using for loop
let arr1=["paris","new york","tokyo","london"];
let arr2=[];
let x=0;
//method1
for(x=0;x<arr1.length;x++){
    arr2[x]=arr1[x];
}

/*method2
for(x=0;x<arr1.length;x++){
    let city=arr1[x];
    arr2.push(city);
}
*/
console.log(arr1);
console.log(arr2);

