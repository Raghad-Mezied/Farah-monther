console.log("i AM IN CJS FILE");
const input = document.getElementById("input");
const btn = document.getElementById("btn");
const list = document.getElementById("list");
const container = document.querySelector(".container");

const getData = (e) => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    console.log(xhr.readyState);
    if (xhr.readyState === 4) {
      console.log("hello");
      if (xhr.status === 200) {
        console.log(xhr.responseText);
        const data = JSON.parse(xhr.responseText);
        console.log(data);
        let newArray = data.filter((ele) => {
          return ele["name"].startsWith(e.target.value);
        });
        list.textContent = "";
        newArray.forEach((element) => {
          const option = document.createElement("option");
          option.value = element.name;
          option.text = element.name;
          list.appendChild(option);
        });
        console.log(newArray);
      }
    }
  };
  xhr.open("GET", "/search", true);
  xhr.send();
};

const getData2 = () => {
  const value = document.getElementById("input").value;
  console.log("the value form input", value);
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    console.log(xhr.readyState);
    if (xhr.readyState === 4) {
      console.log("hello");
      if (xhr.status === 200) {
        console.log(xhr);
        const data = JSON.parse(xhr.responseText);
     let info = data["results"][0];
        if (info !== undefined) {
            container.textContent = "";
            let src = `https://image.tmdb.org/t/p/w1280${info.backdrop_path}`;
            const movieCard = document.createElement("div");
           
            const img = document.createElement("img");
            const title = document.createElement("h2");
            const overview = document.createElement("p");

            img.src = src;
            title.textContent = info.title;
            overview.textContent = info.overview;
          
            container.appendChild(movieCard);
            movieCard.appendChild(img);
            movieCard.appendChild(title);
            movieCard.appendChild(overview);

        }
      }
    }
  };
  xhr.open("POST", "/search", true);
  xhr.send(value);
};
input.addEventListener("input", getData);

btn.addEventListener("click", getData2);
