const validatePassword = require('./passwordvalidation'); //import the function
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const main = function(){
    rl.question("Enter a password to validate (or :q to quit):\n", (text) => {

        //checks input
        if (validatePassword(text) == false && text != ':q') {
            console.log("The password is invalid: " + text);    //if valid
        }
        else if (validatePassword(text) == true && text != ':q') {
            console.log("The password is valid: " + text);  //if invalid
        }
        if (text == ':q'){
            console.log('Goodbye!');    //if quit

            //I orginally used a return statement here but after exiting main()
            //the command line would not exit. I found this function online and I am
            //not sure if it's good practice or not but it worked for now at least. 
            process.exit();
        }

        //recursion call
        main();
    });
}

main();
