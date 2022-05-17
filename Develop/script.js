// Assignment Code
var generateBtn = document.querySelector("#generate");

var isLower = 'abcdefghijklmnopqrstuvwxyz';
var isUpper = isLower.toUpperCase();
var isNumber = '1234567890';
var isSpecial = '!@#$%^&*()-=+{}[];:<>?/.'

var pwdLen;
var lower;
var upper;
var number;
var special;


// Write password to the #password input
function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  // console.log(password)
}

function generatePassword() {
  pwdLen = prompt("Password character length needs to be between 8 and 128");

  if (!pwdLen) {
    alert("Password length is required");
  } else if ((pwdLen < 8 || pwdLen > 128)) {
    alert('Invalid entry: number must be between 8 and 128');
    generatePassword();
  } else {
    lower = confirm("Use lower case letters?");
    upper = confirm("Use upper case letters?");
    number = confirm("Use numbers?");
    special = confirm("Use special characters?");
  }

  if (!lower && !upper && !number && !special) {
    alert("Must choose at least 1 option");
    generatePassword();
  }

  var useChar = []

  //This can probably be for looped i think??
  if (lower) {
    useChar = useChar.concat(isLower.split(""))
  }
  if (upper) {
    useChar = useChar.concat(isUpper.split(""))
  }
  if (number) {
    useChar = useChar.concat(isNumber.split(""))
  }
  if (special) {
    useChar = useChar.concat(isSpecial.split(""))
  }

  var password = '';
  
  for (var i = 0; i < pwdLen; i++) {
    password = password + useChar[Math.floor(Math.random() * useChar.length)];
    // console.log(password)
  }
  return password;
  
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
