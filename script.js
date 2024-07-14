const navLinkEls = document.querySelectorAll('.highlight');
const sectionEls = document.querySelectorAll('section'); 

let currentSection = 'Projects';
window.addEventListener('scroll', () => {
    sectionEls.forEach(sectionEl => {
        if (window.scrollY  >= sectionEl.offsetTop) {
            currentSection = sectionEl.id;
        }
    })
    navLinkEls.forEach(navLinkEl => {
        if (navLinkEl.href.includes(currentSection)) {
            document.querySelector('.active').classList.remove('active');
            navLinkEl.classList.add('active');
        }
    })
})


const cursor = document.getElementById('blob')

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY  + 'px';
})

const containers = document.querySelectorAll('.project');
let touchTimeout;

// function handleTouchStart(e) {
//     container.classList.add('pop');
//     e.target.classList.add('pop');
//     clearTimeout(touchTimeout);
// }

// function handleTouchEnd(e) {
//     touchTimeout = setTimeout(() => {
//         container.classList.remove('pop');
//         items.forEach(item => item.classList.remove('pop'));
//     }, 300);
// }

containers.forEach(container => {
    console.log(container.classList)
    if (container.querySelector('.pop') !== null) {
        console.log('here');
        console.log(container.querySelector('.pop'));
        document.querySelector('.pop').classList.remove('pop');
    }
    const items = container.querySelectorAll('.project_right');
    items.forEach(item => {
        item.addEventListener('touchstart', e => {
            container.classList.remove('pop');
            items.forEach(item => item.classList.remove('pop'));
            container.classList.add('pop');
            item.classList.add('pop');
        });
    });
})
