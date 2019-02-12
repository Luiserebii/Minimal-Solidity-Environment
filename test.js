//Libraries for testing environment provider, testing, and web3 constructor
const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');

//Initialize web3 with ganache provider
const provider = ganache.provider();
const web3 = new Web3(provider);

//Receive compiler data from compile.js script
const compilerStuff = require('./compile');

//Simply for clarity:
let calculatorFileName = "Calculator.sol";
let calculatorContractName = "Calculator";

//Extracting and defining contract interface/bytecode for deployment
//NOTE: String referred to is equivalent to:
// = compilerStuff[calculatorFileName + ":" + calculatorContractName]
//
//For more details, see official Solidity documentation
const calcInterface = compilerStuff['Calculator.sol:Calculator']['interface'];
const calcBytecode = compilerStuff['Calculator.sol:Calculator']['bytecode'];



/*
=====================
 -- Mocha Testing --
=====================
*/


/*

Tests for Calculator.sol:
--------------------------------
-addition is valid
-subtraction is valid
-multiplication is valid
-division is valid

*/



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

   it('Contract is deployed', async () => {
      assert.ok(await Calculator.options.address);
   });


   it('Addition works (+sum is as expected)', async () => {

      //Setup variables
      let a = 1;
      let b = 2;

      //Create transaction calling "add" method, and receive receipt
      const receipt = await Calculator.methods.add(a, b).send({ from: ethAccountMaster });

      //Read event logs from receipt
      let res_a = receipt.events.Addition.returnValues._a;
      let res_b = receipt.events.Addition.returnValues._b;
      let res_sum = receipt.events.Addition.returnValues._sum;

      //Test for expected values by equality
      assert.equal(res_a, a);
      assert.equal(res_b, b);
      assert.equal(res_sum, a + b);

   });
});


/*
=========================
Deployment function
(Utility)
=========================
*/
async function deployCalculator(addressDeployer){
   _Calculator = await new web3.eth.Contract(JSON.parse(calcInterface))
        .deploy({ data: calcBytecode, arguments: [] })
        .send({ from: addressDeployer, gas: '1000000'});
   return _Calculator;
}
