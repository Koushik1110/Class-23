"use strict";

//array looping
// const numbers = [10, 20, 30, 40, 50];

// for (const number of numbers) {
//   console.log(number);
// }

//object looping
//Just as we loop array in our previous example, it is not possible to do the same for object looping. Because array and objects are fundamentally different. Array operates on index position on the other hand objects operates on property name.

// const student = {
//   studentName: "Alex",
//   age: 20,
//   rollNo: 9,
// };

//As they do not maintain any index, there are three way we can loop them.

//Object.keys()
// const keys = Object.keys(student);
// console.log(keys);

// //Object.values()
// const values = Object.values(student);
// console.log(values);

// //Object.entries()
// const entries = Object.entries(student);
// console.log(entries);

// for (const key of keys) {
//   console.log(key);
// }

// for (const value of values) {
//   console.log(value);
// }

// for (const [key, value] of entries) {
//   console.log(key, value);
// }

// //data structure
// //01. array
// //02. object
// //03. set
// //04. map

// //set
// //set is a modern form of array.
// //The characteristic of a set is it only shows unique number.
// const mySet = new Set([10, 20, 30, 40, 50]); //constructor function
// mySet.add(10);
// mySet.add(20);
// mySet.add(30);
// mySet.add(100);
// mySet.add(420);

//we can also delete individual properties and clear everything using set.
// mySet.delete(20)
// mySet.clear()

// now lets solve a problem using set.

// It often floods in Bangladesh. Due to this condition, people who lives near river either lives in a two-storied building or owns a boat. Some of them even owns both.

//Now write down a programme that can determine who owns what?

const peopleWithBoat = new Set (["Ariful", "Apurbo", "Shamim", "Koushik", "Tahia", "Shohan"]);
const peopleWithHome = new Set (["Tahia", "Tahmida", "Jubaer", "Shohan"]);

//Find people with both boat and house
function findPeopleWithBoth(setBoat, setHouse) {
  const peopleWithBoth = new Set();

  for (const person of setBoat) {
    if(setHouse.has(person)) {
      peopleWithBoth.add(person);
    }
  }
  return peopleWithBoth
}

console.log(findPeopleWithBoth(peopleWithBoat, peopleWithHome));

// find people with only home

function findPeopleWithOnlyHome(setBoat, setHouse) {
  const peopleWithOnlyHome = new Set();

  for (const person of setHouse) {
    if (!setBoat.has(person)) {
      peopleWithOnlyHome.add(person);
    }
  }
  return peopleWithOnlyHome;
}

console.log(peopleWithOnlyHome)