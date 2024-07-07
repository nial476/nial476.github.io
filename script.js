let body = document.querySelector('body')
document.addEventListener('mousemove', (e) => {
    body.style.backgroundPositionX = e.pageX/-4 + 'px';
    body.style.backgroundPositionY = e.pageY/-4 + 'px';
})
