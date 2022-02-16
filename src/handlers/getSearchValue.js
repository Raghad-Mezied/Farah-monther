const querystring = require('querystring');
const fetchData=require('./fetchData');
const api= "https://animechan.vercel.app/api/quotes/anime?title="
const getSearchValue=(req,res)=>{

    let allData="";
    req.on('data',chuckdata=>{
        allData+=chuckdata;
        
    })
    req.on('end',()=>{
         
        console.log('value',allData);
        //const convertedData = querystring.parse(allData);
    
        
       fetchData(allData,res)
     
        //res.writeHead(303,{"Location":"/"});

            //res.end();

    })
}
module.exports=getSearchValue;