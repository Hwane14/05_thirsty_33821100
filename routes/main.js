// Create a new router
const express = require("express");
const router = express.Router();

//Define our data
var shopData = {shopName: "The Thirsty Student", 
                productCategories:["Beer", "Wine", "Soft Drinks", "Hot Drinks"], 
                shops: [{location: "Lewisham", manager: "Alice", address: "1 Lewisham Street"},
                        {location: "Forest Hill", manager: "Bob", address: "1 Forest Road"},
                        {location: "Coventry", manager: "Musa", address: "1 Downing Way"}
                ]};

// Handle the main routes
router.get("/", (req, res) => {
    res.render("index.ejs", shopData);
});

router.get("/about", (req, res) => {
    res.render("about.ejs", shopData);
});

router.get("/search", (req, res) => {
    res.render("search.ejs", shopData);
});

// Collect and display form data
router.get('/search_result', function (req, res) {
    // TODO: search in the database
    res.send("You searched for " + req.query.search_text + " in " + req.query.category);
});

// handle /register route and show register form
router.get("/register", (req, res) => {
    res.render("register.ejs", shopData);
});

// handle /registered route and extract contents of form 
// from the body of the request using post() method
router.post("/registered", (req, res) => {
    res.send(' Hello ' + req.body.first + ' ' + req.body.last +
             ' you are now registered! We will send an email to you at ' + req.body.email);
});

router.get("/survey", (req, res) => {
    res.render("survey.ejs", shopData);
});

router.post("/surveyed", (req, res) => {
    var occupation;
    if(req.body.isStudent === "yes"){
        occupation = "Student"
    }
    else{
        occupation = "Non-student"
    }
    // Render surveyResult.ejs page
    res.render("surveyResult.ejs", {...req.body, occupation});
});

// Export the router object so index.js can access it
module.exports = router;