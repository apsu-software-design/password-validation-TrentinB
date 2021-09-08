const validatePassword = require('./passwordvalidation'); //import the function

function validatePassword(){
    console.log("Enter a password to validate (or :q to quit)")
    var text = input()


    if (validatePassword(text) == false && text != ':q') {
        console.log("The password is invalid: " + text);    // if valid
    }
    else if (validatePassword(text) == true && text != ':q') {
        console.log("The password is valid: " + text);  // if invalid
    }
    if (text == ':q'){
        console.log('Goodbye!');    //if quit
        return;
    }

    validatePassword();
}
