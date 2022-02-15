const path=require('path')
const fs=require('fs');

const handlerJson=(res)=>{
   
    const filePath=path.join(__dirname,'..','..','movies.json')
    fs.readFile(filePath,(error,data)=>{
        if(error){
            console.log(error);

        }
        else{
            console.log("iam here")
            res.writeHead(200,{'Content-type':'application/json'})
                    //console.log("data",JSON.stringify(data));
            res.end(data);
        }
})
}
module.exports=handlerJson;