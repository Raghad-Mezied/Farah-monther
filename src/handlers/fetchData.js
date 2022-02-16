const fetch = require('node-fetch');
//import fetch from 'node-fetch';
const fetchData=(value,api)=>{
    let array=[];
fetch(api+value, { method: 'GET'})
/*.then(res=>{
    console.log(res.ok);
        console.log(res.status);
        console.log(res.statusText);
        console.log(res.headers.raw());
        console.log(res.headers.get('content-type'));
})*/
.then((res)=>res.json())
.then((res)=>{
    console.log(res[0].quote)
   array.push(res[0].quote);
    
})
console.log("I am here",array);

}
module.exports=fetchData;