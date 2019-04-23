// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Solution 1
function reverse(str) {
  for (let i = 0; i < str.length; i++) {
    return str
      .split("")
      .reverse()
      .join("");
  }
}

// Solution 2
// function reverse(str) {
//   let reversed = [];
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed.push(str[i]);
//   }
//   return reversed.join("");
// }

// Solution 3
// function reverse(str) {
//   let reversed = "";
//   for (let char of str) {
//     reversed = char + reversed;
//   }
//   return reversed;
// }

module.exports = reverse;
