console.log("i AM IN CJS FILE");
const input = document.getElementById("input");
const getData = () => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    console.log(xhr.readyState);

    if (xhr.status === 200) {
      if (xhr.readyState === 4) {
        console.log(xhr.responseText);
        const data = JSON.parse(xhr.responseText);
      }
    }
  };
  xhr.open("GET", "/search", true);
  xhr.send();
};
input.addEventListener("input", getData);
