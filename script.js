// Assignment code here
function generatePassword() {
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
  var length = Math.floor(Math.random() * 121);
  var password = "";
  for(let i = 0; i < length; i++)
  {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return password;
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
