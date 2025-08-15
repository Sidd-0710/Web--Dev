// fs is stands for file system used to read and write files in your local system 

// import an external fs module
const fs = require('fs');

// read file a.txt and store its content in contents variable
const contents = fs.readFileSync("a.txt", "utf-8"); // synchronous way of reading file

// print the contents of the file 
console.log(contents); 

  // Note: The above code will block the event loop until the file is read completely.
// Output: The content of a.txt will be printed to the console  