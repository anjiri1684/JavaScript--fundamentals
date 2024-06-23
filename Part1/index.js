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
