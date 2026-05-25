

type User = {
  name: string;
  age: number;
};

let user1: User = {
  name: "Krishna",
  age: 22,
};


let user2 = user1;

// changing user2
user2.name = "megha";

console.log("User 1:", user1);
console.log("User 2:", user2);