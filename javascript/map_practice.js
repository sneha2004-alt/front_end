//1. Given a list of integers, produce a new list where each number is squared.
let numbers = [1, 2, 3, 4, 5];

let squaredNumbers = numbers.map(num => num * num);

console.log(squaredNumbers);

//(2)Given a list of names, return a list of their length
let names = ["Sneha", "Rahul", "Aman", "Priya"];

let nameLengths = names.map(name => name.length);

console.log(nameLengths);


 
//3. Convert a list of temperatures in Celsius to Fahrenheit.  
let celsius = [0, 10, 20, 30, 40];

let fahrenheit = celsius.map(temp => (temp * 9/5) + 32);

console.log(fahrenheit);
//4. Given a list of words, return a list where each word is capitalized.
let words = ["apple", "banana", "grape", "mango"];

let capitalized = words.map(function(word){
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
});

console.log(capitalized);

//5. Given a list of prices, return a list with a 10% discount applied to each price. 
let prices = [100, 250, 400, 800];

let discountedPrices = prices.map(function(price){
    return price - (price * 0.10);
});

console.log(discountedPrices);



//6. Given a list of sentences, return a list of the number of words in each sentence. 
let sentences = [
  "I love JavaScript",
  "Map is very useful",
  "Learning coding everyday"
];

let wordCounts = sentences.map(sentence => sentence.split(" ").length);

console.log(wordCounts);


//7. Given a list of numbers, return a list indicating whether each number is even or odd. 
let numbers1 = [1, 2, 3, 4, 5, 6];

let result = numbers1.map(num => num % 2 === 0 ? "Even" : "Odd");

console.log(result);

//8. Given a list of full names, return a list of initials (e.g., "John Doe" → "JD").
let names1 = ["John Doe", "Sneha Gupta"];

let initials = names1.map(function(name){
    let words = name.split(" ");
    let letters = words.map(function(word){
        return word[0];
    });
    return letters.join("").toUpperCase();
});

console.log(initials);

//9. Given a list of dates as strings, return a list of years extracted from each date. 
let dates = ["2022-05-10", "2019-12-25"];

let years = dates.map(function(date){
    let parts = date.split("-");
    return parts[0];
});

console.log(years);

//10. Given a list of numbers, return a list of their absolute values.
let numbers2 = [-10, 5, -3, 8, -1, 0];

let absoluteValues = numbers2.map(function(num){
    if (num < 0) {
        return -num;
    } else {
        return num;
    }
});

console.log(absoluteValues);
