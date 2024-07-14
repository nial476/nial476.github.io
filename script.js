const navLinkEls = document.querySelectorAll('.highlight');
const sectionEls = document.querySelectorAll('section'); 

let currentSection = 'Projects';
window.addEventListener('scroll', () => {
    sectionEls.forEach(sectionEl => {
        if ((window.scrollY + window.innerHeight/2) >= sectionEl.offsetTop) {
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

const containers = document.querySelectorAll('.touch');

document.addEventListener('touchend', () => {
    containers.forEach(container => {
        if (document.querySelectorAll('.pop').length > 0) {
            pop_items = document.querySelectorAll('.pop')
            pop_items.forEach(pop_item => {
                pop_item.classList.remove('pop')
            })
            console.log('first')
        }
        const items = container.querySelectorAll('.touch_right');
        items.forEach(item => {
            item.addEventListener('touchstart', e => {
                container.classList.remove('pop');
                items.forEach(item => item.classList.remove('pop'));
                container.classList.add('pop');
                item.classList.add('pop');
                console.log('here')
            });
        });
    });
    
})
