//require("./batman");
//require("./superman");
// import SuperHero from "./modulecatching"
//  console.log(SuperHero.getName());
//  SuperHero.setName("Superman")
// console.log(SuperHero.getName())

// import NewSuperHero from "./modulecatching";

// console.log(NewSuperHero.getName());


const math = require("./math");

const {add,subtract}=math;

console.log(math.add(2,3));
console.log(math.subtract(2,3));

export {};