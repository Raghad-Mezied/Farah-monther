const path=require('path')
const fs=require('fs');
const querystring = require('querystring');
const router =(req,res)=>{

let endPoint=req.url;
console.log(endPoint);
if (endPoint==="/"){
    const filePath=path.join(__dirname,'..','public','index.html')
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
else if (endPoint==="/css/style.css"){
    const filePath=path.join(__dirname,'..','public','css','style.css');
    fs.readFile(filePath,(error,data)=>{
        if(error){
            console.log(error);

        }
        else{
            res.writeHead(200,{'Content-type':'text/css'})
            console.log('mydata',data);
            res.end(data);
        }
    })
    

}
else if (endPoint === '/search'&& req.method ==="POST"){
    let allData="";
  req.on('data',(chunkdate) =>{
    allData+=chunkdate;
  })
  req.on('end',()=>{
    const convertedData = querystring.parse(allData);
    console.log("MYDATA",convertedData);
    const dataJSONpath=path.join(__dirname,'..','movies.json');
  fs.readFile(dataJSONpath,(error,data)=>{
    if(error){
        console.log("my error",error);
    }
    else{
        res.writeHead(200);
        const newData=data.map((ele)=>{
           return ele;
        })
        console.log('my data',newData);
        res.end(newData);
    }
  })
  
  })
  
  
}


}
module.exports=router;