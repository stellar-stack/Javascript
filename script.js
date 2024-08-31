let name1 = "Shaziya";
document.getElementById("heading").textContent = `Hello ${name1}`;

// Arithmetic

let students = 30;

let student = students ** 2;
console.log(student);

// Accepting user input

/*--------------  Easy way ---------------- */

let username;

username = window.prompt("What is your name");

console.log(username);

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
