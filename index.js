import http from "http"
import fetch from "node-fetch"

const server = http.createServer((req, res) => {
    const url = req.url
    let tableData = "<table border='1'><tr><th>ID</th><th>Name</th><th>Username</th><th>Email</th><th>Address</th><th>Phone Number</th></tr>"
    if (url === '/'){
        res.write("<h1>Welcome to the home page!<h1><img src='https://dummyimage.com/600x400/000/fff'>")
        res.end()
    }
    else if (url === '/list'){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                createData(data);
                res.write(tableData)
                res.end()
            })
    }
    else {
        res.write("Error 404 Page Not Found")
    }
    function createData(data){
        data.forEach(element => {
            tableData+=`<tr><td>${element.id}</td><td>${element.name}</td><td>${element.username}</td><td>${element.email}</td><td>${element.address.street}</td><td>${element.phone}</td></tr>`
        })
        tableData += '</table>'
    }


}).listen(8090, console.log("Server listening on port 8090"))