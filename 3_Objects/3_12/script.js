/**
 * Object Contructorsfor the Backpack object type.
 */

import Person from "./Person.js";

function Backpack(
  name,
  volume,
  color,
  pocketNum,
  strapLengthL,
  strapLengthR,
  lidOpen
) {
  this.name = name;
  this.color = color;
  this.volume = volume;
  this.pocketNum = pocketNum;
  this.strapLength = {
    left: strapLengthL,
    right: strapLengthR,
  };
  this.lidOpen = lidOpen;

  this.toggleLid = function (lidStatus) {
    this.lidOpen = lidStatus;
  };

  this.newStarpLength = function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  };
}

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
