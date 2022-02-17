const serverError=(res)=>{
    res.writeHead(500);
    res.end('SERVER ERROR!')
}
module.exports=serverError;
