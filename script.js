const navLinkEls = document.querySelectorAll('.highlight');
const sectionEls = document.querySelectorAll('section'); 

let currentSection = 'Projects'
window.addEventListener('scroll', () => {
    sectionEls.forEach(sectionEl => {
        if (window.scrollY >= sectionEl.offsetTop) {
            currentSection = sectionEl.id;
        }
    })
    // console.log(currentSection)
    navLinkEls.forEach(navLinkEl => {
        if (navLinkEl.href.includes(currentSection)) {
            document.querySelector('.active').classList.remove('active');
            navLinkEl.classList.add('active')
        }
    })
})
