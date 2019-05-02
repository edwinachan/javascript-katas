/* Regex Password Validation

You need to write regex that will validate a password to make sure it meets the following criteria:

At least six characters long
contains a lowercase letter
contains an uppercase letter
contains a number
Valid passwords will only be alphanumeric characters.

Test.expect(validate('djI38D55'), 'djI38D55 - Expected true');
Test.expect(!validate('a2.d412'), 'a2.d412 - Expected false');
Test.expect(!validate('JHD5FJ53'), 'JHD5FJ53 - Expected false');
Test.expect(!validate('!fdjn345'), '!fdjn345 - Expected false');
Test.expect(!validate('jfkdfj3j'), 'jfkdfj3j - Expected false');
Test.expect(!validate('123'), '123 - Expected false');
Test.expect(!validate('abc'), 'abc - Expected false');
Test.expect(validate('Password123'), 'Password123 - Expected true');

*/


function validate(password) {

    var regex = /^[a-z0-9]+$/i
    //'^' means beginning of the string
    //'$' means end of string
    //[a-z0-9]+ means one or more of character from a to z OR 0 to 9

    var count = 0

    if (password.match(regex) != null) {
        //This will only return true if the character is alphanumeric
        count ++
    }
    
    //Below checks that we have at least one upper and lower case character
    var split = password.split('')
    var lowerCount = 0
    var upperCount = 0
    var numberCount = 0
    
    for (i = 0; i < split.length; i++) {
        if (split[i].toUpperCase() != split[i].toLowerCase() /*this will return true only if it's a letter*/){
            if (split[i] === split[i].toLowerCase() ) {
                lowerCount ++
            } else if (split[i] === split[i].toUpperCase() ) {
                upperCount ++
            }
        }   
        if ('0123456789'.includes(split[i])) {
            numberCount ++ //check if it includes at least 1 number
        }  
    }

    if (count == 1 && password.length >= 6 && lowerCount != 0 && upperCount != 0 && numberCount != 0) {
        return true
    } else {return false}

  }
