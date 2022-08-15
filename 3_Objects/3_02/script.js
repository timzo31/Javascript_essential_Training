/**
 * Create a Backpack object.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    (this.newStrapLength.left = lengthLeft),
      (this.newStrapLength.right = lengthRight);
  },
};

//////////////////3_04////////////////
// Accessing Objects
console.log(`The backpack object: `, backpack);

// Accessing Object Properties
console.log("The pocketNum value: ", backpack.pocketNum);
console.log("Strp Length L:", backpack.strapLength.left);

console.log("The pocketNum value: ", backpack["pocketNum"]);
//
