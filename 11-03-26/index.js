const express = require("express");
const bodyParser=require("body-parser");

const app=express();

app.use(bodyParser.json());

const users=[
    {
        id:1,
        name:"Gayatri",
        email:"gayatri@gmail.com",
        password:"123456"
    },
    {
        id:2,
        name:"Snehal",
        email:"snehal@gmail.com",
        password:"123456"
    },
    {
        id:3,
        name:"Bhakti",
        email:"bhakti@gmail.com",
        password:"123456"
    },
    {
        id:4,
        name:"Chaitali",
        email:"chaitali@gmail.com",
        password:"123456"
    }
];

app.get("/",(req,res)=>{
    res.json(users).status(200);
});

app.post("/post",(req,res)=>{
    console.log(req.body);
    res.send("Data Recieved Successfully");
});

app.put("/put/:id",(req,res)=>{
    console.log(req.body);
    const {id} = req.params;
    console.log(id);
    const {name,email,password} = req.body;
    const user = users.find((user)=>user.id === parseInt(id));
    if(!user){
        return res.status(404).send("User not found");
    }
    user.name = name;
    user.email = email;
    user.password = password;
    res.send("Data Updated Successfully");
});

app.delete("/delete/:id",(req,res)=>{
    const {id} = req.params;
    const user = users.find((user)=>user.id === parseInt(id));
    if(!user){
        return res.status(404).send("User not found");
    }
    users.splice(users.indexOf(user),1);
    res.send("Data Deleted Successfully");
});


app.listen(3000,()=>{
    console.log("server is running on port 3000");
})