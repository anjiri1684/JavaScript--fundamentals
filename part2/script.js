'use strict';

//let hasDriversLicense = false;
//const passTest = true;

//if(passTest)hasDriversLicense = true;
//if(hasDriversLicense)console.log("I can drive!!");

//const interface = 'Audio';
//const private = 534;

/* Functions */ 

// function logger(name) {
//   console.log(`My name is ${name}`);
//   console.log(`My name is ${name}`);
// }

// logger("Vincent");
// logger("Anjiri");


// function fruitProcessor(apples, oranges) {
//   //console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);


// function coffeMaker(sugar, water, coffee){
//   const myCoffee = `Please add ${sugar} table spoon sugar, ${water}ml hot water and ${coffee} brown tea bag`;

//   return myCoffee;
// }

// const myDrink = coffeMaker(2, 500, 1);
// console.log(myDrink)

    //function declaration
// function calcAge1(birthYeah) {
//   const age =  new Date().getFullYear() - birthYeah;
//   console.log(`You are ${age} years old`)
//   return age;
// }

// const age1 = calcAge1(2000);
// console.log(age1)


//     // Function Expression
// const calAge2 = function (birthYeah){
//   return new Date().getFullYear() - birthYeah
// }

// const age2 = calAge2(2001)
// console.log(age2);

    /* Arrow Functions */
// const calAge3 = birthYear => new Date().getFullYear() - 2008;

// const age3 = calAge3(2026);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = new Date().getFullYear() - birthYear;
//   const retirement = 65 - age;
//   //return retirement;
//   return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(2000, "Anjiri"));
// console.log(yearsUntilRetirement(2008, "Vincent"));


// function fruitCutter(fruit){
//   return fruit * 4
// }

// function fruitProcessor(apples, oranges) {
//   //console.log(apples, oranges);
//   const applePieces = fruitCutter(apples);
//   const orangePieces = fruitCutter(oranges);
//   const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces oranges`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

// const calAge = function(birthYeah){
//   return new Date().getFullYear() - birthYeah;
// }

// const yearsUntilRetirement = function(birthYear, firstName){
//   const age = calAge(birthYear)
//   const retirement = 65 - age;

//   if(retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`)
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired 🍾🤶`)
//     return -1;
//   }
  
//   //return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(2000, 'Vincent'));
// console.log(yearsUntilRetirement(1978, 'Anjiri'));

/* Write your code below. Good luck! 🙂 */
 
// const calcAverage = (score1, score2, score3) => {
//     const avgDolphins = (score1 + score2 + score3)/3;
//     console.log(avgDolphins)
//     const avgKoalas = (score1 + score2 + score3)/3;
//     console.log(avgKoalas)
    
// }

// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);

// function checkWinner(avgDolphins, avgKoalas){
//     if(avgDolphins > avgKoalas){
//         console.log(`Dolphins win with (${scoreDolphins}) vs ${scoreKoalas}`);
        
//     } else if (avgKoalas > avgDolphins){
//         console.log(`Koalas win with (${scoreKoalas}) vs ${scoreDolphins}`)
//     } else {
//          console.log("No team wins...")
//     }
    
// }

// checkWinner()

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// // Test 1
// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);

// const checkWinner = function(avgDolphins, avgKoalas) {
//   if(avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win with (${avgDolphins}) vs ${avgKoalas}`);
//   } else if ( avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win with (${scoreKoalas}) vs ${scoreDolphins}`)
//   } else {
//     console.log("No team wins...")
//   }
// }

// checkWinner(scoreDolphins, scoreKoalas)


/* Arrays */
// const friends = ['Michael', 'Stephen', 'Peter'];
// console.log(friends);

// //const years = new Array(1991, 1992, 1993);
// //console.log(years);
// // console.log(friends[0]);
// // console.log(years[0]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'kevin';

// const myData = ['vincent', 'anjiri', 23, 38836510, 'career break', friends];
// console.log(myData);

// const calAge = function(birthYeah) {
//   return new Date().getFullYear() - birthYeah;
// }

// const years = [1990, 1967, 2000, 2002, 2010, 2018];
// const age1 = calAge(years[0]);
// const age2 = calAge(years[1]);
// const age3 = calAge(years[2]);
// const age4 = calAge(years[3]);

/* Arrays Methods */ 
// const friends = ['Michael', 'Stephen', 'Peter'];

// // Add elements
// const newLength = friends.push("Vincent", "Anjiri", "Tabitha", "Muhonja", "Azore", "John");
// console.log(friends);
// console.log(newLength);

// friends.unshift('Judith');
// console.log(friends);

// // Remove Elements
// friends.pop(); // Removes Last element in an array
// const poppedElement = friends.pop()
// console.log(friends)
// console.log(poppedElement);

// friends.shift(); //Removes first element in an array
// console.log(friends);


// console.log(friends.indexOf('Anjiri')); //gives the index of an element in an array

// console.log(friends.includes('Vincent')); // checks for element existance 

// let username = prompt("Enter your friends name")
// if (friends.includes(username)) {
//   console.log(`You have a friend called ${username}`)
// } else {
//   console.log(`${username} is not in your friends list that you had provided`)
// }

/* Objects */

// const myData = {
//   firstName: 'Vincent',
//   lastName: "Anjiri",
//   age: new Date().getFullYear() - 2000,
//   job: "Career Break",
//   friends: ['Eunice', 'Sheila', 'Ouma', 'Kevin']
// }

// console.log(myData);
// console.log(myData.lastName);
// console.log(myData['firstname']);

// const intrestedIn = prompt("What do you want to know about Me choose between firstname, lastname, age,friends and job");
// console.log(myData[intrestedIn]);

// if(myData[intrestedIn]) {
//   console.log(myData[intrestedIn]);
// } else {
//   console.log('Wrong request choose between firstname, lastname, age,friends and job')
// }

// myData.location = "Kenya";
// myData['twitter'] = "@anjirivincent";
// console.log(myData);

// console.log(`${myData.firstName} has ${myData.friends.length} friends  and his best friend is called ${myData.friends[1]}`);

/*Object Methods*/ 
const myData = {
  firstName: 'Vincent',
  lastName: "Anjiri",
  birthYeah: 2000,
  job: "Career Break",
  friends: ['Eunice', 'Sheila', 'Ouma', 'Kevin'],
  hasDriversLicense: true,

  // calcAge: function(birthYeah){
  //   return 2037 - birthYeah
  // }

  calcAge: function(){
    return new Date().getFullYear() - this.birthYeah
  }
}

console.log(myData.calcAge());
console.log(myData.calcAge());