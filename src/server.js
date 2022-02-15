const router=require('./router.js')
const http=require('http');

const server = http.createServer(router);
const port =4000;
server.listen(port,()=>{
    console.log(`server is listeining on port${port}`);
})