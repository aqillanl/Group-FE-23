let api_url = "https://635538c3483f5d2df3afaee4.mockapi.io/articles";

async function getArticles() {
  let response = await fetch(api_url);
  let result = await response.json();
  console.log(result);
  showArticles(result);
}

getArticles();

async function showArticles(data) {
  let artikel = document.getElementById("articles");
  data.forEach((articles) => {
    const { img, title, paragraph, id } = articles;
    const articlesEl = document.createElement("div");
    articlesEl.classList.add("row");
    articlesEl.classList.add("py-5");
    articlesEl.innerHTML = ` <div class="col-lg-4">
    <img class="img-fluid" src="${img}" style="height: 100%; width: 100%" alt="" />
  </div>
  <div class="col-lg-8">
    <div class="title py-2">
      <h3>${title}</h3>
    </div>
    <div class="paragraph">
      <p style="display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; text-overflow: ellipsis">
        ${paragraph}
      </p>
    </div>
    <div class="more">
      <a href="detail.html?id=${id}">
        <button type="button" class="btn btn-sm btn-outline-transparant">View More</button>
      </a>
    </div>
  </div>
  <div>
<hr>
</div>
        `;
    artikel.appendChild(articlesEl);
  });
}
