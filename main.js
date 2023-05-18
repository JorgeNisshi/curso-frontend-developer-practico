const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const hamburguerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const cardsContainer = document.querySelector(".cards-container");
// const mainContainer = document.querySelector(".main-container");

const aside = document.querySelector(".product-detail");
menuEmail.addEventListener("click", toggleDesktopMenu);
hamburguerMenu.addEventListener("click", mobileMenuToggle);
menuCarritoIcon.addEventListener("click", toggleCaritoAside);

function toggleDesktopMenu() {
  if (!aside.classList.contains("inactive")) {
    aside.classList.add("inactive");
  }
  desktopMenu.classList.toggle("inactive");
}

function mobileMenuToggle() {
  if (!aside.classList.contains("inactive")) {
    aside.classList.add("inactive");
  }
  mobileMenu.classList.toggle("inactive");
}

function toggleCaritoAside() {
  if (!mobileMenu.classList.contains("inactive")) {
    mobileMenu.classList.add("inactive");
  } else if (!desktopMenu.classList.contains("inactive")) {
    desktopMenu.classList.add("inactive");
  }
  aside.classList.toggle("inactive");
}

const productslistElectrodomesticos = [];

productslistElectrodomesticos.push({
  name: "television",
  price: 240,
  src: "https://promart.vteximg.com.br/arquivos/ids/6635235-1000-1000/image-b420a0d027d144f0a7f0f90caa4388b9.jpg?v=638050101417370000",
});

productslistElectrodomesticos.push({
  name: "lavadora",
  price: 240,
  src: "https://www.lg.com/pe/images/lavadoras/md06232156/gallery/medium10.jpg",
});

productslistElectrodomesticos.push({
  name: "refrigeradora",
  price: 240,
  src: "https://home.ripley.com.pe/Attachment/WOP_5/2003311200716/2003311200716-1.jpg",
});

const productslistVegetales = [];

productslistVegetales.push({
  name: "zanahoria",
  price: 2,
  src: "https://soycomocomo.es/media/2019/03/zanahorias.jpg",
});
productslistVegetales.push({
  name: "alverhas",
  price: 3.4,
  src: "https://www.tecnoceam.com/media/djcatalog2/images/item/0/piselli.5_f.jpg",
});
productslistVegetales.push({
  name: "zapallo",
  price: 2.6,
  src: "https://5aldia.cl/wp-content/uploads/2018/03/134198213.jpg",
});

const camisetaKingsleague = [];
camisetaKingsleague.push({ name: "camisetas", price: 80 });

/* <section class="main-container">
            <div class="cards-container">
                  <div class="product-card">
                        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                              alt="">
                        <div class="product-info">
                              <div>
                                    <p>$120,00</p>
                                    <p>Bike</p>
                              </div>
                              <figure>
                                    <img src="./icons/bt_add_to_cart.svg" alt="">
                              </figure>
                        </div>
                  </div>
            </div>
      </section> */

function colocarProductosPage(arr) {
  for (const product of arr) {
    const productCart = document.createElement("div");
    productCart.classList.add("product-card");

    const img = document.createElement("img");
    img.setAttribute("src", product.src);

    const producInfo = document.createElement("div");
    producInfo.classList.add("product-info");

    const info = document.createElement("div");

    //     createElement si para crear un etiqueta html desde javascript con el API de DOM
    const productName = document.createElement("p");
    const productPrice = document.createElement("p");
    productName.innerText = product.name;
    productPrice.innerText = "$" + product.price;

    info.append(productName, productPrice);

    const figure = document.createElement("figure");
    const imgCarrito = document.createElement("img");
    imgCarrito.setAttribute("src", "./icons/bt_add_to_cart.svg");

    figure.append(imgCarrito);
    producInfo.append(info, figure);
    productCart.append(img, producInfo);

    cardsContainer.appendChild(productCart);
    //     mainContainer.appendChild(cardsContainer);
  }
}

colocarProductosPage(productslistElectrodomesticos);
colocarProductosPage(productslistVegetales);
