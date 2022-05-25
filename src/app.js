const express = require("express");
const req = require("express/lib/request");
require("./db/conn");
const Student = require("./models/students");

const app = express();
const port = process.env.PORT || 6000 ;

app.use(express.json());


//create a new students

app.post("/students", (req,res) =>{
    console.log(req.body)
    const user = new Student(req.body)
    user.save().then(() =>{
        res.status(201).send(user);
    }).catch((err) =>{
        res.status(401).send(err);
    })
});

app.listen(port , () => {
    console.log(`listening to the port number ${port}`);
}); 


// You DO NOT NEED express.json() and express.urlencoded()
// for GET Requests or DELETE Requests .We only need it for
// post and put req
// express.json() is a method inbuild in express to recognise the incoming 
// Request object as a JSON Object .This method is call as a middleware 
// in your application using the code : app.use(express.json());
