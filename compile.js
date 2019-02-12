const path = require('path');
const fs = require('fs');
const solc = require('solc');

const calcPath = path.resolve(__dirname, 'contracts', 'Calculator.sol');


const input = {

   sources: {
      'Calculator.sol': fs.readFileSync(calcPath, 'utf8')
   }

};


compileOutput = solc.compile(input, 1);
//console.log(compileOutput)  // <--- Try uncommenting this to see the output object!

module.exports = compileOutput.contracts;

