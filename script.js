var firstLastName = prompt("What is your first and last name? (ex: James Poe)");

var birthYear = prompt("What year were you born in? (ex: 1975)");

console.log(
  `Your name is ${firstLastName}. You were born in ${birthYear} and you are ${
    2023 - birthYear
  } years old.`
);
