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

const skillContainer = document.querySelector('.skill');

function findParentElements(x, y) {
    let element = document.elementFromPoint(x, y);
    console.log(element)
    document.querySelectorAll('.skill_right').forEach(el => el.classList.remove('hover'));
    document.querySelectorAll('.skill').forEach(el => el.classList.remove('hover'));
    // removeActiveClass();
    let skill = null;
    let skillRight = null;
    // if element.classList÷
    while (element && (!skill || !skillRight)) {
        if (element.classList.contains('skill_right')) {
            skillRight = element;
            skillRight.classList.add('hover');
            // console.log(element)
            console.log("added skr")
        }
        if (element.classList.contains('skill')) {
            skill = element;
            skill.classList.add('hover');
            console.log(element)
            console.log("added sk")
            break; // We've found both, no need to go further
        }
        element = element.parentElement;
    }
    // console.log("pare")
    // return { skill, skillRight };
}

// function removeActiveClass() {
//     console.log("remove active")
//     document.querySelectorAll('.skill_right').forEach(el => el.classList.remove('hover'));
// }

// function handleInteraction(x, y) {
//     removeActiveClass();
    
//     const element = document.elementFromPoint(x, y);
//     if (element) {
//         const { skill, skillRight } = findParentElements(element);
//         console.log("skill " + skill)
//         console.log("skill " + skillRight)
//         if (skill) {
//             skill.classList.add('hover');
//         }
//         if (skillRight) {
//             skillRight.classList.add('hover');
//         }
//     }
// }

function handleTouch(event) {
    event.preventDefault(); // Prevent default touch behavior
    const touch = event.touches[0]; // Get the first touch point
    findParentElements(touch.clientX, touch.clientY);
}
function handleMouse(event) {
    // console.log("handleMouse")
    findParentElements(event.clientX, event.clientY);
    // handleInteraction(event.clientX, event.clientY);
}

skillContainer.addEventListener('touchstart', handleTouch);
// skillContainer.addEventListener('touchmove', handleTouch);
// skillContainer.addEventListener('touchend', removeActiveClass);

skillContainer.addEventListener('mousemove', handleMouse);
// skillContainer.addEventListener('mouseleave', removeActiveClass);