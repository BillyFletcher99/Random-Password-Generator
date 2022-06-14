// Prompt when page loads //
window.onload = alert("Hello! Welcome, click the generate password button to start!");

// Assignment code and event listener, activated after button is pushed. //
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input //
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Static variables //
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var Symbols = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var Numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var length = "";

// This will prompt asking for a length to the password //
function generatePassword() {
  var length = (prompt("How many variables would you like the password to contain?"));

  // This is looped, if user trys to pick under 8, or over 128 //
  while(length <= 8 || length >= 128) {
    alert("Password length must be between 8-128 variables Try again");
      var length = (prompt("How many variables would you like your password to contain?"));
      } 

    // once user confirms amount of variables, prompt will say back the amount // 
    alert(`Your password will have ${length} characters`);

    // Variables to determine the strength of the password //
    var confirmSymbols = confirm("Would you like your password to contain symbols?");
    var confirmNumbers = confirm("Would you like your password to contain numbers?");    
    var confirmLowerCase = confirm("Would you like your password to contain lower case letters?");
    var confirmUpperCase = confirm("Would you like your password to contain upper case letters?");

    // This is looped, if no fields are choose as a variable for password//
      while(confirmUpperCase === false && confirmLowerCase === false &&
        confirmSymbols === false && confirmNumbers === false) {
    alert("That simply won't do, please pick an applicable variable.");

    var confirmSymbols = confirm("Would you like your password to contain symbols?");
    var confirmNumbers = confirm("Would you like your password to contain numbers?");    
    var confirmLowerCase = confirm("Would you like your password to contain lower case letters?");
    var confirmUpperCase = confirm("Would you like your password to contain upper case letters?");   
    } 
      // Validates the variables, and tells generator to add to password //
      var VariableCharacters = []
      
    if (confirmSymbols) {
      VariableCharacters = VariableCharacters.concat(Symbols)
    }
    if (confirmNumbers) {
      VariableCharacters = VariableCharacters.concat(Numbers)
    }
    if (confirmLowerCase) {
      VariableCharacters = VariableCharacters.concat(lowercase)
    }
    if (confirmUpperCase) {
      VariableCharacters = VariableCharacters.concat(uppercase)
    }
      console.log(VariableCharacters)

      // Uses confirmed variables and generates a password as a result //
      var randomPassword = ""
      
      for (var i = 0; i < length; i++) {
        randomPassword = randomPassword + VariableCharacters[Math.floor(Math.random() * VariableCharacters.length)];
        console.log(randomPassword)
      }
      return randomPassword;
}