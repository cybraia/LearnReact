const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req,res,next) => {
  res.send({
    message: 'Hello World'
  });
});

app.post("/add", (req,res)=>{
  res.send("data is " + req.body)
  res.send('post')
})

app.listen(3000, err=> {
  if(err){
    console.log("Error is ", err)
    return;
  }
  console.log("listening on port 3000");
})

