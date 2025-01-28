// const http=require("http")
// const modules =require('./modules')

// const server = http.createServer((req,res) => {
//     res.writeHead(200,{"Content-Type":"text/html"});
//     res.write(`Addition:${modules.add(10,23)}`);
//     res.write(`Subtraction:${modules.sub(10,23)}`);
//     res.end();
// });

// server.listen(3000,()=>{
//     console.log("server is running on http://localhost:3000/")
// })
// // const modules=require("./modules");
// // console.log(modules.add(10,12));

// //repl--> read ,eveolve ,print, loop

// const http=require("http")
// const modules =require('./modules')

// const server = http.createServer((req,res) => {
//     res.writeHead(200,{"Content-Type":"text/html"});
//     res.write(Addition:${modules.add(10,23)});
//     res.write(Subration:${modules. sub( 10,23)});
//     res.write(multipilication:${modules.mul(10,23)});
//     res.end();
// });
// server.listen(3000,()=>{
//     console.log("server is running http://localhost:3000/")
// })

// console.log(modules.add(10,20));
// console.log(modules.sub(10,20));
// console.log(modules.mul(10,20));
// console.log(modules.div(10,20));


const http = require("http");  
const fs = require("fs");    

const server = http.createServer((req, res) => { 
    res.writeHead(200, { "Content-Type": "application/json" });

   
    fs.readFile("sample.json", (err, data) => {
        if (err) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("Error reading the file");
        } else {
            res.end(data); 
        }
    });
});
server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
})

