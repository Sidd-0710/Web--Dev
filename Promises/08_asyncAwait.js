// Promises - Async/Await Example
// This code demonstrates how to use Promises with async/await syntax   
// to handle asynchronous operations in a more readable way.
// It simulates a delay using setTimeout and resolves the promise after the specified duration.
// The code logs messages to the console after specified delays using async/await syntax.
// The output will be:  
// After solve function
// Hi   
// Hello
// Hello there


function setTimeoutPromisified(duration) {
    return new Promise(function (resolve) {
        setTimeout(resolve, duration);
    });
}

// async-await
async function solve() {
    await setTimeoutPromisified(1000);
    console.log("Hi");

    await setTimeoutPromisified(3000);
    console.log("Hello");

    await setTimeoutPromisified(5000);
    console.log("Hello there");
}

solve();

console.log("After solve function");