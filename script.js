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

// touchscreen thinge

sk = document.querySelectorAll('.skill')
skr = document.querySelectorAll('.skill_right')

skr.forEach(skr_e => {
    skr_e.addEventListener("pointerdown", e => {
        document.querySelector('.skill_right').classList.remove('hover');
        skr_e.classList.add('hover');
    
        sk.classList.add('hover');
    })
})