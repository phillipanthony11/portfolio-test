const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"./public/index.html"))
})
app.get('/',(req,res)=>{
    fs.readFile("./db/db.json","utf-8",(err,data)=>{
        if(err){
            console.log(err);
            res.status(500).json({
                msg:"Sorry!",
                err:err
            })
        } else {
            const dataArr = JSON.parse(data);
            res.json(dataArr)
        }
    })
})
app.post('/',(req,res)=>{
    fs.readFile("./db/db.json","utf-8",(err,data)=>{
        if(err){
            console.log(err);
            res.status(500).json({
                msg:"Sorry!",
                err:err
            })
        } else {
            const dataArr = JSON.parse(data);
            dataArr.push(req.body);
            fs.writeFile("./db/db.json",JSON.stringify(dataArr,null,4),(err,data)=>{
                if(err){
                    console.log(err);
                    res.status(500).json({
                        msg:"oh no!",
                        err:err
                    })
                }
                else {
                    res.json({
                        msg:"successfully added!"
                    })
                }
            })
        }
    })
})


app.get('/notes',(req,res)=>{
    res.sendFile(path.join(__dirname,"./public/notes.html"))
})
app.post('/notes',(req,res)=>{
    res.send("this will create notes")
})

app.listen(PORT,() =>{
    console.log(`listening on port ${PORT}`)
})