/*const express = require('express')
const app = express()

//app.get('/ab',(req,res) => {
   // res.send("TESTING")
//})
app.use((req,res,next) => {
    //console.log("middleware function executes")
    if(10>1){
        console.log("middleware executing")
        next()
    }
    else{
        console.log("middleware executing in wrong way")
    }
}
)
app.get('/',(req,res) => {
    res.send("GET METHOD EXECUTING ")
})

app.get('/about',(req,res) => {
    res.send("ABOUT PAGE CONTENT ONLY")
    console.log("server in about page ")
})

app.get('/home',(req,res) => {
    res.send("HOME PAGE CONTENT ONLY")
})
app.listen(5000,() => {
    console.log("server is running")
}
)*/

const express = require('express')
const app = express()

//app.get('/ab',(req,res) => {
   // res.send("TESTING")
//})
const route=((req,res,next) => {
    //console.log("middleware function executes")
    if(10>1){
        console.log("middleware executing")
        next()
    }
    else{
        console.log("middleware executing in wrong way")
        
    }
}
)
app.get('/',route,(req,res) => {
    res.send("GET METHOD EXECUTING ")
})

app.get('/about',(req,res) => {
    res.send("ABOUT PAGE CONTENT ONLY")
    console.log("server in about page ")
})

app.listen(5000,() => {
    console.log("server is running")
})