const path = require("path");
const fs = require("fs");

//Create folder
/*fs.mkdir(path.join(__dirname, "test"), {}, function(err) {
  if (err) throw err;
  console.log("Folder created");
});*/


//Create file
// fs.writeFile(path.join(__dirname, "test", 'hello.txt'), "", function(err) {
//   if (err) throw err;
//   console.log("File created");

//   fs.appendFile(path.join(__dirname, 'test', 'hello.txt'), 'I love node js\n', err => {
//       if (err) throw err;
//       console.log("Appended to file");
//   });
// });

//Read file
fs.readFile(path.join(__dirname, "test", "hello.txt"),
"utf8",
(err, data) => {
  if(err) throw err;
  console.log(data);
});