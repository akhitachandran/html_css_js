/* 
1. Write a `for` loop that loops through the array `["green tea", "black tea", "chai", "oolong tea"]` and stops the loop when it finds `"chai"`. 
   Store all teas before `"chai"` in a new array named `selectedTeas`.
*/
let teaCollection = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTeas = [];
let i = 0;
for (i = 0; i < teaCollection.length; i++) {
    //method1
    if (teaCollection[i] != "chai") {
        selectedTeas.push(teaCollection[i]);
    }
    else {
        break;
    }
/*method 2
if(teaCollection[i]==="chai"){
   break;
}
  selectedTeas.push(teaCollection[i]); 
*/
}
//console.log(selectedTeas);


/* 
2. Write a `for` loop that loops through the array `["London", "New York", "Paris", "Berlin"]` and skips `"Paris"`. 
   Store the other cities in a new array named `visitedCities`.
*/
let cities=["London", "New York", "Paris", "Berlin"];
let visitedCities=[];
let j=0;
for(j=0;j<cities.length;j++){
    if(cities[j]==="Paris"){
        continue;
    }
    visitedCities.push(cities[j]);
}
//console.log(visitedCities);

/* 
3. Use a `for-of` loop to iterate through the array `[1, 2, 3, 4, 5]` and stop when the number `4` is found. 
   Store the numbers before `4` in an array named `smallNumbers`.
*/
let number=[1,2,3,4,5];
let smallNum=[];
for (const num of number) {
    if(num===4){
        break;
    }
    smallNum.push(num);
}
//console.log(smallNum);

/* 
4. Use a `for-of` loop to iterate through the array `["chai", "green tea", "herbal tea", "black tea"]` and skip `"herbal tea"`. 
   Store the other teas in an array named `preferredTeas`.
*/
let tea=["chai", "green tea", "herbal tea", "black tea"];
let preferredTeas=[];
for (const i of tea) {
    if(i==="herbal tea"){
        continue;
    }
    preferredTeas.push(i);
}
//console.log(preferredTeas);

/* 
5. Use a `for-in` loop to loop through an object containing city populations. 
   Stop the loop when the population of `"Berlin"` is found and store all previous cities' populations in a new object named `cityPopulations`.

   let citiesPopulation = {
    "London": 8900000,
    "New York": 8400000,
    "Paris": 2200000,
    "Berlin": 3500000
};
*/
let citiesPopulation = {
    "London": 8900000,
    "New York": 8400000,
    "Paris": 2200000,
    "Berlin": 3500000
};
let newCityPopulation={};
for (const key in citiesPopulation) {
    if(key=="Berlin"){
        break;
    }
    newCityPopulation[key]=citiesPopulation[key];
}
//console.log(newCityPopulation);

/* 
6. Use a `for-in` loop to loop through an object containing city populations. 
   Skip any city with a population below 3 million and store the rest in a new object named `largeCities`.
let worldCities = {
    "Sydney": 5000000,
    "Tokyo": 9000000,
    "Berlin": 3500000,
    "Paris": 2200000
};
   */
let worldCities = {
    "Sydney": 5000000,
    "Tokyo": 9000000,
    "Berlin": 3500000,
    "Paris": 2200000
};
let largeCities={};
for (const city in worldCities) {
    if(worldCities[city]<3000000){
        continue;
    }
    largeCities[city]=worldCities[city];
}
//console.log(largeCities);

/* 
7. Write a `forEach` loop that iterates through the array `["earl grey", "green tea", "chai", "oolong tea"]`. 
   Stop the loop when `"chai"` is found, and store all previous tea types in an array named `availableTeas`.
*/
let teaTypes=["earl grey", "green tea", "chai", "oolong tea"];
let availableTeas=[];
teaTypes.forEach(function(tea){
    if(tea==="chai"){
        return;
    }
    availableTeas.push(tea);
});
// console.log(availableTeas);

/* 
8. Write a `forEach` loop that iterates through the array `["Berlin", "Tokyo", "Sydney", "Paris"]`. 
   Skip `"Sydney"` and store the other cities in a new array named `traveledCities`.
*/
let cityList=["Berlin", "Tokyo", "Sydney", "Paris"];
let traveledCities=[];
cityList.forEach(element => {
    if(element==="Sydney"){
        return;
    }
    traveledCities.push(element);
});
//console.log(traveledCities);

/* 
9. Write a `for` loop that iterates through the array `[2, 5, 7, 9]`. 
   Skip the value `7` and multiply the rest by 2. Store the results in a new array named `doubledNumbers`.
*/
let num=[2,5,7,9];
let doubledNumbers=[];
for(let j=0;j<num.length;j++){
    if(num[j]===7){
        continue;
    }
    doubledNumbers.push(num[j]*2);
}
//console.log(doubledNumbers);

/* 
10. Use a `for-of` loop to iterate through the array `["chai", "green tea", "black tea", "jasmine tea", "herbal tea"]` 
    and stop when the length of the current tea name is greater than 10. 
    Store the teas iterated over in an array named `shortTeas`.
*/
let myTea=["chai", "green tea", "black tea", "jasmine tea", "herbal tea"];
let shortTeas=[];
for (const tea of myTea) {
    if(tea.length>10){
        break;
    }
    shortTeas.push(tea);
}
console.log(shortTeas);
