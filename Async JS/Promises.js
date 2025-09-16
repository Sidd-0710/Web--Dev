//a simple way to create a promise is 

// const willCleanRoom = new Promise((resolve, reject) => {
//     let isRoomClean =  false;

//     if (isRoomClean) {
//         resolve('Room is clean');
//     } else {
//         reject('Room is not clean');
//     }
// });

// willCleanRoom
//     .then((message) => {
//         console.log( 'Success'  + "  " +   message);
//     })
//     .catch((message) => {
//         console.log('Error' +  " "  +  message);
//     });




// Creating the Promises 

function fetchUserData() {
  // The new Promise() constructor immediately returns a promise object
  return new Promise((resolve, reject) => {
    console.log("Starting to fetch user data...");

    // Simulate a network delay of 2 seconds
    setTimeout(() => {
      const userData = { id: 1, name: 'Arjun Sharma' };
      const didFail = false; // Try changing this to true to see the rejection

      if (didFail) {
        // ❌ If something went wrong, reject the promise with an error
        reject(new Error("Failed to fetch user data from server."));
      } else {
        // ✅ If successful, resolve the promise with the data
        resolve(userData);
      }
    }, 2000); // 2000 milliseconds = 2 seconds
  });
}