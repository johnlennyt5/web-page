
let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'C:/Users/Toshiba/JohnlennyCodingFolder/web-page/images/kobe.jpg') {
    myImage.setAttribute ('src','C:/Users/Toshiba/JohnlennyCodingFolder/web-page/images/kobe2.jpg');
  } else {
    myImage.setAttribute ('src','C:/Users/Toshiba/JohnlennyCodingFolder/web-page/images/kobe.jpg');
  }
}

// Personalized welcome message code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Kobe is Number 1, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Kobe is Number 1, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

