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

//   document.getElementById(
//     "heading"
//   ).textContent = `The circumferece is = ${circum}cm.`;
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


/*--------------  For Loop ---------------- */

for(let i = 1 ; i < 11; i++) {
    console.log('string ' + i);
}