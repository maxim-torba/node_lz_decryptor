const args = require("args-parser")(process.argv);
const fs = require('fs');
let LZString = require('lz-string');

let path = args.file;
console.log('path', path);

let compressedStr = fs.readFileSync(path, 'utf-8');
// console.log('compressedStr', compressedStr);

let decompressedStr = LZString.decompress(compressedStr);
console.log('decompressedStr', decompressedStr);

fs.writeFileSync('decompressed.txt', decompressedStr);
