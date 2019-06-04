'use strict'

let today = new Date();
let formatDate = today.toDateString();

let dateElement = document.getElementById('date');
dateElement.innerHTML = formatDate;

console.log("Today\'s date : "+ formatDate);