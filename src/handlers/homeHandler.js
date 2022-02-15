const path=require('path')
const fs=require('fs');
const homeHandler=(res)=>{
   
        const filePath=path.join(__dirname,'..','..','public','index.html')
        fs.readFile(filePath,(error,data)=>{
            if(error){
                console.log(error);
    
            }
            else{
                res.writeHead(200,{'Content-type':'text/html'})
                console.log('mydata',data);
                res.end(data);
            }
        })
    
    }
module.exports=homeHandler;