# Minimal Solidity Environment
![GitHub package.json version](https://img.shields.io/github/package-json/v/Luiserebii/Minimal-Solidity-Environment?color=g)
![GitHub](https://img.shields.io/github/license/Luiserebii/Minimal-Solidity-Environment?color=g)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/Luiserebii/Minimal-Solidity-Environment.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/Luiserebii/Minimal-Solidity-Environment/context:javascript)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/Luiserebii/Minimal-Solidity-Environment.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/Luiserebii/Minimal-Solidity-Environment/alerts/)

A minimal environment for Solidity smart contract development.

This was written in a way to make the simplest development environment possible, with minimum design choices. The focus is more on the basic structure of dApp projects, and less on advanced best practices. Ideally, anyone will be able to pick this up and learn the fundamentals of writing and testing Ethereum smart contracts in Solidity with Node.js and Mocha!

<br>

## Overview:
### -compile.js 
* Script for compiling Solidity smart contract code (Calculator.sol)

### -test.js 
* Test scripts with Mocha to check for any potential issues

### -contracts/
* Folder for contract files
* <b>Calculator.sol:</b> Basic calculator contract.

### Bonus file: .gitattributes
* Allows GitHub to recognize your .sol contract syntax! Credits to kinrezC for this tip.

<br>

## Instructions:
* Try to browse over the files written; what is going on in them? How do they relate to one another?
* Install the required dependencies listed in <b>package.json</b> by running: `npm install`
* Run the compile.js script through: `npm run compile` or `node compile.js`
* Run the test.js script through: `npm test` or `mocha -- test.js`

<br>

## Suggestions?
If you have any suggestions or ideas, email me at luis@serebii.io, or make a pull request! I am more than happy to chat :) <br>
<b> - Luiserebii</b>
