// const car = {
//   name: "BMW",
//   color: "Black",
// };

// console.log(car.name);

//convert object to json

// const carJson = JSON.stringify(car);
// console.log(carJson);
// console.log(carJson.name);

// //convert json to object

// const carObject = JSON.parse(carJson);
// console.log(carObject);

/***********************************************************/

const fs = require("fs");
// fs.writeFileSync("txt.json", car);

// fs.writeFileSync("txt.json", carJson);
// const dataBuffer = fs.readFileSync("txt.json").toString();
// console.log(dataBuffer);

/***********************************************************/
//Task
//Create Object Person --> name age
//Change Object to json --> json.stringfy
//Write file --> .json, data
//read
//convert json --> object
//modify object
//conver object --> json
//write

//Create Object Person --> name age

const person = {
  name: "Reham",
  age: 26,
  job: "Software developer",
};

//Change Object to json --> json.stringfy

const personJson = JSON.stringify(person);

//Write file --> .json, data

fs.writeFileSync("person.json", personJson);

//read

const personBuffer = fs.readFileSync("person.json").toString();
//convert json --> object

const personObject = JSON.parse(personBuffer);
//modify object

personObject.job = "Front End & Cross Platform Engineer";
//conver object --> json

const personJson2 = JSON.stringify(personObject);
//Write file --> .json, data

fs.writeFileSync("person.json", personJson2);
