
// Declare object - property and value

var samplePerson1 = {
    personName: 'Rahman',
    eyeColor: 'Black',
    hairStyle: 'Straight',
    bodyHeight: 145 + ' ' + 'cm'
}

var samplePerson2 = {
    personName: 'Simon',
    eyeColor: 'Brown',
    hairStyle: 'Black',
    bodyHeight: 135 + ' ' + 'cm'
}

// Assign new property and value to Object - samplePerson1

samplePerson1.age = 30;

console.log(samplePerson1);

// Objects in array

var person = [samplePerson1, samplePerson2];

console.log(person);

// Push new object with property and value

person.push({personName: 'Bipon', eyeColor: 'Black', hairStyle: 'Curly'});

console.log(person);


