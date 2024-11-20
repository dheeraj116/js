// A variable defined with the const keyword cannot be reassigned:
try {
  const PI = 3.141592653589793;
  PI = 3.14;
} catch (err) {
  console.log(err);
}
// When to use JavaScript const?
// Always declare a variable with const when you know that the value should not be changed.

// Use const when you declare:

// A new Array
// A new Object
// A new Function
// A new RegExp

////////////////////////////////////////////
// const cars = ["Saab", "Volvo", "BMW"];

// // Change an element:
// cars[0] = "Toyota";

// // Add an element:
// cars.push("Audi");
// console.log(cars);
// const ame = ["saa"]
// let a = "4"
// let m = "5"
// console.log(a)
const x = 2;     // Allowed
{
const x = 3;
console.log(x)
}
console.log(x)