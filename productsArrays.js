const newArrivals = [

    {
        name: "Asics runners",
        brand: "Asics",
        category: "Running shoes",
        ratings: 4.5,
        price: '₹2,999',
        prevPrice: '₹4,999',
        badge: "New Arrivals",
        new: false,
        desc:"",
        wishlisted: false,
        carted: false,
        imgSrc: "https://cdn11.bigcommerce.com/s-tj87duh98/images/stencil/500x500/products/3596/8848/Puma_19.2_White_Blumazing_Cricket_Spikes_Shoes_White_Orange_Composite_View__53219.1629204065.JPG?c=1"
    },
    {
        name: "SG campus cricket balls",
        brand: "Sunridges",
        category: "SG",
        ratings: 4.5,
        price: '₹499',
        prevPrice: '₹999',
        badge: "New Arrivals",
        new: false,
        desc:"",
        wishlisted: false,
        carted: false,
        imgSrc: "https://cdn11.bigcommerce.com/s-tj87duh98/images/stencil/500x500/products/3557/8648/SG_Test_Cricket_Ball_Pink_Cricketershop.com__94879.1624540888.jpg?c=1"
    },
    {
        name: "MRF KW Bat",
        brand: "MRF",
        category: "KW",
        ratings: 4.5,
        price: '₹2,999',
        prevPrice: '₹4,999',
        badge: "New Arrivals",
        new: false,
        desc:"",
        wishlisted: false,
        carted: false,
        imgSrc: "https://cdn11.bigcommerce.com/s-tj87duh98/images/stencil/500x500/products/3678/9199/MRF_Wizard_Power_Edition_English_Willow_Cricket_Bat_Size_SH_Face_View___40434.1643282614.jpg?c=1"
    },
    {
        name: "Puma Rubber shoes",
        brand: "Puma",
        category: "Running shoes",
        ratings: 4.5,
        price: '₹2,999',
        prevPrice: '₹4,999',
        badge: "New Arrivals",
        new: false,
        desc:"",
        wishlisted: false,
        carted: false,
        imgSrc: "https://cdn11.bigcommerce.com/s-tj87duh98/images/stencil/500x500/products/3648/9011/Puma_19_FH_Cricket_Rubber_Shoes_Amazon_Green_cricketershop.com_1__68875.1642679044.jpg?c=1"

    },
]

const listedProducts = [
    {
        name: "Asics Rubber shoes",
        brand: "Asics",
        category: "Running shoes",
        ratings: 4.5,
        price: '₹2,999',
        prevPrice: '₹4,999',
        badge: "",
        new: false,
        desc:"",
        wishlisted: false,
        carted: false,
        imgSrc: "https://cdn11.bigcommerce.com/s-tj87duh98/images/stencil/500x500/products/3284/7061/PAYNTR_V_White_and_Blue_Cricket_Spike_Shoes_cricketershop_1__10050.1600261642.jpg?c=1"
    },
    {
        name: "Puma Sunblaze red shoes",
        brand: "Asics",
        category: "Running shoes",
        ratings: 4.5,
        price: '₹2,999',
        prevPrice: '₹4,999',
        badge: "",
        new: false,
        desc:"",
        wishlisted: false,
        carted: false,
        imgSrc: "https://cdn11.bigcommerce.com/s-tj87duh98/images/stencil/500x500/products/3654/9046/Puma_20_Sunblaze_Cricket_Rubber_Shoes_Red_Whitecricketershop.com_1__75957.1642683785.jpg?c=1"
    },
    {
        name: "SG campus cricket balls",
        brand: "Sunridges",
        category: "SG",
        ratings: 4.5,
        price: '₹299',
        prevPrice: '₹599',
        badge: "",
        new: false,
        desc:"",
        wishlisted: false,
        carted: false,
        imgSrc: "https://cdn11.bigcommerce.com/s-tj87duh98/images/stencil/500x500/products/3557/8648/SG_Test_Cricket_Ball_Pink_Cricketershop.com__94879.1624540888.jpg?c=1"
    },
    {
        name: "KK Season cricket balls",
        brand: "Kookaboora",
        category: "KK",
        ratings: 4.5,
        price: '₹499',
        prevPrice: '₹599',
        badge: "",
        new: false,
        desc:"",
        wishlisted: false,
        carted: false,
        imgSrc: "https://cdn11.bigcommerce.com/s-tj87duh98/images/stencil/500x500/products/3553/8628/Gortonshire_Club_Cricket_Ball_Red_Seam_View___81782.1624430717.JPG?c=1"
    },
    {
        name: "Kashmir willow",
        brand: "Sunridges",
        category: "KW",
        ratings: 4.5,
        price: '₹2,999',
        prevPrice: '₹4,999',
        badge: "",
        new: false,
        desc:"",
        wishlisted: false,
        carted: false,
        imgSrc: "https://cdn11.bigcommerce.com/s-tj87duh98/images/stencil/500x500/products/3678/9199/MRF_Wizard_Power_Edition_English_Willow_Cricket_Bat_Size_SH_Face_View___40434.1643282614.jpg?c=1"
    },
    {
        name: "Kashmir willow",
        brand: "Sunridges",
        category: "KW",
        ratings: 4.5,
        price: '₹2,999',
        prevPrice: '₹4,999',
        badge: "",
        new: false,
        desc:"",
        wishlisted: false,
        carted: false,
        imgSrc: "https://cdn11.bigcommerce.com/s-tj87duh98/images/stencil/500x500/products/3677/9190/MRF_VK_18_Skipper_English_Willow_Cricket_Bat_Size_SH_Face_View__57723.1643281840.jpg?c=1"
    }
]

