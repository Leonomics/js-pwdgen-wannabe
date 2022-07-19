let userName = prompt("What's your name?");
console.log("name: " + userName);
let userSurname = prompt("What's your surname?");
console.log("surname: " + userSurname);
let userFavouriteColor = prompt("What's your favourite color?");
console.log("color: " + userFavouriteColor);
const title = document.getElementById('password_title');

/*generate random number from 0 to 99*/
randomNumber = Math.floor(Math.random() * 100);

let password = userName + userSurname + userFavouriteColor + randomNumber;

title.innerHTML = password;

console.log(password);