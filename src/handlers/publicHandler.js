const path=require('path')
const fs=require('fs');
const type={
    css:"text",
    js:"text"
}
const publicHandler=(res)=>{

    const filePath=path.join(__dirname,'..','..','public','css','style.css');
    fs.readFile(filePath,(error,data)=>{
        if(error){
            console.log(error);

        }
        else{
            res.writeHead(200,{'Content-type':`text/css`})
            res.end(data);
        }
    })
    
}
module.exports=publicHandler;