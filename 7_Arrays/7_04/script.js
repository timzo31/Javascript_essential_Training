let fruits = ["Banana", "apple", "Orange", "Avocado"];
let veggies = ["Brocolli", "tomato", "Carrot", "Onion", "Patato"];

console.log(veggies);
console.log(veggies.reverse());
console.log(veggies.sort());

console.log(veggies.find((el) => el == "Onion"));
console.log(veggies.findIndex((el) => el == "Carrot"));
console.log(veggies.indexOf("Carrot"));

fruits.unshift(fruits.pop());
fruits.every((item) => item === "apple");

let remove = "Patato";
veggies.splice(veggies.indexOf(remove), 1, "Lemon");
console.log(`Removed "${remove}":`, veggies);
