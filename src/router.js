const HomeHandler=require('./handlers/homeHandler');
const publicHandler=require('./handlers/publicHandler');
const handlerJson=require('./handlers/handlerJson');
const  jsHandler =require('./handlers/jshandler')
const router =(req,res)=>{

let endPoint=req.url;
if (endPoint==="/"){
HomeHandler(res)
}
else if (endPoint==="/css/style.css"){
    publicHandler(res)

}
else if (endPoint === '/search'&& req.method ==="POST"){
   
    handlerJson(res);
  
}
if(endPoint=== "/js/script.js"){
    jsHandler(res) 
}

}
module.exports=router;