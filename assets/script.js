// Assignment code here
all = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!"#$%&()*+,-./:;<=>?@[]^_`{|}~';
nospecial = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
nocaps = 'abcdefghijklmnopqrstuvwxyz0123456789!"#$%&()*+,-./:;<=>?@[]^_`{|}~';
allcaps = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!"#$%&()*+,-./:;<=>?@[]^_`{|}~';
nonumber = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!"#$%&()*+,-./:;<=>?@[]^_`{|}~'

function generatePassword() {
    stringLength = window.prompt('Choose the length of your password minimum of 8 characters.');
    if (isNaN(stringLength) || stringLength < 8 || stringLength > 128) {
        window.alert('Please choose a number 8 to 128');
        return generatePassword();    
    }
    else {
    var password = '';
    specialchar = window.confirm('Do you want to include special characters?');
    lowercase = window.confirm('Do you want to include lowercase characters?');
    uppercase = window.confirm('Do you want to include uppercase characters');
    numbers = window.confirm('Do you want to include numbers?');
    for (var i = 0; i < stringLength; i++) {
        if (specialchar & lowercase & uppercase & numbers) {
            var charactersLength = all.length;
            password += all.charAt(Math.floor(Math.random() * charactersLength));
        }
        else if(!specialchar & lowercase & uppercase & numbers) {
            var charactersLength = nospecial.length;
            password += nospecial.charAt(Math.floor(Math.random() * charactersLength));
        }
        else if(specialchar & !lowercase & uppercase & numbers) {
            var charactersLength = allcaps.length;
            password += allcaps.charAt(Math.floor(Math.random() * charactersLength));
        }
        else if(specialchar & lowercase & !uppercase & numbers) {
            var charactersLength = nocaps.length;
            password += nocaps.charAt(Math.floor(Math.random() * charactersLength));
        }
        else if(specialchar & lowercase & uppercase & !numbers) {
            var charactersLength = nonumber.length;
            password += nonumber.charAt(Math.floor(Math.random() * charactersLength));
        }
    }
    return password
    };
};    

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() { 
  var passwordText = document.querySelector("#password"); 
  password = generatePassword();
  passwordText.value = password;
};
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
