// let js = 'amazing';
// if (js === 'amazing') aler('Javascript is Fun')
//console.log(40 + 8 +23 - 10);
//console.log("Vincent");
//console.log(23);
// let firstName = "Anjiri";
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);
// console.log(Math.PI);

/* Variable Name Convections */ 

// let vincent_anjiri = "VA";
// let $function = 27;
// let PI = 3.1415
// let person = "vincent";
// let myFirstJob = "Cyber Attendant";
// let myCurrentJob = "Career Break";
// let job1 = 'cyberattendant'
// let job2 = 'career break'
// console.log(myFirstJob);

/* ************* Data types ********** */

// 1. Numbers => floating point numbers .... a mathematical object used to count measure or label items
  //let age = 23;
// 2. Strings => sequence of characters
  //let firstName = 'Vincent'
// 3. Boolean => logical type that can only be true or false
  //let fullAge = true;
// 4. undefined not defined valiable
  //let children
// 5. Null => empty value
// 6 Symbol (ES2015) values that id unique and cannot be changed
// 7. BigInt (ES2020) Lager integers than the Number type can hold

// let javascriptIsFun = true;
// console.log(javascriptIsFun);
// console.log(typeof true);
// console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Vincent');
// javascriptIsFun = 'YES!'
// console.log(typeof javascriptIsFun);
// let year;
// console.log(year = new Date().getFullYear());
// console.log(typeof year);


/* Variable declaration */

// variables can be declared using three key words ie. var, let and const
// let age = 23;
// age += 1;
// console.log(age);
// const birthYear = 2000;
// console.log(birthYear);

/* Javascrict Operators */

// 1. Math operators
   //1a) subtraction
// let currentYear = 2024;
// let VincentBirthYear = 2000;
// let getUserYears = currentYear - VincentBirthYear;
// console.log(getUserYears);

  //1b) Addition
// console.log(VincentBirthYear + 1);
// const fName = "Vincent";
// const lName = "Anjiri";
// console.log(fName + ' ' + lName);

  //1c) Multiplication
// console.log(VincentBirthYear * 2);

  //1d) Division
// console.log(getUserYears / 2);

  //1e) exponentiation
// console.log(getUserYears ** 3);

// 2. Assignment operators
  // let fullName = "Vincent Anjiri";
  // let x = 10 + 2;
  // console.log(x);
  // x += 10;
  // console.log(x);
  // x -= 10;
  // console.log(x);
  // x *= 10;
  // console.log(x);
  // x **= 10;
  // console.log(x);
  // x /= 10;
  // console.log(x);

  // comparison operators
  // let vincentAge = 23;
  // let anjiriAge = 24;
  // console.log(vincentAge > anjiriAge); // greater than
  // console.log(anjiriAge < vincentAge);// less than
  // console.log(anjiriAge <= 18); //less than equal to
  // console.log(vincentAge >= 18);//greater than equal to
  // console.log(vincentAge == anjiriAge); // equal to

/* Operator  Precedence*/ 
// const now = new Date().getFullYear();
// const vincentAge = now - 2000;
// const anjiriAge = now - 1998;
// console.log(now - vincentAge > now - anjiriAge);

/*BMI Code Challenge*/ 

// const heightMark = 78;
// const massMark = 1.69;
// const heightJohn = 92;
// const massJohn = 1.95;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);

// console.log(BMIMark);
// console.log(BMIJohn);

// const markHigherBMI = BMIMark > BMIJohn;
// console.log(markHigherBMI);

/*Strings Literals*/

// const firstName = 'Vincent';
// const occupation = 'student';
// const birthYear = 2000;
// const currentYear = new Date().getFullYear();

// // const mySelf = "I'm" + ' ' + firstName + ", a " + (currentYear - birthYear )+ ' ' + 'years old ' + occupation + '!';
// // console.log(mySelf);

// const myData = `I'm ${firstName}, a ${currentYear - birthYear} years old ${occupation}!`;
// console.log(myData);

/*Control Structures*/ 

// const age = 17;
// if(age >= 18) {
//   console.log(`Vincent can start driving Classes 🚗`)
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Vincent is too young wait for another ${yearsLeft} years😔:`);
// }

// const birthYear = 2018;
// let centuary;
// if(birthYear < 2000){
//   centuary = 20;
//   console.log(`You were born in the 20th centuary`);
// } else {
//   centuary = 21;
//   console.log(`You were born in the 21st centuary`);
// }

/*Challenge to control structures using if else statements*/ 
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// /* Write your code below. Good luck! 🙂 */

// if(BMIMark > BMIJohn) {
//     console.log("Mark's BMI is higher than John's!")
// } else {
//     console.log("John's BMI is higher than Mark's!")
// }

// if(BMIMark > BMIJohn) {
//     console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}!`)
// } else {
//     console.log(`John's BMI ${BMIJohn} is higher than Mark's ${BMIMark}!`)
// }

/*Type Convertion*/ 
    // const inputYear = '2000';
    // console.log(Number(inputYear) + 18);

    // console.log(Number('Vincent'));
    // console.log(typeof NaN);

    // console.log(String(23), 23);

