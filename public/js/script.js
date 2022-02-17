const input = document.getElementById("input");
const btn = document.getElementById("btn");
const list = document.getElementById("list");
const container = document.querySelector(".container");
const getSuggestion = (data, value) => {
  let newArray = data.filter((ele) => {
    return ele["name"].startsWith(value);
  });
  suggestionMoviesDom(newArray);
};
const suggestionMoviesDom = (newArray) => {
  list.textContent = "";
  newArray.forEach((element) => {
    const option = document.createElement("option");
    option.value = element.name;
    option.text = element.name;
    list.appendChild(option);
  });
};

const CardDom = (data) => {
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
  } else {
    container.textContent = "no result";
  }
};
const getData = (cb, state) => {
  let value = document.getElementById("input").value;
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        cb(data, value);
      }
    }
  };
  xhr.open(state, "/search", true);
  xhr.send(value);
};
input.addEventListener("input", () => {
  getData(getSuggestion, "GET");
});

btn.addEventListener("click", () => {
  getData(CardDom, "POST");
});
