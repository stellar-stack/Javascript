let name1 = "Shaziya";
document.getElementById("heading").textContent = `Hello ${name1}`;

// Arithmetic

let students = 30;

let student = students ** 2;
console.log(student);

// Accepting user input

/*--------------  Easy way ---------------- */

// let username;

// username = window.prompt("What is your name");

// console.log(username);

/*--------------  Easy way ---------------- */

/*--------------  Proffessional way ---------------- */

// using HTML textbox.

let username1;

document.getElementById("submit").onclick = function () {
  username1 = document.getElementById("myText").value;
  // console.log(username1);

  document.getElementById("heading").textContent = `Hello ${username1}!`;
};

/*--------------  Proffessional way ---------------- */

/*--------------  Conversion ---------------- */
// let age = window.prompt("How old are you?");

// age = Number(age);
// age += 1;
// console.log(age);

// console.log(typeof age);
/*--------------  Conversion ---------------- */

/*--------------  Constant ---------------- */

const PI = 3.14;

// let radius;
// let circum;

// radius = window.prompt(`Enter the radius`);

// radius = Number(radius);

// console.log(circum);
// document.getElementById("heading").textContent = `${circum}`;
/*--------------  Constant ---------------- */

/*--------------  Constant ---------------- */

let circum;

document.getElementById("submit").onclick = function () {
  let r = document.getElementById("radius").value;
  r = Number(r);

  circum = 2 * PI * r;

  document.getElementById(
    "heading"
  ).textContent = `The circumferece is = ${circum}cm.`;
};
