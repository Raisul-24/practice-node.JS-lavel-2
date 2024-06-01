const http = require('node:http');
const fs = require('fs');

// Create a local server using raw node.js
const server = http.createServer()

//listener
server.on('request', (req, res)=>{
  if(req.url === '/read-file' && req.method == 'GET');

//   streaming file readable
   // const readableStream = fs.createReadStream('./texts/readable.txt')
   const readableStream = fs.createReadStream(process.cwd() +'/texts/readable.txt')
   // const readableStream = fs.createReadStream(__dirname+'/texts/readable.txt')

   readableStream.on('data', (buffer)=>{
      res.write(buffer);
   })

   readableStream.on('end', ()=>{
      res.end(" Hello world!!");
   })
   
})
server.listen(8000, ()=>{
   console.log(`server is listening on port 8000`);
})