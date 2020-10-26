///////////////////////////////////////////////////////////////////////
// PASSWORD GENERATOR
//
// * For this assignment, you will not be changing the HTML and CSS at all.
//
// * You will need a generatePassword function is called when the user
//   clicks the Generate Password button.
//
// * You can create other functions that are called from within
//   generatePassword
//
// * Gather user input with prompt's and confirm's

///////////////////////////////////////////////////////////////////////
// DO NOT TOUCH THIS CODE
//
// This code handles:
// * clicking the Generate Password
// * writing the password to the screen
//

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.innerHTML = password;
  console.log(password);

}

 function generatePassword() {

  var passwordLength = prompt("How long would you like your password?");
  var password = confirm("Would you like to have symbols in your password?");
  if ( password == true) {
   password === all - symbols
  } else {
    password === all 
  }
 

 


  var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lowercase = 'abcdefghijklmnopqrstuvwxyz';
  var numbers = '0123456789';
  var symbols = '!"#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~';
  var all = uppercase + lowercase + numbers + symbols;
  var password = '';
  console.log(all);
  
   for (var index = 0; index < parseInt(passwordLength); index++) {
       var character = Math.floor(Math.random() * all.length);
       password += all.substring(character, character + 1);
   }
   return password;

}




  

  
 
 
 








// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);

 



//////////////////////////////////////////////////////////////////////
