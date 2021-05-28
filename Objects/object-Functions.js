let book1 = {
  title: '1984',
  author: 'George Orwell',
  pageCount: 326,
};
let book2 = {
  title: 'Jaws',
  author: 'Unknown',
  pageCount: 124,
};

let getSummary = function (book) {
  // console.log(`${book.title} by ${book.author}`);
  return {
    summary: `${book.title} by ${book.author}`,
    pageCountSummary: `${book.title} is ${book.pageCount} pages long.`,
  };
};

let book1Summary = getSummary(book1);
let book2Summary = book2;

console.log(book1Summary.pageCountSummary);

let convertFahrenheit = function (fahrenheit) {
  return {
    fahrenheit: fahrenheit,
    kelvin: (fahrenheit + 459.67) * (5 / 9),
    celcius: (fahrenheit - 32) * (5 / 9),
  };
};

let temps = convertFahrenheit(74);
console.log(temps);
