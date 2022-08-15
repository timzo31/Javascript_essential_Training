/**
 * Create a class for the Backpack object type.
 */

class Backpack {
  constructor(
    // Defines Parameters
    name,
    volume,
    color,
    pocketNum,
    strapLengthL,
    strapLengthR,
    lidOpen
  ) {
    // Defines Properties
    this.name = name;
    this.color = color;
    this.volume = volume;
    this.pocketNum = pocketNum;
    this.strapLength = {
      left: strapLengthL,
      right: strapLengthR,
    };
    this.lidOpen = lidOpen;
  }
  // Add methods like normal functions:
  toggleLid(lidstatus) {
    this.lidOpen = lidStatus;
  }

  newStarpLength(lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  }
}
export default Backpack;
