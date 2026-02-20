//1. From a list of integers, keep only the even numbers. 
let numbers1 = [1, 2, 3, 4, 5, 6];

let evens = numbers1.filter(n => n % 2 === 0);

console.log(evens);

//2. From a list of numbers, keep only those greater than 50. 
let numbers2 = [10, 55, 70, 30, 90];

let greaterThan50 = numbers2.filter(n => n > 50);

console.log(greaterThan50);


//3. From a list of strings, keep only the strings longer than 5 characters. 
let strings = ["apple", "banana", "mango", "watermelon"];

let longStrings = strings.filter(str => str.length > 5);

console.log(longStrings);

//4. From a list of names, keep only the names that start with a vowel. 
let names = ["Aman", "Sneha", "Isha", "Rahul", "Om"];

let vowelNames = names.filter(name =>
  ["a","e","i","o","u"].includes(name[0].toLowerCase())
);

console.log(vowelNames);

//5. From a list of numbers, keep only the positive numbers. 
let numbers3 = [-5, 10, -2, 8, 0];

let positiveNumbers = numbers3.filter(n => n > 0);

console.log(positiveNumbers);

//6. From a list of email addresses, keep only the valid ones (contain @). 
let emails = ["test@gmail.com", "hello.com", "user@yahoo.com"];

let validEmails = emails.filter(email => email.includes("@"));

console.log(validEmails);

//7. From a list of words, keep only the palindromes. 
let words = ["madam", "hello", "racecar", "world"];

let palindromes = words.filter(word =>
  word === word.split("").reverse().join("")
);

console.log(palindromes);


//8. From a list of students with marks, keep only those who passed. 
let numbers4 = [1, 2, 2, 3, 4, 4, 5];

let uniqueNumbers = numbers4.filter((num, index, arr) =>
  arr.indexOf(num) === index
);

console.log(uniqueNumbers);

//9. From a list of numbers, keep only the unique values (no duplicates). 
let numbers4 = [1, 2, 2, 3, 4, 4, 5];

let uniqueNumbers = numbers4.filter((num, index, arr) =>
  arr.indexOf(num) === index
);

console.log(uniqueNumbers);

//10. From a list of tasks, keep only the tasks that are marked as completed. Filter (Select Elements Based on Condition)
let tasks = [
  { title: "Study", completed: true },
  { title: "Clean room", completed: false },
  { title: "Practice JS", completed: true }
];

let completedTasks = tasks.filter(task => task.completed);

console.log(completedTasks);
