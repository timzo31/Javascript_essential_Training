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
    lidOpen,
    dateAcquired
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
    this.dateAcquired = dateAcquired;
  }

  // Add methods like normal functions:
  toggleLid(lidStatus) {
    this.lidOpen = lidStatus;
  }

  newStarpLength(lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  }

  backpackAge() {
    let now = new Date();
    let acquired = new Date(this.dateAcquired);
    let ellapsed = now - acquired; // ellapsed time in milliseconds
    let daysSinceAcquired = Math.floor(ellapsed / (1000 * 3600 * 24));
    return daysSinceAcquired;
  }
}

export default Backpack;
