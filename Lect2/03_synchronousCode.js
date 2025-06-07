// Synchronous code example
// This code calculates the sum of numbers from 1 to n synchronously

function sum(n){
    let ans = 0;
    
    for (let i = 1; i <= n; i++) {
        ans = ans + i;
    }
    
    return ans;
}

 const ans = sum(100);
    console.log(ans); // 5050
const ans2 = sum(1000);
    console.log(ans2); // 500500
const ans3 = sum(10000);    
    console.log(ans3); // 50005000
    