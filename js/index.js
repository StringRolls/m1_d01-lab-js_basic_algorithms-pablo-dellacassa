console.log("I'm ready!");

// Iteration 1: Names and Input
var hacker1 = 'Bob'
console.log(`The driver's name is ${hacker1}`)

var hacker2 = 'Luke'
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
  }
  else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
  }
  else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters`);
  }
  
// Iteration 3: Loops
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

let driversName = '';
for(let i=0; i < hacker1.length; i++) {
  driversName += hacker1[i].toUpperCase() + " ";
}
console.log(driversName.trim());

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

let navigatorsName = '';
for(let i = hacker2.length - 1; i >= 0; i--) {
  navigatorsName += hacker2[i];
}
console.log(navigatorsName);

/* 3.3 Depending on the lexicographic order of the strings, print:
- The driver's name goes first.
- Yo, the navigator goes first definitely.
- What?! You both have the same name? */

if (hacker1 > hacker2) {
  console.log("The driver's name goes first.")
}
else if (hacker1 < hacker2) {
  console.log("Yo, the navigator goes first definitely.")
}
else {
  console.log("What?! You both have the same name?")
} 

/* Bonus 1:
Go to lorem ipsum generator and:

Generate 3 paragraphs. Store the text in a variable type of string.
Make your program count the number of words in the string.
Make your program count the number of times the Latin word et appears.*/

const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae risus sem. Mauris eros elit, varius sit amet leo sit amet, suscipit iaculis nisl. Donec molestie risus non tempus ultricies. In malesuada suscipit ullamcorper. Vivamus mauris mi, tincidunt ut iaculis vel, commodo pharetra tortor. Praesent euismod lectus est. Vestibulum consectetur elit at dictum consequat. Sed vehicula nibh non mi lacinia ultrices. Phasellus non rutrum mi, nec dignissim elit.
Vestibulum accumsan pretium justo quis imperdiet. Suspendisse maximus rutrum mauris ut placerat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent sed lorem malesuada, aliquam tortor non, accumsan orci. Etiam nec suscipit nisl, ut elementum risus. Nunc in lacus quis justo dignissim varius. Vivamus scelerisque nisl sed libero tristique, dapibus fringilla quam egestas. In at lobortis libero. Nulla pharetra turpis quis placerat scelerisque. Fusce a finibus libero. Vestibulum rutrum dignissim ipsum, et rhoncus nisi ultricies vitae. Nulla facilisi. Nullam in elit ex. Pellentesque rutrum magna ut placerat accumsan. Nulla vulputate ullamcorper ante, nec lobortis elit vestibulum vel.
Sed porttitor rhoncus nunc eu lacinia. Integer ultrices ex nibh, vitae posuere diam gravida et. In at ante ante. Vivamus id leo lorem. Vestibulum sagittis porttitor urna, tristique feugiat nisl mollis eget. Vestibulum ac pellentesque mi. Quisque ut blandit lacus, et bibendum odio. Etiam vehicula urna id consectetur aliquam. Pellentesque fringilla porttitor vehicula. Donec dignissim enim vitae tortor egestas posuere. Cras tincidunt porta mauris, eu ornare ligula euismod ac. Phasellus egestas malesuada magna. Morbi pulvinar elementum nisi vel ultricies. Praesent hendrerit pretium tincidunt. Sed convallis lectus vitae feugiat finibus.`

let words = 0;
let etCount = 0;

// convertimos el párrafo en un array de palabras
let splittedParagraph = lorem.split(' ');

for (let i=0; i < splittedParagraph.length; i++) {
  if(splittedParagraph[i].includes('\n')) {
    words++
  } else if(splittedParagraph[i] === "et" || splittedParagraph[i] === "et.") {
    etCount++;
  }
  words++;
 }

console.log('words -->', words);
console.log('et count  -->', etCount);

/* Bonus 2:
Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

"A man, a plan, a canal, Panama!"
"Amor, Roma"
"race car"
"stack cats"
"step on no pets"
"taco cat"
"put it up"
"Was it a car or a cat I saw?" and "No 'x' in Nixon".*/

let phraseToCheck = "A man, a plan, a canal, Panama!";
phraseToCheck = phraseToCheck.replace(/[ ,!.]/g, "").toLowerCase();

let reversedString = phraseToCheck.split('').reverse().join('');

if (phraseToCheck === reversedString) {
  console.log('String is a palindrome');
}
else {
  console.log('Not a palindrome');
}