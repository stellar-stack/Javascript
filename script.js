// let name1 = "Shaziya";
// document.getElementById("heading").textContent = `Hello ${name1}`;

// // Arithmetic

// let students = 30;

// let student = students ** 2;
// console.log(student);

// Accepting user input

/*--------------  Easy way ---------------- */

// let username;

// username = window.prompt("What is your name");

// console.log(username);

/*--------------  Easy way ---------------- */

/*--------------  Proffessional way ---------------- */

// using HTML textbox.

// let username1;

// document.getElementById("submit").onclick = function () {
//   username1 = document.getElementById("myText").value;
//   // console.log(username1);

//   document.getElementById("heading").textContent = `Hello ${username1}!`;
// };

/*--------------  Proffessional way ---------------- */

/*--------------  Conversion ---------------- */
// let age = window.prompt("How old are you?");

// age = Number(age);
// age += 1;
// console.log(age);

// console.log(typeof age);
/*--------------  Conversion ---------------- */

/*--------------  Constant ---------------- */

// const PI = 3.14;

// let radius;
// let circum;

// radius = window.prompt(`Enter the radius`);

// radius = Number(radius);

// console.log(circum);
// document.getElementById("heading").textContent = `${circum}`;
/*--------------  Constant ---------------- */

/*--------------  Little calculator ---------------- */

// let circum;

// document.getElementById("submit").onclick = function () {
//   let r = document.getElementById("radius").value;
//   r = Number(r);

//   circum = 2 * PI * r;

//   document.getElementById("heading").textContent = `The circumferece is = ${circum}cm.`;
// };

/*--------------  Little Calculator ---------------- */

/*--------------  Counter Program ---------------- */

// const increase = document.getElementById('increase');
// const decrease = document.getElementById('decrease');
// const reset = document.getElementById('reset');

// const label = document.getElementById('digit');

// let count = 0;

// increase.onclick = function() {
//     count ++;
//     label.textContent = count;
// }
// reset.onclick = function() {
//     count = 0;
//     label.textContent = count;
// }
// decrease.onclick = function() {
//     count --;
//     label.textContent = count;

//     if(decrease) {
//         label.textContent = `Moving Down ${count}`;
//     }
//     else {
//         label.textContent = `Moving Up ${count}`;
//     }
// }

/*--------------  Math Object ---------------- */

// let x = 3.21;
// let y = 2;
// let z;

// console.log(Math.random(z) * 10 + 1);

/*--------------  Math Object ---------------- */

/*--------------  Random number Generator ---------------- */

// const btn = document.getElementById("btn");

// const label = document.getElementById("label");
// const label1 = document.getElementById("label1");
// const label2 = document.getElementById("label2");

// let min = 1;
// let max = 6;

// let randomnumber;
// let randomnumber1;
// let randomnumber2;

// btn.onclick = function () {
//   randomnumber = Math.floor(Math.random() * max) + min;
//   randomnumber1 = Math.floor(Math.random() * max) + min;
//   randomnumber2 = Math.floor(Math.random() * max) + min;

//   label.textContent = randomnumber;
//   label1.textContent = randomnumber1;
//   label2.textContent = randomnumber2;
// };

/*--------------  .Checked ---------------- */

// const submitbtn = document.getElementById("submitbtn");
// const subscribe = document.getElementById("subscribe");
// const visa = document.getElementById("visa");
// const master = document.getElementById("master");
// const paypal = document.getElementById("paypal");

// submitbtn.onclick = function () {
//   if (subscribe.checked && visa.checked) {
//     console.log("You are Subscribed and you paypment is in process");
//   } else if (subscribe.checked) {
//     console.log("You are Subscribed");
//   }
// };

/*--------------  .Checked ---------------- */


/*--------------  .String Methods ---------------- */
// let username = "Stellar";

// console.log(username.includes(''));

/*--------------  .String Methods ---------------- */

/*--------------  .Method Chaining ---------------- */

// let username = window.prompt('Enter name !');

// username = username.trim().slice(0, 7).toUpperCase();

// console.log(username)

/*--------------  .Method Chaining ---------------- */

/*-------------- login system ---------------- */

//let loggedIn = false;
// let username;
// let psw;

// while(!loggedIn) {
//   username = window.prompt('Enter your username')
//   psw = window.prompt('Enter the password') ; 

