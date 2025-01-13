// it  is a npm package validator to check the email or phone nunber or many things
// it is a example to do operattions with external npm packages

const validator = require('validator')

const Email = 'Raj262@gmail.com';

const emailcheck = validator.isEmail(Email)
console.log(emailcheck)

const URL_to_validate = 'https://yutube.com';
const check_url = validator.isURL(URL_to_validate)
console.log(check_url)