// Assignment code here
function generatePassword() {
  
  var length = getPasswordLength();
  var characters = getCharacterList();

  var password = "";

  for(let i = 0; i < length; i++)
  {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return password;
}

// function to get password length from prompt
function getPasswordLength() {
  var length;
  while(1)
  {
    length = window.prompt("Password length?");
    
    if(length >= 8 || length <= 128) {
      return length;
    }
    else {
      window.alert("Password length must be at least 8 and no more than 128.");
    }
  }
}

// function to get characterlist for password criteria
function getCharacterList() {
  var characters = "";
  
  while(1){
    var question = window.confirm("Include uppercase?")
    if(question){
      characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    var question = window.confirm("Include lowercase?")
    if(question){
      characters += "abcdefghijklmnopqrstuvwxyz";
    }
    var question = window.confirm("Include number?")
    if(question){
      characters += "1234567890";
    }
    var question = window.confirm("Include special character?")
    if(question){
      characters += "!@#$%^&*";
    }
    if(characters.length == 0) {
      window.alert("You should include at least one criteria");
    }
    else {
      return characters;
    }
  }
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
