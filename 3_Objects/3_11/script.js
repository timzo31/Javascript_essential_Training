/**
 * Create a class for the Backpack object type.
 */

import Backpack from "./Backpack.js";
import Person from "../3_12/Person.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "Green",
  20,
  30,
  20,
  false
);

console.log("The everyday Pack Object", everydayPack);
console.log("Pocket Number: ", everydayPack.pocketNum);

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
