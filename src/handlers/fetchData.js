const https = require('https');
const fetchData=(value,res)=>{
    console.log(`https://animechan.vercel.app/api/quotes/anime?title=${value}`);
    const api=`https://animechan.vercel.app/api/quotes/anime?title=${value}`
    let data="";
  
    https.get(api,(response)=>{
  
   response.on('data',(chuck)=>{
        data+=chuck;
    })
    response.on('end',()=>{
      
       // 
       console.log((JSON.stringify(data)))
    res.end((JSON.stringify(data)));
    res.writeHead(303,{"Location":"/"});
 

    })
      
  })

   
}
module.exports=fetchData;