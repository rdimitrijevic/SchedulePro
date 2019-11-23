const url = require("url");

const myURL = new url.URL(
  "https://www.youtube.com/watch?v=fBNz5xF-Kx4&t=2122s"
);

console.log(myURL.href);

console.log(myURL.pathname);

console.log(myURL.hostname);

//serialized query

console.log(myURL.searchParams);

myURL.searchParams.append('abc', '123');

console.log(myURL.searchParams);
console.log(myURL.toString());

myURL.searchParams.forEach((value, name) => { console.log(`${name} : ${value}`)});
