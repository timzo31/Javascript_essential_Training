/**
 * Scope and the var statement
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
 */

let color = "purple";

document.querySelector(".left").style.backgroundColor = color;
document.querySelector(".left .color-value").innerHTML = color;

color = "skyblue";

// Global scope issue
// function headingColor() {
//   color = "blue";
//   document.querySelector(".title").style.color = color;
// }
//headingColor();

// Block-scope solution
function headingColor() {
  let titleColor = "blue";
  document.querySelector(".title").style.color = color;
  console.log("inside: ", titleColor);
}
headingColor();

console.log("outside: ", titleColor);

document.querySelector(".right").style.backgroundColor = color;
document.querySelector(".right .color-value").innerHTML = color;

// function headingColor() {
//   color = "blue";
//   document.querySelector(".title").style.color = color;
// }

// headingColor();
