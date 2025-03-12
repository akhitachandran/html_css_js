//Q1
let teaFlavors=["green tea","black tea","oolong tea"]
firstTea=teaFlavors[0];
console.log(firstTea);

//Q2
let cities=["london","tokyo","paris","new york"];
let favcity=cities[2];
console.log(favcity);


//Q3
let teaTypes=["herbal tea","white tea","masala tea"];
teaTypes[1]="jasmin tea";
console.log(teaTypes);

//Q4
let citiesVisited=["mumbai","dubai"]
citiesVisited.push("berlin");
console.log(citiesVisited);

//q5
citiesVisited.pop();//does not require a value and removes the last element 
console.log(citiesVisited);

//Q6
let softCopy=[...teaTypes];
console.log(softCopy);
teaTypes.pop();
console.log(softCopy);

//Q7
let eucities=["london","germany"];
let asiancities=["tokyo","delhi"];
let worldcities=eucities.concat(asiancities); //combines two arrays
//console.log(eucities);
//console.log(asiancities);
console.log(worldcities);

//Q8
let citylength=worldcities.length;
console.log(citylength);

//Q9
let cityBucketList=["tokyo","vancouver","bangkok","london"]
isLondoninList=cityBucketList.includes("london");
console.log(isLondoninList);

