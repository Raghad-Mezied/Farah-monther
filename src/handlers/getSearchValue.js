const querystring = require('querystring');
const fetchData=require('./fetchData');
const api= "https://animechan.vercel.app/api/quotes/anime?title="
const getSearchValue=(req,res)=>{
    
    let allData="";
    req.on('data',chuckdata=>{
        allData+=chuckdata;
        
    })
    req.on('end',()=>{
        console.log('my datat is here')
        const convertedData = querystring.parse(allData);
        const{search}= convertedData ;
        console.log('value',search);
        
       fetchData(search,api)
        res.writeHead(303,{"Location":"/"});

            res.end();

    })
}
module.exports=getSearchValue;