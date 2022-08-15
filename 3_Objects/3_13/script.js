/**
 * Create a class for the Backpack object type.
 */

import Backpack from "./Backpack.js";
import Person from "../3_12/Person.js";
import Bookpack from "./Bookpack.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "Green",
  20,
  30,
  20,
  false,
  "December 5, 2018 15:00:00 PST"
);

console.log("The everyday Pack Object", everydayPack);
console.log("Pocket Number: ", everydayPack.pocketNum);

// const age = 23;
// everydayPack.backpackAge = age;

console.log("Days since acquired: ", everydayPack.backpackAge());

const person1 = new Person(
  "Mamadou",
  "TIMERA",
  "YAFERA",
  1993,
  "Chongqing",
  "M",
  true
);

console.log(person1);
console.log(person1.printInfos());

/////////////////////////////////////
const boo1 = new Bookpack(
  "Le ventre de l'océan atlantique",
  "Fatou Diome",
  236,
  2016,
  10
);
