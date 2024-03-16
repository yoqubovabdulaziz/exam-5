const API = "https://dummyjson.com/products";

const productsRow = document.querySelector(".hero__row");
const loading = document.querySelector(".loading__box");
const skeletonRow = document.querySelector(".skeleton__row");

async function fetchData(api) {
  const data = await fetch(api);
  data
    .json()
    .then((res) => getProduct(res.products))
    .catch((err) => console.log(err))
    .finally(() => {
      loading.style.display = "none";
      skeletonRow.style.display = "none";
    });
}

fetchData(API);

function getProduct(data) {
  data.forEach(
    ({
      id,
      title,
      description,
      price,
      discountPercentage,
      rating,
      brand,
      category,
      images,
    }) => {
      const card = document.createElement("div");
      card.classList.add("product__card");
      rating = Math.round(rating);
      function checkRating() {
        if (rating === 5) {
          return `
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
            `;
        } else if (rating === 4) {
          return `
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star simple-star"></i>
            `;
        }
      }
      card.innerHTML = `
        <div class="product__card">
              <div class="product__payment__type">
                <span class="mark">
                  <img src="assets/images/x-mark.svg" alt="" />
                </span>
                <p>Нет в наличии</p>
              </div>
              <div class="product__sale">
                <h5>SALE</h5>
              </div>
              <div class="product__suprise">
                <img src="assets/images/suprise-icon.svg" alt="" />
                <p>Подарок</p>
              </div>
              <div class="product__card__frame">
                <img 
                onclick="singleProduct(${id})" 
                class="product__img" src=${images[0]} alt="" />
              </div>
              <div class="product__card__content">
                <div class="product__card__rating">
                  ${checkRating()}
                  <p>(12) отзывов</p>
                </div>
                <h3 class="product__card__title">${title}</h3>
                <div class="product__price">
                  <p class="dis__price">${price}₽</p>
                  <del>8 000₽</del>
                </div>
              </div>
            </div>
    `;
      productsRow.appendChild(card);
    }
  );
}

function singleProduct(id) {
  window.open(`/pages/product.html?id=${id}`, "_self");
}

function skeletonCard() {
  for (let i = 1; i <= 16; i++) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
    <div class="card-img skeleton"></div>
        <div class="card-body">
        <h2 class="card-title skeleton"></h2>
        <p class="card-intro skeleton"></p>
        <div class="button-container">
            <button class="card-btn skeleton"></button>
            <button class="card-btn skeleton"></button>
        </div>
    </div>
    `;
    skeletonRow.appendChild(card);
  }
}

skeletonCard();
