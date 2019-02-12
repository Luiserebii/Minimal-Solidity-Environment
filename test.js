//Libraries for testing environment provider, testing, and web3 constructor
const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');

//Initialize web3 with ganache provider
const provider = ganache.provider();
const web3 = new Web3(provider);

//Receive compiler data from compile.js script
const compilerStuff = require('../compile');

//Extracting and defining contract interface/bytecode for deployment
const calcInterface = compilerStuff['Calculator.sol']['interface'];
const calcBytecode = compilerStuff['Calculator.sol']['bytecode'];



/*
=====================
 -- Mocha Testing --
=====================
*/


/*

Tests for Calculator.sol:
--------------------------------
-addition is valid
-substraction is valid
-multiplication is valid
-division is valid

*/

//


//Account setup
let ethAccounts, ethAccountMaster;

//Contract variable
let Calculator;


beforeEach(async () => {

   //Grab accounts from web3 object, and set them to vars
   ethAccounts = await web3.eth.getAccounts();
   ethAccountMaster = ethAccounts[0];

   Calculator = await deployCalculator(ethAccountMaster);

});



describe('Testing Calculator.sol functions...', () => {
   it('Addition works (+sum is as expected)', async () => {

      assert.ok(await BitToken.options.address);
      //Owner is expected
      assert.equal(ethAccountMaster, await BitToken.methods.owner().call());

   });
});
