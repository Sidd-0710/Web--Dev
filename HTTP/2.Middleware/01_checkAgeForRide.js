const e = require('express');
const express = require('express');

const app = express();


// function to return a boolean if the age of the user is greater than 14

// function isOldEnough(age){
//     if (age >= 14) {
//         return true;
//     }else {
//         return false;
//     }

// }


function isOldEnoughMiddleware(req, res, next){
    const age = req.query.age;
    if (age >= 14){
        next(); // call the next middleware or route handler
    }else{
       res.json({
        msg: "You are not old enough to ride this ride",
       
       })
    }
}


app.get("/ride1",isOldEnoughMiddleware,  function (req, res) {
    if(isOldEnough(req.query.age)){
        res.json({
        msg: "Welcome to the ride",
    })
    } else{
        res.status(411).json({
        msg: "You are not old enough to ride this ride",
        })
    }  
})


app.get("/ride2", isOldEnoughMiddleware,function (req, res) {
    if(isOldEnough(req.query.age)){
        res.json({
        msg: "Welcome to the ride 2",
    })
    } else{
        res.status(411).json({
        msg: "You are not old enough to ride this ride",
        })
    }  
})



app.listen(3000);