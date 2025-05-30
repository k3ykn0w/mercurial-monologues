
window.addEventListener('scroll', () => {
    const title = document.getElementById('site-title');
    title.style.opacity = 1;
    title.style.transform = 'translateY(0px)';
});

function navigateTo(page) {
    window.location.href = page;
}
