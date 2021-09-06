characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!"#$%&()*+,-./:;<=>?@[]^_`{|}~';
//characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//characters = 'abcdefghijklmnopqrstuvwxyz0123456789!"#$%&()*+,-./:;<=>?@[]^_`{|}~';
function selectLength() {
    stringLength = window.prompt('Choose the length of your password minimum of 8 characters.');
    if (isNaN(stringLength) || stringLength < 8 || stringLength > 128) {
        window.alert('Please choose a number 8 to 128');
        return selectLength();    
    }
}
selectLength();

function generateString(length) {
    password = '';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
console.log(generateString(stringLength));
window.alert(password)


