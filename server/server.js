const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 8000;

const mongoose = require ("mongoose")
const {Schema} = mongoose;

const courseSchema = new Schema({
    // img:{type:String,require:true},
    name:{type:String,require:true},
    title:{type:String,require:true},
    // img2:{type:String,require:true},
    // title2:{type:String,require:true},

},
{timestamps:true}
)
const Course = mongoose.model('courses', courseSchema)
app.use(cors())
app.use(bodyParser.json())


app.post("/courses/", (req, res) => {
  console.log(req.body);
  let courses = new Course({

    name: req.body.name,
    title: req.body.title,
   
  });
  courses.save();
res.send({ message: "SUCCESS" });
})  

app.get('/courses', (req, res) => {
    Course.find({},(err,docs)=>{
        if(!err){
        res.send(docs)  
        }
    })
  })



mongoose.connect('mongodb+srv://firuzabayram:firuzabayram@cluster0.9yguri4.mongodb.net/?retryWrites=true&w=majority', ()=>{
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

});

