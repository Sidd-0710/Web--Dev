//a simple way to create a promise is 

const willCleanRoom = new Promise((resolve, reject) => {
    let isRoomClean =  false;

    if (isRoomClean) {
        resolve('Room is clean');
    } else {
        reject('Room is not clean');
    }
});

willCleanRoom
    .then((message) => {
        console.log( 'Success'  + "  " +   message);
    })
    .catch((message) => {
        console.log('Error' +  " "  +  message);
    });
