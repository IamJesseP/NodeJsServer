import http from "http"
import fetch from "node-fetch"

const server = http.createServer((req, res) => {
    const url = req.url
    let tableData = "<table border='1'><tr><th>ID</th><th>Name</th><th>Username</th><th>Email</th><th>Address</th><th>Phone Number</th></tr>"
    if (url === '/'){
        res.write("Home Page")
        res.end()
    }
    if (url === '/message'){
        res.write("Welcome to my message page")
        res.end()
    }
    if (url === '/list'){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                createData(data);
                res.write(tableData)
                res.end()
            })
    }

    function createData(data){
        data.forEach(element => {
            tableData+=`<tr><td>${element.id}</td><td>${element.name}</td><td>${element.username}</td><td>${element.email}</td><td>${element.address.street}</td><td>${element.phone}</td></tr>`
        })
        tableData += '</table>'
    }


}).listen(8090, console.log("Server listening on port 8090"))