const server = http.createServer((req,res) => {
    res.write("server started using js")
    res.end()
})
server.listen(3000)