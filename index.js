// function stringToArray(string){
//   return string.split(' ');
// }

// function invert(array) {
//   return array.map( x => x === 0 ? x : -x);;
// }

// function abbrevName(name){
//   return name.split(' ').map(i => i[0].toUpperCase()).join('.')
// }
 
// const makeUpperCase = str => str.toUpperCase();

// function greet(name){
//   return `Hello, ${name} how are you doing today?`;
// }

// 20 - dars_Homework

// function removeChar(str){
//   return str.slice(1, -1);
// };

//------------------------------------------------

// function descendingOrder(n){
//   return parseInt(String(n).split('').sort().reverse().join(''))
// }

//-------------------------------------------------

// function sumTwoSmallestNumbers(numbers) {
//   numbers = numbers.sort(function(a, b){return a - b; });
//   return numbers[0] + numbers[1];
// }

//--------------------------------------------------

// const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')

//--------------------------------------------------

// function getMiddle(s)
// {
//   return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
// }

//------------------------------------------------------------------------------------

// function findNeedle(haystack) {
//   return "found the needle at position " + haystack.indexOf("needle");
// }

//------------------------------------------------------------------------------------

// function fakeBin(x) {
//   return x.split('').map(n => n < 5 ? 0 : 1).join('');
// }

//------------------------------------------------------------------------------------

// const rps = (p1, p2) => {
//   if (p1 == 'scissors' && p2 == 'paper') {
//     return 'Player 1 won!'
//   }
//   if (p1 == 'paper' && p2 == 'rock') {
//     return 'Player 1 won!'
//   }
//   if (p1 == 'rock' && p2 == 'scissors') {
//     return 'Player 1 won!'
//   }
//     if (p1 == 'paper' && p2 == 'scissors') {
//     return 'Player 2 won!'
//   }
//   if (p1 == 'rock' && p2 == 'paper') {
//     return 'Player 2 won!'
//   }
//   if (p1 == 'scissors' && p2 == 'rock') {
//     return 'Player 2 won!'
//   }
  
//   return 'Draw!'
// }

//------------------------------------------------------------------------------------

// function updateLight(current) {
  
//   return current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green';

// }

//------------------------------------------------------------------------------------

// function doubleChar(str) {
//   return str.split("").map(function (c) {
//     return c + c;
//   }).join("");
// }