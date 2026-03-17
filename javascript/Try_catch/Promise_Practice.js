let promise1 = new Promise((resolve) => {
    let num1 = Math.floor(Math.random() * 10);
    console.log("Number 1:", num1);
    resolve(num1);
});

let promise2 = new Promise((resolve) => {
    let num2 = Math.floor(Math.random() * 10);
    console.log("Number 2:", num2);
    resolve(num2);
});

Promise.all([promise1, promise2])
    .then((values) => {
        let sum = values[0] + values[1];
        console.log("Sum (3rd number):", sum);
    })
    .catch((error) => {
        console.log("Error:", error);
    });