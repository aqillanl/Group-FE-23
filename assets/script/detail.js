let params = new URLSearchParams(window.location.search);
let id = params.get("id");

let api_url = "https://635538c3483f5d2df3afaee4.mockapi.io/articles";

async function getArticles(api_url) {
  let response = await fetch(api_url);
  let result = await response.json();

  return result;
}
getArticles(`${api_url}/${id}`).then(function (result) {
  let judul = document.getElementById("title");
  let image = document.getElementById("img");
  let teks = document.getElementById("paragraph");

  judul.innerText = result.title;
  image.src = result.img;
  teks.innerText = result.paragraph;
});
