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

// 10.

// function howMuchILoveYou(nbPetals) {
//   switch ((nbPetals - 1) % 6) {
//       case 1:
//           return "a little";
//       case 2:
//           return "a lot";
//       case 3:
//           return "passionately";
//       case 4:
//           return "madly";
//       case 5:
//           return "not at all";
//       default:
//           return "I love you";
//   }
// }



//=========================================================================
//1
// function makeNegative(num) {
//   return num > 0 ? -num : num;
// }

//=========================================================================
//2
// function boolToWord(bool) {
//   return bool ? "Yes" : "No";
// }

//=========================================================================
//3
// function getAge(inputString) {
//   return parseInt(inputString[0]);
// }

//=========================================================================
//4
// // function sumArray(array) {
//   if (!array || array.length <= 2) return 0;

//   const max = Math.max(...array);
//   const min = Math.min(...array);

//   let sum = array.reduce((acc, val) => acc + val, 0);

//   return sum - max - min;
// }

//=========================================================================
//5
// function greet(name, owner) {
//   return name === owner ? 'Hello boss' : 'Hello guest';
// }

//=========================================================================

//6

// function enough(cap, on, wait) {
//   let spaceLeft = cap - on;
//   return spaceLeft >= wait ? 0 : wait - spaceLeft;
// }

//=========================================================================
//7
// function XO(str) {
//   str = str.toLowerCase();

//   let xCount = 0;
//   let oCount = 0;

//   for (let char of str) {
//     if (char === 'x') xCount++;
//     else if (char === 'o') oCount++;
//   }

//   return xCount === oCount;
// }

//=========================================================================
//8

// function getGrade(s1, s2, s3) {
//   const average = (s1 + s2 + s3) / 3;

//   if (average >= 90) return 'A';
//   else if (average >= 80) return 'B';
//   else if (average >= 70) return 'C';
//   else if (average >= 60) return 'D';
//   else return 'F';
// }

//=========================================================================
//9
// function between(a, b) {
//   let result = [];
//   for (let i = a; i <= b; i++) {
//     result.push(i);
//   }
//   return result;
// }

//=========================================================================
//10
// function isPalindrome(x) {

//   const lower = x.toLowerCase();

//   const reversed = lower.split('').reverse().join('');

//   return lower === reversed;
// }

//=========================================================================
//11
// function betterThanAverage(classPoints, yourPoints) {
//   let sum = 0;

//   for (let i = 0; i < classPoints.length; i++) {
//     sum += classPoints[i];
//   }

//   let average = sum / classPoints.length;
//   return yourPoints > average;
// }

//=========================================================================
//12
// const binaryArrayToNumber = arr => {
//   return parseInt(arr.join(''), 2);
// };

//=========================================================================
//13

// function century(year) {
//   return Math.ceil(year / 100);
// }
//=========================================================================
//14

// function twiceAsOld(dadYearsOld, sonYearsOld) {
//   let diff = dadYearsOld - 2 * sonYearsOld;
//   if (diff < 0) {
//     return -diff;
//   } else {
//     return diff;
//   }
// }
//=========================================================================
//15

// function simpleMultiplication(number) {
//   if (number % 2 === 0) {
//     return number * 8;
//   } else {
//     return number * 9;
//   }
// }