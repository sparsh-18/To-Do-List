const express = require('express');
const bodyparser = require('body-parser');
const app = express();
app.set('view engine', 'ejs');
app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static("public"));
var items=[];

app.get("/", function(req,res) {


  var date = new Date();
  var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };
  var day = date.toLocaleDateString("en-US",options);


  res.render("list", {d:day, l:items});
});

app.post("/", function(req,res){
  var item = req.body.item;
  if(item.length>0)
    items.push(item);
  res.redirect("/");
});


app.listen(3000, function() {
  console.log("server is running");
});
