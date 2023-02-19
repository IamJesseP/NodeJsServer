// import your http module
const http = require("http")

//create server with http
const server = http.createServer((req, res)=> {
    console.log("server is created")
})

//initial port
const PORT = 4000;


//listen to the server
server.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`))