
// Basic Array

let listOfNames = ['Moinul', 'Rahman', 'Usama', 'Shagor'];
console.log(listOfNames); // Temp off

// Push method

listOfNames.push('Kins');
console.log(listOfNames);

// Pop method

listOfNames.pop();
console.log(listOfNames);

// Unshift method

listOfNames.unshift('kins');
console.log(listOfNames);

// Shift method

let findRemove = listOfNames.shift();

console.log(findRemove);
console.log(listOfNames);

// Reverse method

listOfNames.reverse();
console.log(listOfNames);

// Sort method

listOfNames.sort();
console.log(listOfNames);

// indexOf

let findIndex = listOfNames.indexOf('Rahman');
console.log(findIndex);

// lastIndexOf

let findLastIndex = listOfNames.lastIndexOf('Shagor');
console.log(findLastIndex);

// splice 01

listOfNames.splice(0,1,'User1');
console.log(listOfNames);

// splice 02 

listOfNames.splice(1,2,'User2');
console.log(listOfNames);