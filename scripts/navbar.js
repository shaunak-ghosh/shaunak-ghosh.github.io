const toggleButton = document.getElementsByClassName('toggle-btn')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const navBar = document.getElementById('nav-bar')
const list = document.getElementById('list')
toggleButton.addEventListener('click', () => {
        console.log("on")
        navbarLinks.classList.toggle('active')
        navBar.classList.toggle('active')
        list.classList.toggle('active')
})