const wishlistItems = [
    {
        name: "Asics Rubber shoes",
        brand: "Asics",
        category: "Running shoes",
        ratings: 4.5,
        price: '₹2,999',
        prevPrice: '₹4,999',
        badge: "",
        new: false,
        desc:"",
        wishlisted: true,
        carted: false,
        imgSrc: "https://cdn11.bigcommerce.com/s-tj87duh98/images/stencil/500x500/products/3284/7061/PAYNTR_V_White_and_Blue_Cricket_Spike_Shoes_cricketershop_1__10050.1600261642.jpg?c=1"
    },
    {
        name: "Puma Sunblaze red shoes",
        brand: "Asics",
        category: "Running shoes",
        ratings: 4.5,
        price: '₹2,999',
        prevPrice: '₹4,999',
        badge: "",
        new: false,
        desc:"",
        wishlisted: true,
        carted: false,
        imgSrc: "https://cdn11.bigcommerce.com/s-tj87duh98/images/stencil/500x500/products/3654/9046/Puma_20_Sunblaze_Cricket_Rubber_Shoes_Red_Whitecricketershop.com_1__75957.1642683785.jpg?c=1"
    },
    {
        name: "SG campus cricket balls",
        brand: "Sunridges",
        category: "SG",
        ratings: 4.5,
        price: '₹299',
        prevPrice: '₹599',
        badge: "",
        new: false,
        desc:"",
        wishlisted: true,
        carted: false,
        imgSrc: "https://cdn11.bigcommerce.com/s-tj87duh98/images/stencil/500x500/products/3557/8648/SG_Test_Cricket_Ball_Pink_Cricketershop.com__94879.1624540888.jpg?c=1"
    },
    {
        name: "KK Season cricket balls",
        brand: "Kookaboora",
        category: "KK",
        ratings: 4.5,
        price: '₹499',
        prevPrice: '₹599',
        badge: "",
        new: false,
        desc:"",
        wishlisted: true,
        carted: false,
        imgSrc: "https://cdn11.bigcommerce.com/s-tj87duh98/images/stencil/500x500/products/3553/8628/Gortonshire_Club_Cricket_Ball_Red_Seam_View___81782.1624430717.JPG?c=1"
    },
    {
        name: "Kashmir willow",
        brand: "Sunridges",
        category: "KW",
        ratings: 4.5,
        price: '₹2,999',
        prevPrice: '₹4,999',
        badge: "",
        new: false,
        desc:"",
        wishlisted: true,
        carted: false,
        imgSrc: "https://cdn11.bigcommerce.com/s-tj87duh98/images/stencil/500x500/products/3678/9199/MRF_Wizard_Power_Edition_English_Willow_Cricket_Bat_Size_SH_Face_View___40434.1643282614.jpg?c=1"
    },
    {
        name: "Kashmir willow",
        brand: "Sunridges",
        category: "KW",
        ratings: 4.5,
        price: '₹2,999',
        prevPrice: '₹4,999',
        badge: "",
        new: false,
        desc:"",
        wishlisted: true,
        carted: false,
        imgSrc: "https://cdn11.bigcommerce.com/s-tj87duh98/images/stencil/500x500/products/3677/9190/MRF_VK_18_Skipper_English_Willow_Cricket_Bat_Size_SH_Face_View__57723.1643281840.jpg?c=1"
    }
]


const cartItems = [
    {
        name: "Asics runners",
        brand: "Asics",
        category: "Running shoes",
        ratings: 4.5,
        price: '₹2,999',
        prevPrice: '₹4,999',
        badge: "",
        new: false,
        desc:"",
        wishlisted: false,
        carted: false,
        imgSrc:"https://www.rebelsport.com.au/dw/image/v2/BBRV_PRD/on/demandware.static/-/Sites-srg-internal-master-catalog/default/dw2accb3e3/images/61503501/Rebel_61503501_whitelime_hi-res.jpg?sw=233&sh=233&sm=fit"
    },
    {
        name: "SG campus cricket balls",
        brand: "Sunridges",
        category: "SG",
        ratings: 4.5,
        price: '₹499',
        prevPrice: '₹999',
        badge: "",
        new: false,
        desc:"",
        wishlisted: false,
        carted: false,
        imgSrc:"https://www.rebelsport.com.au/dw/image/v2/BBRV_PRD/on/demandware.static/-/Sites-srg-internal-master-catalog/default/dwe97b2636/images/58093901/Rebel_58093901_red_hi-res.jpg?sw=233&sh=233&sm=fit"
        
    },
    {
        name: "Kashmir willow",
        brand: "Sunridges",
        category: "KW",
        ratings: 4.5,
        price: '₹2,999',
        prevPrice: '₹4,999',
        badge: "",
        new: false,
        desc:"",
        wishlisted: false,
        carted: false,
        imgSrc:"https://www.rebelsport.com.au/dw/image/v2/BBRV_PRD/on/demandware.static/-/Sites-srg-internal-master-catalog/default/dwd7271bfb/images/61502701/Rebel_61502701_green_hi-res.jpg?sw=233&sh=233&sm=fit"

    }
    
]

const products = {newArrivals, listedProducts, wishlistItems, cartItems};