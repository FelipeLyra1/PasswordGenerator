var generateBtn = document.querySelector("#generate");
var lowerCha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var specialChars = "~` !@#$%^&*()_-+={[}]|:;'<,>.?/"; 
var space = [ ];
var numbers = [1,2,3,4,5,6,7,8,9,0];
var choices;

var toUpper = function(x) {
    return x.toUpperCase();
};

upperCha = lowerCha.map(toUpper);

// Write password to the #password input
function generatePassword() {
    var passwordLength = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));

    var confirmNumber;
    var confirmCharacters;
    var confirmUpper;
    var confirmLower;
    
    if (!passwordLength) {
        alert("This need a value");
    }

    else if (passwordLength<8 || passwordLength >128) {
        passwordLength = parseInt(prompt("you must choose between 8 and 128 characters"));
    }

    else {
        confirmNumber = confirm("Would you like it to contain numbers when it's generated?");
        confirmCharacters = confirm("Would you like it to contain special characters when it's generated?");
        confirmUpper = confirm("Would you like it to contain Uppercase letters when it's generated?");
        confirmLower = confirm("Would you like it to contain Lowercase letters when it's generated?");
    }

    if (!confirmCharacters && !confirmNumber && !confirmUpper && !confirmLower) {
        choices = alert("You must choose a criteria!");
    }
    else if (confirmCharacters && confirmNumber && confirmUpper && confirmLower) {
        choices = specialChars.concat(numbers, lowerCha, upperCha);
    }
    else if (confirmCharacters && confirmNumber && confirmUpper) {
        choices = specialChars.concat(numbers, upperCha);
    }
    else if (confirmCharacters && confirmNumber && confirmLower) {
        choices = specialChars.concat(numbers, lowerCha);
    }
    else if (confirmCharacters && confirmUpper && confirmLower) {
        choices = specialChars.concat(upperCha, lowerCha);
    }
    else if (confirmNumber && confirmUpper && confirmLower) {
        choices = numbers.concat(upperCha, lowerCha);
    }
    else if (confirmCharacters && confirmNumber) {
        choices = specialChars.contact(numbers);
    }
    else if (confirmCharacters && confirmUpper) {
        choices = specialChars.contact(confirmUpper);
    }
    else if (confirmCharacters && confirmLower) {
        choices = specialChars.contact(confirmLower);
    }
    else if (confirmCharacters) {
        choices = specialChars;
    }
    else if (confirmNumber) {
        choices = numbers;
    }
    else if (confirmUpper) {
        choices = upperCha;
    }
    else if (confirmLower) {
        choices = lowerCha
    };

    // create an empty array to hold your password char
    var passwordArray = [];

    for (var i = 0; i < passwordLength; i++) {
        // get a random char out of choices
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        // is assuming the password is an array
        passwordArray.push(pickChoices);
    }

    // console.log(passwordArray);

    // take an array and mush it into a string
    var ps = passwordArray.join("");
    // UserInput(ps);
    return ps;
}


function writePassword() {
    var password = generatePassword();
    // reaching into the html and grabbing the el w/ the id of password
    var passwordElement = document.querySelector("#password");


    // insert the password i gen into the value property
    passwordElement.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 
