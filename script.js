// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Function to prompt user for password options

var useroptions = {
  passLength: 0,
  useLowercase: false,
  useUppercase: false,
  useNumeric: false,
  useSpecial: false
}
var passOptions = []
var passChars = []
var passArray = []
var stringPass = ""

function getPasswordOptions() {
  useroptions.passLength = parseInt(prompt("Choose a password length that is at least 8 characters and at most 128 characters:"))
  if (isNaN(useroptions.passLength)) {
    alert("You must choose a number.")
  } else {
    if (useroptions.passLength < 8) {
      alert("You must choose a number that is between 8 and 128 characters long.")
    } else if (useroptions.passLength > 128) {
      alert("You must choose a number that is between 8 and 128 characters long.")
    } else {
      useroptions.useLowercase = confirm("Would you like your password to include lowercase characters?")
      useroptions.useUppercase = confirm("Would you like your password to include uppercase characters?")
      useroptions.useNumeric = confirm("Would you like your password to include numeric characters?")
      useroptions.useSpecial = confirm("Would you like your password to include special characters ($@%&*, etc)?")
    }
  }
  if (useroptions.useLowercase === false && useroptions.useUppercase === false && useroptions.useNumeric === false && useroptions.useSpecial === false) {
    alert("You must select at least one of the previous options (lowercase, uppercase, numeric or special characters).")
  }
}

// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random()*arr.length)]
}

// Function to generate password with user input
function generatePassword() {
  // call getpasswordoptions function
  getPasswordOptions()
  // check which arrays to draw from - what options did user select?
  var passOptions = Object.values(useroptions)
  // join arrays together
  for (let i = 0; i < passOptions.length; i++) {
    const choice = passOptions[i];
    if (choice === true && i === 1) {
      passChars.push(...lowerCasedCharacters);
    } else if (choice === true && i === 2) {
      passChars.push(...upperCasedCharacters);
    } else if (choice === true && i === 3) {
      passChars.push(...numericCharacters);
    } else if (choice === true && i === 4) {
      passChars.push(...specialCharacters);
    }
  }
  // call getrandom function for each character of passLength
  for (let i = 0; i < useroptions.passLength; i++) {
    const element = getRandom(passChars);
    passArray.push(element)
  }
  // return to variable password
  stringPass = passArray.join("")
  console.log(passArray)
  return(stringPass)
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
