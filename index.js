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

//--------------------------------------------------------------------------------------------

// function strCount(str, letter){
//   return str.split(letter).length-1
// } chatgpt

//--------------------------------------------------------------------------------------------------

// function testEven(n) {
//   return n % 2 === 0 ? true : false;
// }

//--------------------------------------------------------------------------------------------------

// function solution(a, b){
//   return (a.length > b.length) ? b + a + b : a + b + a;
// } chatgpt

//--------------------------------------------------------------------------------------------------

// function divisibleBy(numbers, divisor){
//   return numbers.filter(function(number){
//     return number % divisor === 0;
//   })
// } chatgpt

//--------------------------------------------------------------------------------------------------

// function nameSuffle(str){
//   return str.split(' ').reverse().join(' ')
// }

//-----------------------------------------------------------------------------------------------------------------------------

// var grader = sc =>{
//   if (sc < 1 && sc >= 0.9) return "A";
//   if (sc < 0.9 && sc >= 0.8) return "B";
//   if (sc < 0.8 && sc >= 0.7) return "C";
//   if (sc < 0.7 && sc >= 0.6) return "D";
//   if (sc > 1 || sc < 0.6) return "F";
//   return 'A';
//   }

//-----------------------------------------------------------------------------------------------------------------------------

// 1.

// function solution(str){
//   return str.split('').reverse().join('');
// }

// 2.

// function stringToArray(string){
//   return string.split(' ');
// }

// 3.

// function sumMix(x){
//   let result = 0;
//   for (let n of x) {
//     result += parseInt(n);
//   }
//   return result;
// }

// 4.

// function grow(x){
//   return x.reduce((accumulator, currentVal) => accumulator *= currentVal, 1);
// }

// 5.

// function switchItUp(n){
//   return ["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"][n]
// }

// 6.

// function sum(numbers) {
//   return numbers.reduce((a, b) => a + b, 0);
// }

// 7.

// function cockroachSpeed(s) {
//   return Math.floor(s * 100000 / 60 / 60);
// }

// 8.

// function countPositivesSumNegatives(input) {
//   return !input || !input.length ? [] : [
//     input.filter(n => n > 0).length,
//     input.filter(n => n < 0).reduce((a, b) => a + b)
//   ];
// }

// 9.

// function check(a, x) {
//   return a.includes(x)
//   }