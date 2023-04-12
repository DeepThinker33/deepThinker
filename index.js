// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
// let age = prompt('Укажите свой возраст', 0);
// if (!(age >= 14 && !age <= 90)){
//   alert('норм')
// } else {
//   alert('хуево');
// }
//  let age = prompt('Укажите свой возраст', 0);
// if (age < 14 || age > 90){
//   alert('норм')
// } else {
//   alert('хуево');
// }
// const userName = prompt('Кто там?', '')
// if (userName == 'Админ') {
//   const password = prompt('Пароль?');
//   if (password == 'Я главный') {
//     alert('Здравствуйте!');
//   } else if (password == '' || password == null) {
//     alert('Отменено');
//   } else {
//     alert('Неверный пароль')
//   }
// } else if (userName == '' || userName == null) {
//   alert('Отменено')
// } else {
//   alert('Я вас не знаю')
// } 
// const number = +prompt('Введите число между 0 и 3', '');

// if (number === 0) {
//   alert('Вы ввели число 0');
// }

// if (number === 1) {
//   alert('Вы ввели число 1');
// }

// if (number === 2 || number === 3) {
//   alert('Вы ввели число 2, а может и 3');
// }
// const number = +prompt('Введите число между 0 и 3', '');

// switch(number){
//   case 0:
//   alert('Вы ввели число 0');
//   break;

//   case 1:
//   alert('Вы ввели число 1');
//   break;

//   case 2:
//   case 3:
//   alert('Вы ввели число 2, а может и 3');
//   break;
// }
// 
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Родители разрешили?');
//   }
// }
// function min(a, b){
//   if (a > b){
//     return b;
//   } else {
//     return a
//   }
// }
// function pow(x, n){
//   return (x**n)
// }
// let x = prompt("x?", '');
// let n = prompt("n?", '');

// if (n < 1) {
//   alert(`Степень ${n} не поддерживается, используйте натуральное число`);
// } else {
//   alert( pow(x, n) );
// }
// let user = {};
// user.name = 'John';
// user.surname = 'Smith';
// user.name = 'Pete';
// delete user.name;
// function isEmpty(obj) {
//   for (let key in obj) {
//     return false;
//   }
//   return true;
// }
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }

// let sum = 0;
// for (let key in salaries) {
//   sum += salaries[key];
// }
// alert(sum)
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// function multiplyNumeric(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] == 'number') {
//       obj[key] *= 2;
//     }
//   }
// 
// const roman = {
//   I: 1,
//   V: 5,
//   X: 10,
//   L: 50,
//   C: 100,
//   D: 500,
//   M: 1000,
// };

// const s = 'MCMXCIV';
// let sum = 0;
// for (let i = 0; i < s.length; i++) {
//   if (['I', 'X', 'C'].includes(s[i]) && i + 1 <= s.length) {
//     switch (s[i]) {
//       case 'I':
//         if (['V', 'X'].includes(s[i + 1])) {
//           sum += roman[s[i + 1]] - roman[s[i]];
//         }
//         break;
//       case 'X':
//         if (['L', 'C'].includes(s[i + 1])) {
//           sum += roman[s[i + 1]] - roman[s[i]];
//         }
//         break;
//       case 'C':
//         if (['D', 'M'].includes(s[i + 1])) {
//           sum += roman[s[i + 1]] - roman[s[i]];
//         }
//         break;
//     }
//     i++;
//   } else {
//     sum += roman[s[i]];
//   }
// }

// console.log(sum, 'result:', 1994);
// const roman = {
//   I: 1,
//   V: 5,
//   X: 10,
//   L: 50,
//   C: 100,
//   D: 500,
//   M: 1000,
// };

// const s = 'MCMXCIV';
// let sum = 0;

// for (let i = 0; i < s.length; i++) {
//   if (roman[s[i]] < roman[s[i + 1]]) {
//     sum += roman[s[i + 1]] - roman[s[i]];
//     i++;
//   } else {
//     sum += roman[s[i]];
//   }
// }
// console.log(sum, 'result:', 1994);
// const readNumber = () => {
//   var print = prompt();

//   if (!print) {
//     return null;
//   }

//   if (!Number.isInteger(+print)) {
//     return  readNumber();
//   }

//   return +print;
// };

// console.log(readNumber());
// function random(min, max) {
//   return min + Math.random() * (max-min)
// }

// alert(random(1, 6)); 
// 