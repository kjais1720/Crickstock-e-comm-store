// import products from './products.js';
const createHorCard = product =>{
    const pdtCard = document.createElement('article');
    pdtCard.innerHTML = `
                        <button class="heart-icon tr-btn tr-btn-icon">
                            <i class="fas fa-heart ${product.wishlisted && 'icon-filled'}"></i>
                        </button>
                        <div class="tr-card-banner">
                            <img src="${product.imgSrc}"
                                alt="${product.name}">
                        </div>
                        <div class="flex-col justify-c-start">
                            <div class="tr-card-header">
                                <a href='../product-info/productId' class="title txt-semibold">${product.name}</a>                                     
                                <h3 class="subtitle">${product.brand}</h3>
                            </div>
                            <div class="d-flex align-i-center gap-xs">
                                <div class="tr-ratings-badge txt-left ratings-sm tr-ratings-badge-green">
                                    <i class="fas fa-star"></i>
                                    <span>${product.ratings}</span>
                                </div>
                                <span class='txt-secondary txt-sm'> (923)</span>
                            </div>
                            <div class="d-flex gap-sm">
                                <div class="pdt-price">
                                    <span class="curr-price txt-semibold">
                                        ${product.price}
                                    </span>
                                    <span class="prev-price txt-semibold">
                                        ${product.prevPrice}
                                    </span>
                                </div>
                                <div class="txt-semibold txt-success align-s-center">50% off</div>
                            </div>
                            ${product.carted ? '<div class="d-flex gap-md align-i-center"><p>Quantity: </p><div class="d-flex"><div class="align-s-center txt-primary fas fa-plus"></div><div class="pd-x-sm">2</div><div class="align-s-center txt-primary fas fa-minus"></div></div></div>'
                            :''}
                            <div class="tr-card-footer-links d-flex f-wrap gap-sm">
                                <button class="tr-btn tr-btn-secondary">
                                    <i class="fas fa-cart-arrow-down"></i>
                                    ${product.carted ? 'Remove from cart':'Add to cart'}
                                </button>
                                <button class="tr-btn tr-btn-primary">
                                    <i class="fas fa-bags-shopping"></i>
                                    ${product.carted ? 'Move to wishlist':'Buy now'}
                                </button>
                            </div>
                        </div>
    `
    if(product.badge){
        const badge = document.createElement('div');
        badge.innerHTML = product.badge;
        badge.className = 'tr-card-badge';
        pdtCard.appendChild(badge)
    }
    pdtCard.className = 'pdt-card tr-card tr-card-hor d-flex';
    return pdtCard;
}

const createVerCard = product =>{
    const pdtCard = document.createElement('article');
    pdtCard.innerHTML = `
                    <button class="heart-icon tr-btn tr-btn-icon">
                        <i class="fas fa-heart ${product.wishlisted && 'icon-filled'}"></i>
                    </button>
                    <div class="tr-card-banner">
                        <img src="${product.imgSrc}"
                            alt="Shoes">
                    </div>
                    <div class="tr-card-header">
                        <a href='../product-info/productId' class="title txt-semibold">${product.name}</a> 
                        <h3 class="subtitle">${product.brand}</h3>
                    </div>
                    <div class="d-flex align-i-center gap-xs">
                        <div class="tr-ratings-badge txt-left ratings-sm tr-ratings-badge-green">
                            <i class="fas fa-star"></i>
                            <span>${product.ratings}</span>
                        </div>
                        <span class='txt-secondary txt-sm'> (923)</span>
                    </div>
                    <div class="d-flex gap-sm">
                        <div class="pdt-price">
                            <span class="txt-primary txt-semibold">
                                ${product.price}
                            </span>
                            <span class="prev-price txt-semibold">
                                ${product.prevPrice}
                            </span>
                        </div>
                        <div class="txt-semibold txt-success align-s-center">50% off</div>
                    </div>
                    <div class="tr-card-footer-links flex-col gap-sm">
                        <button class="tr-btn tr-btn-secondary">
                            <i class="fas fa-cart-arrow-down"></i>
                            ${product.wishlisted ? 'Move to cart':'Add to cart'}
                        </button>
                        <button class="tr-btn tr-btn-primary">Buy</button>
                    </div>
    `
    if(product.badge){
        const badge = document.createElement('div');
        badge.innerHTML = product.badge;
        badge.className = 'tr-card-badge';
        pdtCard.appendChild(badge)
    }
    pdtCard.className = 'pdt-card tr-card flex-col gap-md';
    return pdtCard;
}

const createHeader = pathToRoot =>{
    const header = document.createElement('header');
    header.innerHTML = `

                <div class="tr-heading d-flex">
                    <a href='${pathToRoot}' class='logo'>
                        <img src='${pathToRoot}assets/crickstock-logo.jpeg' alt = "Crickstock logo">
                    </a>
                </div>
                <div class='header-menu d-flex justify-c-space-between'>
                    <div class="tr-input-wrapper d-flex gap-sm">
                        <input type="text" class="tr-input-item" placeholder="Search">
                        <button class="tr-btn tr-btn-icon">
                            <i class="fas fa-search"></i>
                        </button>
                    </div>
                    <nav class="tr-nav d-flex gap-md">
                        <div class='page-menu-wrapper'>
                            <button class="page-menu-btn tr-btn tr-btn-link d-flex align-i-center gap-sm">Products
                                <i class="fas fa-caret-down"></i>
                            </button>
                            <ul class='flex-col page-menu'>
                                <a href= "${pathToRoot}pages/products.html">Cricket Bats</a>
                                <a href= "${pathToRoot}pages/products.html">Cricket Balls</a>
                                <a href= "${pathToRoot}pages/products.html">Cricket Shoes</a>
                                <a href= "${pathToRoot}pages/products.html">Cricket Gears</a>

                            </ul>
                        </div>
                        <a href= "${pathToRoot}pages/auth.html" class="tr-btn tr-btn-link">Login</a>
                        <div class="badge-wrapper">
                            <a href="${pathToRoot}pages/wishlist.html" class="tr-btn tr-btn-icon">
                                <i class="fas fa-heart"></i>
                            </a>
                            <div class="badge badge-red">5+</div>
                        </div>
                        <a href="${pathToRoot}pages/cart.html" class="tr-btn tr-btn-icon">
                            <i class="fas fa-shopping-cart"></i>
                        </a>
                    </nav>
                </div>
                <button class="tr-btn tr-btn-icon hamburger">
                    <i class="fas fa-bars"></i>
                </button>

    `
    header.className = 'tr-header d-flex gap-lg justify-c-space-between f-wrap'
    return header;
}

const insertHeader = (pathToRoot) =>{
    const newHeader = createHeader(pathToRoot);
    document.body.prepend(newHeader);
    togglePageMenu();
    toggleHeaderMenu();
}

const insertVerCards = (productType) => {
    const productsList = products[productType]
    const verCardsContainer = document.getElementById('productCardsContainer');
    productsList.forEach(item => {
        const newCard = createVerCard(item)
        verCardsContainer.appendChild(newCard);
    })
}

const insertHorCards = (productType)=>{
    const productsList = products[productType];
    const horCardsContainer = document.getElementById('productCardsContainer');
    productsList.forEach(item => {
        const newCard = createHorCard(item);
        horCardsContainer.appendChild(newCard);
    })
}