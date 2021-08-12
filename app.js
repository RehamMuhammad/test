// Modules (We have 3 modules in our application)
// Modules enable us to add functionality
// core Modules already exist or bulit-in in node
// modules created by myself
// modules bulit by someone else and i need to use it in my application

/************************************************************************************/
// file system

//File system (node module (core module) to create file or read from file)

// const fs = require("fs");
// fs.writeFileSync("notes.txt", "Hello");

// console.log(fs.readFileSync("notes.txt").toString());

// fs.appendFileSync("notes.txt", "Roro");

// console.log(fs.readFileSync("notes.txt").toString());

/************************************************************************************/
//require my files

// const x = require("./sum");

// console.log(x.sum(15, 10));

/************************************************************************************/
//Validator & Chalk
// const validator = require("validator");
// console.log(validator.isEmail("Reham@gmail.com"));

// const chalk = require("chalk");
// console.log(chalk.blue("Hello world!"));

// const error = chalk.bold.red;
// const warning = chalk.keyword("orange");

// console.log(error("Error!"));
// console.log(warning("Warning!"));

// console.log(chalk.bold.rgb(10, 100, 200)("Hello!"));
// console.log(chalk.bold.rgb(10, 100, 200)`Hello!`);
// console.log(chalk`{bold.rgb(10,100,200) Hello!}`);

/************************************************************************************/
//process.argv

// console.log(process.argv);

// const command = process.argv[2];

// if (command == "add") {
//   console.log("Add item");
// } else if (command == "delete") {
//   console.log("Delete Item");
// }

/************************************************************************************/

//Yargs
//add
//read
//delete
//list

//Version1

// const yargs = require("yargs");
// yargs.command({
//   command: "add",
//   describe: "Add notes",
//   handler: () => {
//     console.log("Add notes");
//   },
// });

// yargs.command({
//   command: "read",
//   describe: "read notes",
//   handler: () => {
//     console.log("read notes");
//   },
// });

// yargs.command({
//   command: "delete",
//   describe: "delete notes",
//   handler: () => {
//     console.log("delete notes");
//   },
// });

// yargs.command({
//   command: "list",
//   describe: "list notes",
//   handler: () => {
//     console.log("list notes");
//   },
// });

// // console.log(yargs.argv);
// // == but without printing the object in our console
// yargs.parse();

/************************************************************************************/
//Version2
//add
//read
//delete
//list

// const yargs = require("yargs");
// yargs.command({
//   command: "add",
//   describe: "Add notes",
//   //options
//   builder: {
//     title: {
//       describe: "This is title description",
//       demandOption: true,
//       type: "string",
//     },
//     body: {
//       describe: "This is body description",
//       demandOption: true,
//       type: "string",
//     },
//   },
//   handler: (argv) => {
//     console.log("Add notes title", argv.title);
//     console.log("Add notes body", argv.body);
//   },
// });

// yargs.command({
//   command: "read",
//   describe: "read notes",
//   //options
//   builder: {
//     title: {
//       describe: "This is title description",
//       demandOption: true,
//       type: "string",
//     },
//   },
//   handler: (argv) => {
//     console.log("read notes Title", argv.title);
//   },
// });

// yargs.command({
//   command: "delete",
//   describe: "delete notes",
//   builder: {
//     title: {
//       describe: "This is title description",
//       demandOption: true,
//       type: "string",
//     },
//   },
//   handler: (argv) => {
//     console.log("delete notes Title", argv.title);
//   },
// });

// yargs.command({
//   command: "list",
//   describe: "list notes",
//   handler: (argv) => {
//     console.log("list notes", argv.title);
//   },
// });

// console.log(yargs.argv);

/************************************************************************************/
//Save json data, Convert json --> object, Convert object --> json
//Trial.js

/************************************************************************************/

// Version3
// add
// read
// delete
// list

const notes = require("./notes");

const yargs = require("yargs");
yargs.command({
  command: "add",
  describe: "Add notes",
  //options
  builder: {
    title: {
      describe: "This is title description",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "This is body description",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    notes.addNotes(argv.title, argv.body);
  },
});

yargs.command({
  command: "read",
  describe: "read notes",
  //options
  builder: {
    title: {
      describe: "This is title description",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    notes.readNotes(argv.title);
  },
});

yargs.command({
  command: "delete",
  describe: "delete notes",
  builder: {
    title: {
      describe: "This is title description",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    notes.removeNotes(argv.title);
  },
});

yargs.command({
  command: "list",
  describe: "list notes",
  handler: (argv) => {
    notes.listNotes();
  },
});

console.log(yargs.argv);
