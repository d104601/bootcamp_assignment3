# JavaScript Challenge: Password Generator
Bootcamp assignment 3. Task: Modifying javascript to make the application works propery as criteria.

## Deployed application
https://d104601.github.io/bootcamp_assignment3/

## Acceptance criteria
* Present a series of prompts for password criteria as generate button is clicked.
* Prompt ask for length of password. Password length must be in 8-128.
* After the length of password, prompt ask for password criteria. At least one of following must be included in criteria: Uppercase, Lowercase, Number, or Special character.
* After that, password is generated that matches the selected criteria and is displayed in an alert or written to the page.

## Assignment process
In the given .js file. I created following functions for password generation.
```
generatePassword();
getPasswordLength();
getCharacterList();
```
"generatePassword()" function is to generate random password with length from "getPasswordLength" and criteria from "getCharacterList()".
In "getPasswordLength()" function, it present prompt to enter the number as length of password. If the number is between 8 and 128, returns that number. If not, it shows alert and then ask it again.
In "getCharacterList()" function, it present multiple confirms to set password criteria. If nothing is included in criteria, it shows alert and then ask it again. After criteria is set, the function returns it. Character list in criteria is generated in form of string.
