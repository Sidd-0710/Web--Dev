 ///
 
//  function sum(a, b) {
//      return a + b;
//  }

//  let result = sum("5", 18);
//     console.log("The sum is: " + result);

//

// function to calculate the sum of numbers from 1 to n
function sum(num) {
    
	let ans = 0;
	for (let i = 1; i <= num; i++) {
		ans = ans + i
	}
	return ans;
}

let ans = sum(10);
console.log(ans);