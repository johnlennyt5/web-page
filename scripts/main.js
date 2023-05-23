// Selecting the image element and adding a click event listener to it
let myImage = document.querySelector('img');
myImage.onclick = function() {
// Getting the current source of the image
let mySrc = myImage.getAttribute('src');
// Checking if the source is the first image
if(mySrc === 'https://upload.wikimedia.org/wikipedia/commons/9/96/Kobe_Bryant_8.jpg') {
// If it is, changing the source to the second image
myImage.setAttribute ('src','https://upload.wikimedia.org/wikipedia/commons/e/e0/Lipofsky_Kobe.jpg');
} else {
// If it isn't, changing the source back to the first image
myImage.setAttribute ('src','https://upload.wikimedia.org/wikipedia/commons/9/96/Kobe_Bryant_8.jpg');
}
}

// Personalized welcome message code

// Selecting the button element and the h1 heading element
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

// Function for setting the user's name
function setUserName() {
// Prompting the user to enter their name
let myName = prompt('Please enter your name.');
if(!myName) {
// If the user didn't enter a name, calling the function again
setUserName();
} else {
// If the user entered a name, storing it in local storage and updating the heading with a personalized message
localStorage.setItem('name', myName);
myHeading.innerHTML = 'Kobe is Number 1, ' + myName;
}
}

// Checking if the user's name is already stored in local storage
if(!localStorage.getItem('name')) {
// If it isn't, calling the setUserName() function to prompt the user to enter their name
setUserName();
} else {
// If it is, retrieving the name from local storage and updating the heading with a personalized message
let storedName = localStorage.getItem('name');
myHeading.innerHTML = 'Kobe is Number 1, ' + storedName;
}

// Adding a click event listener to the button to allow the user to change their name
myButton.onclick = function() {
setUserName();
}