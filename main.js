const args = require("args-parser")(process.argv);
const fs = require('fs');
let LZString = require('lz-string');

let compressedStr = args.compressed;

let decompressedStr = LZString.decompress(compressedStr);
// console.log('decompressedStr', decompressedStr);

fs.writeFileSync('decompressed.txt', decompressedStr);

/*
let path = args.file;
console.log('path', path);
*/

/*
let compressedStr = fs.readFileSync(path, 'UTF-8');
console.log('compressedStr', compressedStr);

let decompressedStr = LZString.decompress(compressedStr);
console.log('decompressedStr', decompressedStr);

fs.writeFileSync('decompressed.txt', decompressedStr);
*/
/*
fs.readFile(path, 'utf8', (err, data) => {
    if (err) throw err;
    console.log('data', data);

    let decompressedStr = LZString.decompress(data);
    console.log('decompressedStr', decompressedStr);
});*/

/*
let compressed = LZString.compress('fooo');
console.log('compressed', compressed);
let decompressed = LZString.decompress(compressed);
console.log('decompressed', decompressed);
*/
