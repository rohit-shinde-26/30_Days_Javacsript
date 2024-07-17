// Task 6 : Write arrow functions to check if string contains a specific characters and return boolean value.


const containsCharacter = (str, char) => str.includes(char);
console.log(containsCharacter("hello", "e")); 
console.log(containsCharacter("world", "a")); 



const data = (str, char) => str.indexOf(char) !== -1;
console.log(data("hello", "l")); // true
console.log(data("world", "x")); // false


const containsCharacterRegex = (str, char) => new RegExp(char, 'i').test(str);
console.log(containsCharacterRegex("Hello", "e")); // true
console.log(containsCharacterRegex("World", "a")); // false
