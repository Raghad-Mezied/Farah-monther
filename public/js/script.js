console.log("i AM IN CJS FILE");
const input = document.getElementById("input");
const btn=document.getElementById("btn")
const getData = (e) => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    console.log(xhr.readyState);
    if (xhr.readyState === 4) {
    console.log('hello')
    if (xhr.status === 200) {
        console.log(xhr.responseText);
        const data = JSON.parse(xhr.responseText);
        console.log(data);
        let newArray=data.filter((ele)=>{
            return ele["name"].startsWith(e.target.value)
        })
        console.log(newArray);
        newArray.forEach(element => {
            /////Dom is here
            
        });
      }
    }
  };
  xhr.open("GET", "/search", true);
  xhr.send();
};

const getData2 = () => {
  const value =document.getElementById("input").value;
  console.log("the value form input",value)
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    console.log(xhr.readyState);
    if (xhr.readyState === 4) {
    console.log('hello')
    if (xhr.status === 200) {
        console.log(xhr.responseText);
        const data = JSON.parse(xhr.responseText);
        console.log("DATA",data);
       
        
      }
    }
  };
  xhr.open("POST", "/search", true);
  xhr.send(value);
};
input.addEventListener("input", getData);

btn.addEventListener("click",getData2);