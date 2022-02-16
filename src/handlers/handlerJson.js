const path=require('path')
const fs=require('fs');

const handlerJson=(res)=>{
    console.log('I am here')
   
    const filePath=path.join(__dirname,'..','..','movies.json')
    fs.readFile(filePath,(error,data)=>{
        if(error){
            console.log("erroe",error);

        }
        else{
           
            res.writeHead(200,{'Content-type':'application/json'})
                    //console.log("data",JSON.stringify(data));
            res.end(data);
        }
})
}
module.exports=handlerJson;