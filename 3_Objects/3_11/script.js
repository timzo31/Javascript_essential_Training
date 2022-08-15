/**
 * Create a class for the Backpack object type.
 */

import Backpack from "./Backpack.js";

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
