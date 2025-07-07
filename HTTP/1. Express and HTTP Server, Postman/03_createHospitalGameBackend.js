const express = require('express');
const app = express();


let user = [{
    name: "John Doe",
    kidneys: [{
        healthy: false,

    }]
}];

// query parameters the thing that comes after the question mark in the URL
// example: http://localhost:3000/?name=John&age=30

app.get("/", function (req, res) {
    //write the logic 

    const johnKidneys = user[0].kidneys;
    const numberofKidneys = johnKidneys.length;
    // let numberOfHealthyKidneys = 0;
    // for (let i = 0; i < johnKidneys; i++) {
    //     if (johnKidneys[i].healthy) {
    //         numberOfHealthyKidneys++;
    //     }
    // }

    // calculate the number of healthy kidneys using filter method and store it in numberOfHealthyKidneys variable
    const numberOfHealthyKidneys = johnKidneys.filter((kidney) => kidney.healthy).length;

    const numberOfUnhealthyKidneys = numberofKidneys - numberOfHealthyKidneys;
    res.send(`John has ${numberofKidneys} kidneys ,and ${numberOfHealthyKidneys} healthy kidneys,
        and ${numberOfUnhealthyKidneys} unhealthy kidneys.`);
})


app.use(express.json()); // to parse JSON bodies

app.post("/",function (req, res) {
    //write the logic to add a new kidney
   const isHealthy = req.body.isHealthy;
   user[0].kidneys.push({
       healthy: isHealthy 
   });
   res.json({
    msg: "Kidney added successfully",
})
});


app.put("/", function (req, res) {
    for (let i = 0; i < user[0].kidneys.length; i++) {
        user[0].kidneys[i].healthy= true;
    }
    res.json({});
    });


    // delete the unhealthy kidneys
app.delete("/", function (req, res) {
     if (isThereAtleastOneUnhealthyKidney()) {
        // create a new array to store the healthy kidneys
        const newKidneys = [];
    for (let i = 0; i < user[0].kidneys.length; i++) {
            // if the kidney is healthy, add it to the new array of kidneys
            if (user[0].kidneys[i].healthy) {
                newKidneys.push({
                    healthy: true,
                });
            }
        }
    user[0].kidneys = newKidneys;
    res.json({
            message: "Unhealthy Kidney Removed Successfully!",
        });
    } else {
        // send the response with status code 411 and a message that "You have no unhealthy kidney to remove"
        res.status(411).json({
            message: "You have no unhealthy kidney to remove",
        });
    }
});


// Helper function to check if there is atleast one unhealthy kidney
function isThereAtleastOneUnhealthyKidney() {
    // loop through the kidneys of the first user in the users array
    for (let i = 0; i < user[0].kidneys.length; i++) {
        // if the kidney is unhealthy, return true
        if (!user[0].kidneys[i].healthy) {
            return true;
        }
    }

    // if there is no unhealthy kidney, return false
    return false;
}

    

app.listen(3000);