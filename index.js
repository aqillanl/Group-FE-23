let api_url = "https://635538c3483f5d2df3afaee4.mockapi.io/articles?page=1&limit=1";

async function getArticles() {
  let response = await fetch(api_url);
  let result = await response.json();
  console.log(result);
  showArticles(result);
}

getArticles();

async function showArticles(data) {
  let artikel = document.getElementById("article-awal");
  data.forEach((articles) => {
    const { img, title, paragraph, id } = articles;
    const articlesEl = document.createElement("div");
    articlesEl.classList.add("row");
    articlesEl.innerHTML = ` 
      <div class="col-md-4">
        <div class="card crop-img">
          <img class="img-fluid" src="${img}" style="height: 100%; width: 100%" alt="" />
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          </div>
        </div>
      </div>
    

        `;
    artikel.appendChild(articlesEl);
  });
}
