const Reader = require("./lib/utils/Reader");
const ExplorerService = require("./lib/services/ExplorerService")
const FizzBuzzService = require("./lib/services/FizzBuzzService")

// Part 1 Read json file ===========================

const explorers = Reader.readJsonFile("explorers.json"); // esto regresa la lista de explorers del archivo

// Aplicación del ExplorerService sobre la lista de explorers


// Part 2: Get the quantity of explorers names in node
const explorersInNode = ExplorerService.filterByMission(explorers, "node")
//console.log(explorersInNode.length)

// Part4: Get the explorer's usernames in Node
const usernamesInNode = ExplorerService.getExplorersUsernamesByMission(explorers, "node");

// DEAD CODE: Part 5,6,7, please remove this and go to Part 8!

// Part 5: Get a new list of explorers in node, if the score numbers is divisible by 3, I need a new propery called trick, and the value assigned is FIZZ, if not the value should be the score itself.
// Score: 3, Trick: FIZZ.
// Score: 4, Trick: 4.
// Score: 5, Trick: 5.

// Part 8: Get a list of the explorers in node, if the score is divisible by 5 and 3, set the property trick and the value FIZZBUZZ, if is just divisible by 5 set the property trcik and the value BUZZ, if is just divisible by 3 set the property trick and the value FIZZ, otherwise set the property trick and the score value. TODO

const explorersInNodeAndFizzBuzzTrick = explorersInNode.map((explorer) => FizzBuzzService.applyValidationInExplorer(explorer));