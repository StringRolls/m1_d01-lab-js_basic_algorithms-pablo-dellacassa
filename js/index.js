// Iteration 1: Names and Input

let hacker1 = "Carol";
console.log(`The driver's name is ${hacker1}`);
// expected output: "The driver's name is Eli"

let hacker2 = "Carlos";
console.log(`The navigator's name is ${hacker2}`);
// expected output: "The navigator's name is Javi"

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}
// expected output in this case: "It seems that the navigator has the longest name, it has 4 characters."


// Iteration 3: Loops
// Count the number of words (option 2, in one line):
// we convert the text into an array by identifying each blank space and then we get the array's length
console.log(`Second word count is ${trimmedLorem.split(" ").length}.`);

// Iteration 3.1 'Name' to 'N A M E'
let upperCaseName = "";
for (let i = 0; i < hacker1.length; i++) {
  upperCaseName += hacker1[i].toUpperCase() + " ";
}
console.log(upperCaseName.trim());

// Iteration 3.2 'Name' to 'emaN'
let reverseName = "";
for (let k = hacker1.length - 1; k >= 0; k--) {
  reverseName += hacker1[k];
}
console.log(reverseName);

// Iteration 3.3 Lexicographic order
if (hacker1 > hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker1 < hacker2) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// Bonus 1: Palindromes

let text = "Amor Roma";
let backwardsText = "";

for (let h = text.length - 1; h >= 0; h--) {
  backwardsText += text[h];
}

if (text.toLowerCase() === backwardsText.toLowerCase()) {
  console.log(`${text} is a Palindrome`);
} else {
  console.log(`${text} is not a Palindrome`);
}

// Bonus 2: Lorem ipsum counter
const loremIpsum =
  "Convallis elit erat vestibulum urna diam potenti nostra sollicitudin. Nullam sed nibh. Velit proin id. Placerat magna arcu. Arcu nibh tempor. Posuere parturient aenean gravida erat et. Viverra ut vivamus. Fermentum neque placerat. Phasellus pellentesque gravida suscipit tempus mattis in pellentesque lectus. Nunc diam eu. Justo amet sed euismod pellentesque pellentesque. Erat tellus nonummy risus nibh vel. Sit aliquam sodales a turpis sit. Eu nec id vel dui fusce sit vestibulum duis cras id mauris. Id velit duis diam dignissim ac nec varius orci tortor taciti nisl leo sed ultrices. Sapien placerat id.";

// first we trim the extra blank spaces
let trimmedLorem = loremIpsum.trim();

// Count the number of words (option 1):
// we count the blank spaces in the text and add 1 more (for the last word)
let wordCount = 0;
for (character of trimmedLorem) {
  if (character === " ") wordCount += 1;
}
console.log(`Word count is ${wordCount + 1}.`);

