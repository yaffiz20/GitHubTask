import express from 'express';
import  router  from "./router/UserRout.js";

// var MongoClient = require('mongodb').MongoClient;

// MongoClient.connect("mongodb://localhost:27017/test", function(err, db) {
//     if(err) { return console.dir(err); } //handling errors

//     var collection = db.collection('users'); //selecting the collection
    
// });


// MongoClient.connect("mongodb://localhost:27017/test", function(err, db) {

// //Async function
    
// });


const app = express();

app.use(express.json());
app.use('/router', router);

app.listen(8000, () => {
  console.log("port 8000");
});
