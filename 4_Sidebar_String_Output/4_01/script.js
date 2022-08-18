/**
 * Use template literals to output HTML
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 *
 */
import Backpack from "./Backpack.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST"
);

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("Days since aquired:", everydayPack.backpackAge());
//////////////////////////////////////

//////////////////////////////////////

const content = `
              <main>
              <article>
                <h1>${everydayPack.name}</h1>
                <ul>
                  <li>Volume: ${everydayPack.volume}</li>
                  <li>Color: ${everydayPack.color}</li>
                  <li>Age: ${everydayPack.backpackAge()}</li>
                  <li>Number of pockets: ${everydayPack.pocketNum}</li>
                  <li>Left strap length: ${everydayPack.strapLength.left}</li>
                  <li>Right strap length: ${everydayPack.strapLength.right}</li>
                  <li>Lid status: ${
                    everydayPack.lidOpen ? "Opened" : "Closed"
                  }</li>
                </ul>
              </article>
              </main>
          `;

document.body.innerHTML = content;
//
const arr = [3, 2];
arr.unshift();
//
const colors = ["green", "red", "blue"];
const colorsJSON = JSON.stringify(colors);
console.log(colorsJSON);
//
const book = { title: "The king", pubYear: 2020, author: "TIMERA" };

const { ...items } = book;
console.log(items);

const obj = {};
const obj2 = {
  id: 1,
  name: "Huawei headset",
  price: 250,
  comments: [
    {
      id: 1,
      author: "Timera",
      comment: "",
    },
    {
      id: 2,
      author: "Niuma",
      comment: "",
    },
  ],
};

console.log(obj2);

const objJSON = JSON.stringify(obj2);
console.log(objJSON);

const objJS = JSON.parse(objJSON);
console.log(objJS);
