const path=require('path')
const fs=require('fs');

const jsHandler=(res)=>{

    const filePath=path.join(__dirname,'..','..','public','js','script.js');
    fs.readFile(filePath,(error,data)=>{
        if(error){
            console.log(error);

        }
        else{
            res.writeHead(200,{'Content-type':`text/js`})
            console.log('mydata',data);
            res.end(data);
        }
    })
    
}
module.exports=jsHandler;