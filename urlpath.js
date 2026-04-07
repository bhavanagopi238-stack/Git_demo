const express= require('express')
const app = express()

app.get('/',(req,res) =>{
    res.send("Main page")
    console.log("page")
})

//static
app.get('/home/:id',(req,res) =>{
    res.send("home page")
    console.log("home page")
})

//dynamic
app.get('/about/:id',(req,res) =>{
    res.send("about page")
    console.log("about page is running")
    console.log(req.params.id)
    console.log(req.query.name)
    console.log(req.query.roll)
   console.log(req.headers)
   console.log(req.method)
})

app.get('/new',(req,res) =>{
    //res.send("..page..")
    //res.json({"name":"bhavana"})
    //res.status(404).send("hello fsd")
    //res.redirect('/')
    //console.log("server")
    //res.sendFile(__dirname+'/index.html')
})

app.post('/home',(req,res) =>{
    res.send("****Home page****")
})

app.delete('/home',(req,res) =>{
    res.send(" ** delete **")
})


app.listen(3000,() =>{
    console.log("server is running")
})
