const navLinkEls = document.querySelectorAll('.highlight');
const sectionEls = document.querySelectorAll('section'); 

let currentSection = 'Projects';
window.addEventListener('scroll', () => {
    sectionEls.forEach(sectionEl => {
        if (window.scrollY  >= sectionEl.offsetTop) {
            currentSection = sectionEl.id;
        }
    })
    // console.log(currentSection)
    navLinkEls.forEach(navLinkEl => {
        if (navLinkEl.href.includes(currentSection)) {
            document.querySelector('.active').classList.remove('active');
            navLinkEl.classList.add('active');
        }
    })
})

// const blob = document.getElementById('blob');
// document.body.onpointermove = event => {
//     const { clientX, clientY } = event;

//     blob.style.left = `${clientX}px`;
//     blob.style.top = `${clientY}px`;
// }

const cursor = document.getElementById('blob')

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY  + 'px';
})
