let name = 'Rick Love';
let password = ' abc123password789 ';

// Length Property
console.log(name.length);
// Convert to Uppercase
console.log(name.toUpperCase());
console.log(name.toLowerCase());

console.log(password.includes('password'));

// Trim
console.log(password.trim());

// Is Valid Password - length must be greater than 9 and not contain 'password'
function isValidPassword(pwd) {
  return pwd.length > 8 && !password.includes('password');
  //   !pwd.includes('password') && pwd.length < 8
  //     ? console.log(false)
  //     : console.log(true);
}
console.log(isValidPassword('1231passwor'));
