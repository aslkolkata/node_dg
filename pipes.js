var fs = require("fs");

var readableStream = fs.createReadStream("input.txt");
var writeableStream = fs.createWriteStream("out.txt");

readableStream.pipe(writeableStream);
