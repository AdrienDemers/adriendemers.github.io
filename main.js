const portfolioItems = document.querySelectorAll('.portfolio-item-wrapper')

portfolioItems.forEach(portfolioItem => {
    portfolioItem.addEventListener('mouseover', () => {
        portfolioItem.childNodes[1].classList.add('img-darken');
    })
    portfolioItem.addEventListener('mouseout', () => {
        //console.log(portfolioItem.childNodes[1].classList);
        portfolioItem.childNodes[1].classList.remove('img-darken');
    })
})

/*
const footerItems = document.querySelectorAll('.icon-instagram')

footerItems.forEach(footerItem => {
    footerItem.addEventListener('mouseover', () => {
        footerItem.childNodes[1].classList.add('icon-lighten');
    })
    footerItem.addEventListener('mouseout', () => {
        //console.log(footerItem.childNodes[1].classList);
        footerItem.childNodes[1].classList.remove('icon-lighten');
    })
})
*/