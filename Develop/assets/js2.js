
//arrays of characters////////////////////////////////////////////////////////////////////////////////////////////////////
let charLength;
let upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
let lowerCase = ["abcdefghijklmnopqrstuvwxyz"];
let numbers = ["0123456789"];
let specialChar = ["${}^~*:?()<>'`#@!&"];
let charset = "";
let btn = document.getElementById('generate');

////////////////////////////////WRITE PASSWORD FUNCTION///////////////////////////////////////////////////////////
//user inputs and selecting arrays//
btn.onclick = function(writePassword)
{

charset = "";    
let userSelection = "";

charLength = window.prompt(`How many characters would you like your 
new password to be?`);
if (charLength > 128 || charLength < 8){
    alert("Your password must be between 8 and 128 characters.");
    btn.onclick();
} else {
upper = window.confirm(`Would you like you password to contain 
upper case letters?`);
lower = window.confirm(`How about lower case letters?`);
num = window.confirm(`Would you like your new password 
to contain numbers?`);
special = window.confirm(`How about special characters?`);
}
//if statements//

if (upper){
    charset = charset + upperCase;
}
if (lower){
    charset = charset + lowerCase;
}
if (num){
    charset = charset + numbers;
}
if (special){
    charset = charset + specialChar;
}
if (!upper && !lower  && !num  && !special){
    window.alert('You must select at least one.')
}

//for loop charLength times ////////////////////////////////////////////////////////////////////////////////////////////////////

for (var i = 0; i < charLength; i++){
    userSelection += charset.charAt(Math.floor(Math.random() * charset.length));
}
document.getElementById("password").innerHTML= userSelection;
}

// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}