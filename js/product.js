const API = "https://dummyjson.com/products";

const singleProduct = document.querySelector(".product");
const productLeft = document.querySelector(".product__left");
const loading = document.querySelector(".loading__box");

async function fetchData(api) {
  let params = new URLSearchParams(window.location.search);
  let id = params.get("id");
  const data = await fetch(`${api}/${id}`);
  data
    .json()
    .then((res) => getSingleProduct(res))
    .catch((err) => console.log(err))
    .finally(() => {
      loading.style.display = "none";
    });
}

fetchData(API);

function getSingleProduct({
  id,
  title,
  description,
  price,
  discountPercentage,
  rating,
  brand,
  category,
  images,
  stock,
}) {
  const singleProductImg = document.createElement("img");
  singleProductImg.src = images[0];
  let productRight = document.createElement("div");
  productRight.classList.add("product__right");
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
  productRight.innerHTML = `
        <h5 class="product__category">${category}</h5>
        <h1 class="product__title">${title} (${brand})</h1>
        <p class="product__paragraph">${description}</p>
        <p class="product__paragraph">${description}</p>
        <div class="product__card__rating">
            ${checkRating()}
            <p>(${stock}) отзывов</p>
        </div>
        <div class="product__price">
            <p>Цена</p>
            <div class="product__price__box">
                <h1 class="product__dis__price">${price}₽</h1>
                <del class="product__old__price">${price * 1.5}₽</del>
            </div>
        </div>
        <div class="product__cart__btn">
            <button>КОРЗИНКА</button>
        </div>

    `;
  productLeft.appendChild(singleProductImg);
  singleProduct.appendChild(productRight);
}
