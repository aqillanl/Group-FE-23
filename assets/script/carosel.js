let carosel = "https://635538c3483f5d2df3afaee4.mockapi.io/articles?page=1&limit=3";

async function getCarosel() {
  let response = await fetch(carosel);
  let result = await response.json();
  console.log(result);
  showCarosel(result);
}
getCarosel();

async function showCarosel(x) {
  let carosel = document.getElementById("carosel");
  x.forEach((carousel) => {
    const { img, title } = carousel;
    const caroselEl = document.createElement("div");
    caroselEl.classList.add("carousel-inner");
    caroselEl.innerHTML = ` 
        <div class="carousel-item active" data-bs-interval="10000">
          <img src="${img}" class="d-block w-100" alt="article1" />
          <div class="carousel-caption d-none d-md-block">
            <h5 id="judul">${title}</h5>
          </div>
        </div>
      
            `;
    carosel.appendChild(caroselEl);
  });
}