//   if (username === "myusername" && psw === "mypaswd")
//   {
//     loggedIn = true;
//     console.log('You are in')
//   }else 
//   {
//     console.log('wrong');
//   }
// }

/*-------------- login system ---------------- */

/*--------------  For Loop ---------------- */

// for(let i = 10 ; i > 0; i--) {
//     console.log( i);
// }
// console.log("Happy new year!")
/*--------------  For Loop ---------------- */

/*-------------- Guessing game -----------------*/
// const minimum = 1;
// const maximum = 100;

// const answer = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// let attempts = 0;
// let guess;
// let running = true;

// while (running) {
//   guess = window.prompt("Guess a number");
//   guess = Number(guess); //Type conversion

//   if (isNaN(guess)) {
//     window.alert("please enter a valid number");
//   } 
//   else if (guess < minimum || guess > maximum) {
//     window.alert("please enter a valid number");
//   } else {
//     attempts++;
//     if (guess < answer) {
//       window.alert("Too long! try agian!");
//     } else if (guess > answer) {
//       window.alert("Too High! Try agian!");
//     } else {
//       window.alert("Congratulations");

//       running = false;
//     }
//   }
// }
/*-------------- Guessing Game End-----------------*/


/*--------------  Function ---------------- */

// function add (x, y) {
//     return x + y;
// }

// console.log(add(2, 3));

/*--------------  Temperatue Conversion ---------------- */

// const textBox = document.getElementById("textBox");
// const toFahrenheit = document.getElementById("toFahrenheit");
// const toCelsius = document.getElementById("toCelsius");
// const result = document.getElementById("result");

// let temp;

// function convert() {
//   if (toFahrenheit.checked) {
//     temp = Number(textBox.value);
//     temp = (temp * 9) / 5 + 32;
//     result.textContent = temp.toFixed(1) + "F";
//   } else if (toCelsius.checked) {
//     temp = Number(textBox.value);
//     temp = (temp - 32) * 5 / 9;
//     result.textContent = temp.toFixed(1) + "C";

//   } else {
//     result.textContent = "Select a unit";
//   }
// }

/*--------------  Temperatue Conversion ---------------- */


/*--------------  Spread Array ---------------- */

// let number = [1, 2, 3, 4, 5];
// let max = Math.max(...number);
// console.log(max);

// let username = "Stellar";

// let letters = [...username].join("-").toUpperCase();
// console.log(letters);
/*--------------  Spread Array ---------------- */

/*--------------  Random password Generate ---------------- */

// const psw = 12;
// const includelower = true;
// const includeUpper = true;
// const includeNumber = true;
// const includeSymbol = true;

// function generatePassword(length,includelower,includeUpper,includeNumber,includeSymbol) {
    
//   const lowerCase = "abcdefghijklmnopqrstuvwxyz";
//   const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   const number = "1234567890";
//   const symbolsChar = "@-/£%^&*()-=!";
//   let allowedChar = "";
//   let pasw = "";

//   allowedChar += includelower ? lowerCase : "";
//   allowedChar += includeUpper ? upperCase : "";
//   allowedChar += includeNumber ? number : "";
//   allowedChar += includeSymbol ? symbolsChar : "";

//   if(length <= 0) {
//     return 'password length must be atleast 1';
//   }

//   if(allowedChar.length === 0) {
//     return 'Atleast 1 set of charachter is necc.';
//   }

//   for(let i = 0; i < length; i++) {
//     const randomIndex = Math.floor(Math.random() * allowedChar.length);
//     pasw += allowedChar[randomIndex];
// }
// return pasw;    

// }

// let password = generatePassword(psw, includelower, includeUpper, includeNumber, includeSymbol)

// document.getElementById('label').textContent = `Generated Password: ${password}`


/*--------------  Random password Generate ---------------- */


/*--------------  Callbacks ---------------- */


// function hello(wait) {
//     console.log('Hello')
    
//     wait();
// }

// function wait(hello) {
//     console.log('WAIT');
// }


/*--------------  Callbacks ---------------- */


/*--------------  forEach ---------------- */

// let fruits = ['apple', 'orange', 'grapes', 'guava', 'avacado'];

// fruits.forEach(upperCase);
// fruits.forEach(display);

// function upperCase (element, array, index) {
//     array[index] = element.toUpperCase()
// }

// function display (element) {
//     console.log(element)
// }

/*--------------  forEach End ---------------- */
