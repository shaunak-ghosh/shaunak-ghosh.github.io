
const linksToggleButton = DOCUMENT.getElementById('links-toggle-btn')[0]
const linksPanel = document.getElementById('links-panel')
linksToggleButton.addEventListener('click', () => {
        console.log("on")
        linksPanel.classList.toggle('active')
        /*navbarLinks.classList.toggle('active')
        navBar.classList.toggle('active')
        list.classList.toggle('active')*/
})