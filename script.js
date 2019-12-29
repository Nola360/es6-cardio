// Variable
let myArray = [11, 22, 33, 44, 55, 66];
let mySet = new Set(myArray);

// Adds '100' string to myArray array
mySet.add('100');

// Adds an object 
mySet.add({ a: 1, b: 2 });

// Deletes number 22
mySet.delete(22);

// Clears set array
// mySet.clear()

console.log(mySet);

// reoresent the number of items in the array
console.log(mySet.size);

// Loops through and displays all items in array
mySet.forEach(function (val) {
  console.log(val);
})

console.log("***Next Method Below***")
console.log("***Next Method Below***")
console.log("***Next Method Below***")
console.log("***Next Method Below***")
console.log("***Next Method Below***")

// Map Method
let myMap = new Map([['a1', 'hello world!'], ['b2', 'goodbye!']])
console.log(myMap);

// Adds items to map
myMap.set('c3', 'c4');
console.log(myMap);

// Deletes items from map
myMap.delete('b2');
console.log(myMap);

// Checks size of map
console.log("The size of myMap is " + myMap.size);


console.log("***Next Method Below***")
console.log("***Next Method Below***")
console.log("***Next Method Below***")
console.log("***Next Method Below***")
console.log("***Next Method Below***")


// Weak Set
let carWeakSet = new WeakSet();

let car1 = {
  make: 'Honda',
  model: 'Accord'
}

carWeakSet.add(car1);

let car2 = {
  make: 'Lexus',
  model: 'is250'
}
carWeakSet.add(car2);

// Delets carWeakSet car1
carWeakSet.delete(car1);
console.log(carWeakSet);

// Weak Map
let carWeakMap = new WeakMap();

let key1 = {
  id: 1
}

let car3 = {
  make: "Honda",
  modle: "Accord",
  Year: 2020
}

carWeakMap.set(key1, car3);

console.log(carWeakMap);