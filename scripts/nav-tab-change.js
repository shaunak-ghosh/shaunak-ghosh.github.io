let section = document.querySelectorAll('section');
let navTab = document.querySelectorAll('nav div a');
window.onscroll = () => function()
{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                navTab.classList.add('active');
            });
        };
    });
};