/* Type Coercion */
  // console.log('I am ' + 23 + ' years old');
  // console.log('23' - '10' - 3);
  // console.log('23' / '2');

  // let n = '1' + 1;
  // n = n - 1;
  // console.log(n)

/*Falsy and truth values*/

// 5falsy value => 0, "", undefined, null, NaN
  //   console.log(Boolean(0));
  //   console.log(Boolean(undefined));
  //   console.log(Boolean('jonas'));
  //   console.log(Boolean({}));
  //   console.log(Boolean(""));

  //   const accountBalance = 100;
  //   if (accountBalance) {
  //     console.log("Don't spend it all :)")
  //   } else {
  //     console.log('You should get a job')
  //   }

  //   let height = 29;
  //   if(height){
  //     console.log("YAY! Height is defined");
  //   } else {
  //     console.log("Height is UNDEFINED");
  // }

  /*Equality Operators*/

    //const age = 18;
  //strict equality operator
      //if(age === 18) console.log("strict equal");
  // loose equalityn operator
      //if(age == '18') console.log("loosly equal");

      // const favoriteNumber = Number(prompt("What's your favorite number?"));
      // console.log(favoriteNumber);
      // console.log(typeof(favoriteNumber));

      // if (favoriteNumber === 24) {
      //   console.log('Cool! 24 is an amazing number!');
      // } else if (favoriteNumber === 7) {
      //   console.log('7 is also a cool number');
      // } else if (favoriteNumber === 9) {
      //   console.log('9 is also a cool number');
      // } else {
      //   console.log('Number entered is not among the coolest numbers on earth');
      // }

      // if(favoriteNumber !== 23) {
      //   console.log("Why not the 23😯")
      // }

/*Boolean Logic*/
// const hasDriversLicense = true;
// const hasGoodVision = true;

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);


// if(hasDriversLicense && hasGoodVision) {
//   console.log("Vincent is able to drive")
// } else {
//   console.log("He doesn't meet the qualities of a good driver..")
// }

// const isTired = true;
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if(hasDriversLicense && hasGoodVision && !isTired) {
//   console.log("Vincent is able to drive")
// } else {
//   console.log("He can't at the moment... give the car to someone else")
// }

// let scoreDolphins = Number(prompt('Enter first team scores'));
// let scoreKoalas = Number(prompt('Enter Second team scores'));

// if((scoreDolphins === 96 || scoreDolphins === 108 || scoreDolphins === 89) && (scoreKoalas === 88 || scoreKoalas === 91 || scoreKoalas === 110)){
//     console.log("Both win the trophy")

// } else if(scoreKoalas === 88 || scoreKoalas === 91 || scoreKoalas === 110) {
//     console.log("Koalas win the trophy")

// } else if (scoreDolphins === 96 || scoreDolphins === 108 || scoreDolphins === 89){
//     console.log("Dolphins win the trophy")

// } else {
//   console.log("There's no winner let's go for round two");
// }

// const day = prompt("Enter a day");

// switch(day.toLowerCase()) {
//   case 'monday':
//     console.log("It's Monday");
//     break;
//   case 'tuesday':
//     console.log("It's Tuesday");
//     break;
//   case 'wednesday':
//     console.log("It's Wednesday");
//     break;
//   case 'thursday':
//     console.log("It's Thursday");
//     break;
//   case 'friday':
//     console.log("It's Friday");
//     break;
//   case 'saturday':
//     console.log("It's Saturday");
//     break;
//   case 'sunday':
//     console.log("It's Sunday");
//     break;
//   default:
//     console.log("Enter a valid weekday");
//     break;
// }


// if (day === 'monday'){
//   console.log("It's Monday");
// } else if (day === 'tuesday'){
//    console.log("It's Tuesday");
// } else if(day === 'wednesday'){
//   console.log("It's Wednesday");
// } else if(day === 'thursday'){
//   console.log("It's Thursday");
// } else if(day === 'friday'){
//   console.log("It's Friday");
// } else if(day === 'suturday'){
//   console.log("It's Saturday");
// }else if(day === 'sunday'){
//   console.log("It's Sunday");
// } else {
//   console.log("Enter a valid weekday");
// }

/*The ternary operator*/
// let currentYear = new Date().getFullYear()
// const age = currentYear - 2000;
// age >= 18 ? console.log("I like to drink win🍷") : console.log('I like to drink water 💧');

// let drink2;
// if(age >= 18){
//   drink2 = "win🍷"
// } else {
//   drink2 = "water 💧"
// }

// console.log(drink2)
// console.log(`I would like to drink ${drink2}`)
const bill = 270;

/* Write your code below. Good luck! 🙂 */

let tip;
// if(bill >= 50 && bill <= 300){
//     tip = bill / 15
//     console.log(`The bill was ${bill}, the tip was ${tip}, and the total value was ${bill + tip}`)
// } else {
//     tip = bill / 20
//     console.log(`The bill was ${bill}, the tip was ${tip}, and the total value was ${bill + tip}`)

// }

tip = bill >= 50 && bill <= 300 ? (bill * 15 / 100) : (bill * 20 / 100)
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value was ${bill + tip}`)