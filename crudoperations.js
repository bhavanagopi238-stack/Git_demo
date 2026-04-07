const express = require('express')
const app=express()

let users = ["name:","bhavana"]

app.get('/users',(req,res) =>{
    res.send(users)
})

app.post('/users',(req,res) =>{
    users.push("hema")
    res.send("users added")
})

//app.put('/users',(req,res) =>{
  //  users[0]="haindhavi"
    //res.send("users updated")
//})

app.delete('/users',(req,res) =>{
    users.pop()  //filo rule follows
    res.send("users deleted")
})
app.listen(3000,() =>{
    console.log("server is running")
})