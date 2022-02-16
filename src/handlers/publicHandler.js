const path=require('path')
const fs=require('fs');
const type={
    css:"text",
    js:"text"
}
const publicHandler=(res,endPoint)=>{
    const extension =endPoint.split(".")[1];

    const filePath=path.join(__dirname,'..','..','public',endPoint);
    fs.readFile(filePath,(error,data)=>{
        if(error){
            console.log(error);

        }
        else{
            res.writeHead(200,{'Content-type':`${type[extension]}/${extension}`})
            res.end(data);
        }
    })
    
}
module.exports=publicHandler;