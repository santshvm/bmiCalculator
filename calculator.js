//jshint esversion:6

const express = require("express");
const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(request, response) {
  response.sendFile(__dirname + "/index.html");
});

app.post("/", function(request, response) {
  var num1 = Number(request.body.num1);
  var num2 = Number(request.body.num2);
  var result = num1 + num2;
  response.send("The result of addition of two numbers that you entered is: " + result);
});

app.listen(3000, function(){
  console.log("starting server at port 3000");
});

app.get("/bmiCalculator", function(request, response) {
  response.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", function(request, response) {
  var weight = parseFloat(request.body.weight);
  var height = parseFloat(request.body.height);
  var bmi = weight / (height * height);
  response.send("bmi for the entered weight and height is: " + bmi);
});
