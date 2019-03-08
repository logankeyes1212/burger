
var express = require("express");

var router = express.Router();

// Import the model 
var burger = require("../models/burger.js");
// console.log(burger)
// Create all of the routes
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  burger.insertOne([ "burger_name"],[req.body.name], function(result) {
    // Send back the id
    // console.log(req)
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.updateOne(req.params.id, function(result) {
    if (result.changedRows == 0) {
     
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});


// console.log(router)
// 

module.exports = router;
