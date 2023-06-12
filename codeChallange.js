// Coding Challenge :

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*       Reverse String =>
The problem is to create a program that uses the setTimeout() function to reverse a given string after a delay
of 2 seconds. The program should use a variable “input” storing a string as input and then implement a delay of
2 seconds before reversing the string. The reversed string should then be printed as output.
*/

let str = "abcdefg";

setTimeout(() => {
  let reverseStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }
  console.log(reverseStr);
}, 2000);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*       Random Number Generator with Delay and Progress Indication =>
The goal of this program is to generate a random number after a delay of 3 seconds, and store the delay in a
variable so can be modified. The program displays a message every second indicating the time remaining
until the random number is generated and then outputs the generated number.
*/

let delayInSeconds = 3;
let countdown = delayInSeconds;

console.log(`Generating random number in ${countdown} seconds...`);

let countdownInterval = setInterval(() => {
  countdown--;
  console.log(`Time remaining: ${countdown} seconds...`);

  if (countdown === 1) {
    clearInterval(countdownInterval);
    let randomNumber = Math.random();
    console.log(`Random number generated: ${randomNumber}`);
  }
}, 3000);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*        Build a feature for Store's Inventory =>
Suppose a store has a list of items and their prices in US Dollars stored as an object. Create a JavaScript
program to convert the prices to Indian Rupees using an exchange rate of 1 USD to 80 INR. The program should
use the map higher-order function to create a new ob(ject with the converted prices in Rupees.
*/

const storePrice = [15, 20, 30, 45, 55];

let a = storePrice.map((element) => {
  let changeDollar = element * 80;
  return changeDollar;
});
console.log(a);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*         Filtering and Capitalizing: Books Published After 2010 with Author Names =>
Write a program that takes a list of books, including their authors and publication years as input. The program
should then filter out all books that were published before 2010 and create a new array with the remaining
books, but with their author names capitalized.
*/

const bookList = [
  { Name: "English", Author: "Sourabh", Year: 2002 },
  { Name: "Hindi", Author: "Shyam", Year: 2020 },
  { Name: "Javascript", Author: "Harry", Year: 2003 },
];

const filteredBooks = bookList
  .filter((book) => book.Year <= 2010)
  .map((book) => {
    return {
      Name: book.Name,
      author: book.Author.toUpperCase(),
      year: book.Year,
    };
  });
console.log(filteredBooks);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*          URL validation =>
Write a program using a regex that matches valid URLs. Valid URLs should start with either http:// or https://,
followed by one or more letters, digits, or special characters, followed by a dot, followed by one or more letters.
Print a message indicating if the input matches the conditions or not.
 */

const URLsecond = (url) => {
  const urlPattern = /^(https?|ftp):\/\/[^\s$.?#].[^\s]*$/;

  const result = url.match(urlPattern);

  if (result) {
    console.log("Congratulation URL is matched");
  } else {
    console.log("Try again this is not valid url");
  }
};
// TEST CASES
URLsecond("https://www.google.com/"); // Congratulation URL is matched
URLsecond("http://WWW.SOURAHSHARMA.COM"); //Congratulation URL is matched
URLsecond("MPPS.//WWW.KUCHBHI.COM/"); // Try again this is not valid url
URLsecond("https://www.sarkariexam.com/"); // Congratulation URL is matched

/*         LinkedIn Profile URL Validator=>
As a developer, you want to create a program that validates LinkedIn profile URLs to ensure that they are
formatted correctly and contain only valid characters. Valid LinkedIn profile URLs should start with https://
www.linkedin.com/in/ followed by a combination of one or more letters, digits, underscores, or hyphens, and
end with a letter or digit. The length of the profile ID should be between 5 and 30 characters.
The program should use a regular expression to match valid LinkedIn profile URLs, and should not match URLs
that do not follow this format or contain invalid characters. The program should provide clear output messages
indicating whether each input is a valid LinkedIn profile URL or not.
*/
const linkedin = (link) => {
  const linkdnUrlPattern =
    /^(?:https?:\/\/)?(?:www\.)?[a-zA-Z0-9_-]+\.[a-zA-Z]{2,}(?:\/[^\s]*)?$/;

  const resultMatch = link.match(linkdnUrlPattern);
  if (resultMatch) {
    console.log("yehhhh , this is valid linkdin URL");
  } else {
    console.log("Chalo bhai new URL do ye valid nhi hai");
  }
};
//Test cases
linkedin("https://www.linkedin.com/in/"); // yehhhh , this is valid linkdin URL
linkedin("http://www.pwskills.com/in/"); // yehhhh , this is valid linkdin URL
linkedin("www.google.com"); //yehhhh , this is valid linkdin URL
linkedin("www.linkedin.com/in/"); // yehhhh , this is valid linkdin URL
linkedin("https://www.linkedin.com/feed/"); // Yeah , this is valid linkdin URL
linkedin("https://www.linkedin.com/in/saurabh-sharma-491872256/"); // Yeah , this is valid linkdin URL
