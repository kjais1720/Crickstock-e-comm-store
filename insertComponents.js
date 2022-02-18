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

const createHeader = userIsLoggedIn =>{
    const header = document.createElement('header');
    header.innerHTML = `

                <div class="tr-heading d-flex">
                    <a href='/' class='logo'>
                        <img src='/assets/crickstock-logo.png' alt = "Crickstock logo">
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
                                <a href= "/pages/products.html">Cricket Bats</a>
                                <a href= "/pages/products.html">Cricket Balls</a>
                                <a href= "/pages/products.html">Cricket Shoes</a>
                                <a href= "/pages/products.html">Cricket Gears</a>

                            </ul>
                        </div>
                        <a href= "/pages/auth.html" class="tr-btn tr-btn-link">${userIsLoggedIn ? 'Logout' : 'Login'}</a>
                        <div class="badge-wrapper">
                            <a href="/pages/wishlist.html" class="tr-btn tr-btn-icon">
                                <i class="fas fa-heart"></i>
                            </a>
                            <div class="badge badge-red">5+</div>
                        </div>
                        <div class="badge-wrapper">
                            <a href="/pages/cart.html" class="tr-btn tr-btn-icon">
                                <i class="fas fa-shopping-cart"></i>
                            </a>
                            <div class="badge badge-red">3</div>
                        </div>
                    </nav>
                </div>
                <button class="tr-btn tr-btn-icon hamburger">
                    <i class="fas fa-bars"></i>
                </button>

    `
    header.className = 'tr-header d-flex gap-lg justify-c-space-between f-wrap'
    return header;
}

const createFooter = () =>{
    const footer = document.createElement('footer');
    footer.innerHTML = `
            <div class="d-grid grid-autofit-md">
                <div class="flex-col brand-info">
                    <a href='/' class='logo'>
                        <img src='/assets/crickstock-logo.png' alt = "Crickstock logo">
                    </a>
                    <div class="txt-white">
                        <i class="fas fa-map-marker-alt"></i>
                        123 - Maple street, Anytown, CA 171001
                    </div>
                    <div class="txt-white">
                        <i class="fas fa-envelope"></i>
                        crickstock@gmail.com
                    </div>
                </div>
                <div class="subscribe flex-col">
                    <h3 class='txt-white'>Subscribe to get updates about latest offers</h3>
                    <div class="d-flex">
                        <input type="text" aria-label="Enter your Email" placeholder = 'Email' class="tr-input-item">
                        <button class="tr-btn tr-btn-cta">Subscribe</button>
                    </div>
                </div>
                <div class="d-flex justify-c-center gap-sm">
                    <ul class="footer-links flex-col">
                        <h3 class="txt-white txt-left">Quick links</h3>
                        <li>
                            <a href="/pages/wishlist.html" class="tr-btn tr-btn-link">Wishlist</a>
                        </li>
                        <li>
                            <a href="/pages/cart.html" class="tr-btn tr-btn-link">Cart</a>
                        </li>
                        <li>
                            <a href="/pages/auth.html" class="tr-btn tr-btn-link">Login/Signup</a>
                        </li>
                    </ul>
                    <ul class="footer-links flex-col">
                        <h3 class="txt-white txt-left">Products</h3>
                        <li>
                            <a href="/pages/products.html" class="tr-btn tr-btn-link">Cricket Bats</a>
                        </li>
                        <li>
                            <a href="/pages/products.html" class="tr-btn tr-btn-link">Cricket Balls</a>
                        </li>
                        <li>
                            <a href="/pages/products.html" class="tr-btn tr-btn-link">Cricket Shoes</a>
                        </li>
                        <li>
                            <a href="/pages/products.html" class="tr-btn tr-btn-link">Cricket Gears</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="author-info flex-col align-i-center gap-sm">
                <ul class="d-flex gap-sm">
                    <a target="_blank" href="https://twitter.com/kjais1720" class="tr-btn tr-btn-icon" aria-label="Twitter link">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a target="_blank" href="https://github.com/kjais1720" class="tr-btn tr-btn-icon" aria-label="Github link">
                        <i class="fab fa-github"></i>
                    </a>
                    <a target="_blank" href="https://linkedin.com/in/krituraj-anand" class="tr-btn tr-btn-icon" aria-label="LinkedIn link">
                        <i class="fab fa-linkedin"></i>    
                    </a>
                </ul>
                <p class="txt-white">Created by<a target="_blank" href="https://kjais-portfolio.vercel.app" class="tr-btn tr-btn-link">Krituraj Anand</a> </p>
            </div>
    `
    footer.className = 'bg-primary';
    return footer;
}


const insertHeaderAndFooter = userIsLoggedIn => {
    const header = createHeader(userIsLoggedIn);
    const footer = createFooter();
    document.body.prepend(header);
    document.body.append(footer);

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
    fillIconOnClick('.heart-icon i.fas');
}

const insertHorCards = (productType)=>{
    const productsList = products[productType];
    const horCardsContainer = document.getElementById('productCardsContainer');
    productsList.forEach(item => {
        const newCard = createHorCard(item);
        horCardsContainer.appendChild(newCard);
    })
    fillIconOnClick('.heart-icon i.fas');
}