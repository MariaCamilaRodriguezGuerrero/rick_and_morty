const express = require('express');
const router = require("./routes/index")
const server = express();
const PORT = 3001;

server.use(express.json())// SIEMPRE TIEN QUE IR DE PRIMERAS !!!

server.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Credentials', 'true');
   res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
   );
   res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, DELETE'
   );
   next();
});

 
 // Usar el middleware
 server.use('/rickandmorty',router);
 

 

server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});







// const http = require("http")
// const {getCharById} = require("../src/controllers/getCharById")


// http.createServer((req, res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*')
//     const { url } = req    
//     if (url.includes("/rickandmorty/character")){
//         const id = Number(url.split("/").at(-1))
//         getCharById(res,id)

//     }    
// }).listen(3001, "localhost")



// // const http = require("http")
// // const data = require("./utils/data")

// // http.createServer((req, res) => {
// //     const { url } = req
// //     res.setHeader('Access-Control-Allow-Origin', '*')
// //     if (url.includes("/rickandmorty/character")) {
// //         const id = Number(url.split("/").at(-1))
// //         const character = data.find((char) => char.id == id)
// //         if (character) {
// //             res.writeHead(200, { "Content-Type": "aplication/json" })
// //             return res.end(JSON.stringify(character))
// //         } else {
// //             res.writeHead(404, { "Content-Type": "aplication/json" })
// //             return res.end(JSON.stringify({error:"character not found"}))
// //         }
// //     }
// // }).listen(3001, "localhost")