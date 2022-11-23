const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const PORT = process.env.PORT || 3000;
var randomId = require('random-id')
var pattern = 'aA0'


app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"./public/index.html"))
})

app.get('/notes',(req,res)=>{
    res.sendFile(path.join(__dirname,"./public/notes.html"))
})

app.get('/api/notes',(req,res)=>{
  fs.readFile("./db/db.json","utf-8",(err,data)=>{
    if(err){
      console.log(err);
      res.status(500).json({
          msg:"NOOO!",
          err:err
      })
  } else {
      const dataArr = JSON.parse(data);
      res.json(dataArr)
  }
  })
})
app.post('/api/notes/',(req,res)=>{
  fs.readFile("./db/db.json","utf-8",(err,data)=>{
      if(err){
          console.log(err);
          res.status(500).json({
              msg:"Noooo!",
              err:err
          })
      } else {
          const dataArr = JSON.parse(data);
          req.body.id = randomId(5, pattern)
          dataArr.push(req.body);
          fs.writeFile("./db/db.json",JSON.stringify(dataArr,null,4),(err,data)=>{
              if(err){
                  console.log(err);
                  res.status(500).json({
                      msg:"Nooo!",
                      err:err
                  })
              }
              else {
                  res.json({
                      msg:"success!"
                  })
              }
          })
      }
  })
})
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);

module.exports = {randomId}