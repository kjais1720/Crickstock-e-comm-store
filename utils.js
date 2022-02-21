const fillIconOnClick = iconsSelector =>{
    const icons = document.querySelectorAll(iconsSelector)
    icons.forEach(btn=> btn.addEventListener('click',()=>btn.classList.toggle('icon-filled')))
}

const toggleHeaderMenu = ()=>{
    const hamburgerIcon = document.querySelector('.hamburger');
    const header = document.querySelector('.tr-header');
    
    hamburgerIcon.addEventListener('click',()=> {
        header.classList.toggle('active')
        // setTimeout(()=>header.classList.toggle('showOverflow'), 300)
    });
}


const togglePageMenu = () => {
    const toggleBtn = document.querySelector('.page-menu-btn');
    const pageMenu = document.querySelector('.page-menu');
    document.body.addEventListener('click', e => {
        if(e.target.className.includes('page-menu-btn')){
            pageMenu.classList.toggle('active')
        } else{
            pageMenu.classList.remove('active');
        }
    })
}

const toggleFilterSidebar = () => {
    const filterToggleBtn = document.querySelector('.filter-btn');
    const filterSidebar = document.querySelector('aside.filters');
    const filterWrapper = filterSidebar.parentElement
    filterToggleBtn.addEventListener('click',e =>{
        filterSidebar.classList.toggle('active');
        filterWrapper.classList.toggle('active');
        e.stopPropagation();
    })

    filterSidebar.addEventListener('click',e=>e.stopPropagation())

    filterWrapper.addEventListener('click',e=>{
        filterWrapper.classList.remove('active');
        filterSidebar.classList.remove('active')
    })

}