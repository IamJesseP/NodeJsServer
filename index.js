import http from "http"
import fetch from "node-fetch"

const server = http.createServer((req, res) => {
    const url = req.url
    let tableData = "<table border='1'><tr><th>Name</th><th>Birth Year</th><th>Gender</th><th>Height(in cm)</th><th>Skin Color</th><th>Hair Color</th></tr>"
    if (url === '/'){
        res.write("<h1>Welcome to the home page!<h1><img src='https://dummyimage.com/600x400/000/fff'>")
        res.end()
    }
    else if (url === '/list'){
        fetch('https://swapi.dev/api/people')
            .then(res => res.json())
            .then(data => {
                createData(data.results);
                res.write(tableData)
                res.end()
            })
    }
    else {
        res.write("Error 404 Page Not Found")
        res.end()
    }
    function createData(data){
        data.forEach(element => {
            tableData+=`<tr><td>${element.name}</td><td>${element.birth_year}</td><td>${element.gender}</td><td>${element.height}</td><td>${element.skin_color}</td><td>${element.hair_color}</td></tr>`
        })
        tableData += '</table>'
    }


}).listen(8090, console.log("Server listening on port 8090"))