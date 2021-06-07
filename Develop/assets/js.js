// Assignment code here
 let btn = document.getElementById('generate');
 


// insert id = newPassword. word isn't insert though
//var newPassword = document.getElementById('password');
let length;
let lower =['abcdefghijklmnopqrstuvwxyz'];
let upper =["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
let numbers =[1234567890];
let special =["${^~*:?(`"];
let charset= "";

btn.onclick = function(writePassword)
{ 
 charset= "";                                 //resets the character array to blank each time the button is pressed
// line 13 clears previous userChoices onClick
let userChoices= "";
  length = window.prompt("How many characters do you want in your password?");
  // if(length = isNumber()){
  //   window.alert("Please input a number! Like 1,2 3...etc");
  // }

  lowercase = window.confirm("Would you like to have lower case letters in your password?");
  uppercase = window.confirm("How about upper case letters?");
  numberscase = window.confirm("Do you want numbers in your password?");
  specialcase = window.confirm("How about special characters?");
  // '=== true' is assumed if excluded in this case. intuitively looks for true in this instance
  if (lowercase === true) {
  charset = charset + lower;
} 
if (uppercase === true){
  charset = charset + upper;
}
if (numberscase === true){
  charset + charset+ numbers;
}
if (specialcase === true) {
  charset = charset + special;                      //all can be written as: charset += lower:
}
if (lowercase===false && uppercase ===false && numberscase ===false && specialcase ===false){
window.alert("Make a choice buddy")
}

 for (var i = 0, n = charset.length; i < length; i++) {
  userChoices += charset.charAt(Math.floor(Math.random() * n));
    }

  // is this document.getElementbyId best practice? Or should I declare a variable like on line 4
  document.getElementById("password").innerHTML= userChoices;
  
    console.log(userChoices)

} 

// window.alert
// password array

// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);




































/*
// Assignment code here
const lowerCase = [`a`,`b`,`c`,`d`,`e`,`f`,`g`,`h`,`i`,`j`,`k`,`l`,`m`,`n`,`o`,`p`,`q`,`r`,`s`,`t`,`u`,`v`,`w`,`x`,`y`,`z`];
const upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const specialChar = ['!', '@', '#', '%', '^', '&', '*', '(', ')', '+', '?', '<', '>', '/', '"', '{', '}', '~', '-', '$'];
let userInput = [''];

var includedChar = function (){
window.confirm("would you like to include Upper case letters?")

if(window.confirm){
  var userInput = upperCase;
}

}

var generatePassword = function(){
  for(i = 0; i < userInput.length; i++);
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
*/