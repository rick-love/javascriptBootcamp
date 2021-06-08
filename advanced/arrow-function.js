const square = (num) => num * num;

const squareLong = (num) => {
  return num * num;
};
console.log(square(5));

const people = [
  { name: 'rick', age: 49 },
  { name: 'john', age: 32 },
  { name: 'lena', age: 39 },
];

const underThirty = people.filter((person) => person.age < 34);
const is39 = people.filter((person) => person.age === 39);
const is32 = people.find((person) => person.age === 32)
console.log(underThirty);
console.log(is32.name);
