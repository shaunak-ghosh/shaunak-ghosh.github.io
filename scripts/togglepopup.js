var popup = document.getElementById('popupContainer');
var popupTitle = document.getElementById("popup-title");
var popupContent = document.getElementById("popup-content");
var closeButton = document.getElementById('close');
var scrollBar = document

function showPopup(title) {
    
    popup.style.display = 'block';
    popupTitle.innerText = title;

    closeButton.onclick = function(event) {
        popup.style.display = 'none';
    }
    window.onclick = function(event) {
        if (event.target == popup){
            popup.style.display = 'none';                        
        }
    }
    function handleKeyDown(event) {
        if (event.key === 'Escape') {
            if (popup.style.display == 'block')
            {
                popup.style.display = 'none';
                popup.style.transition = 'cubic-bezier(0.03, 0.6, 0.3, 1.09)';
            }
        }
    }
    var content;
    if(title === 'Low Poly Man')
    {
        popupContent.style.textAlign = 'center';
        content = '<img style="height: 100%" class="image-content" src="assets/work/illustrations/2023/low_poly_man.jpg">';
    }
    if(title === 'Dwarfs Journey')
    {
        popupContent.style.textAlign = 'left';
        content = '<header style="font-size: 35px"> A pixelart 2D platformer game</header>';
    }
    popupContent.innerHTML = content;
    window.addEventListener('keydown', handleKeyDown);
}