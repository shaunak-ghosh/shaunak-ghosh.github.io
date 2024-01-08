var closeButton = document.getElementById('close');
var popupTitle = document.getElementById('popup-title');
function showPopup(title) {
    var popup = document.getElementById('popupContainer');
    popup.style.display = 'block';
    popupTitle.innerText = title; //paste title of clicked element
    // Hide popup when the user clicks outside the container
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
    // Attach the event listener to the window object
    window.addEventListener('keydown', handleKeyDown);

    if(title == 'Low Poly Man')
    {console.log(title);}
}
/*function changeContent(contentID) {
    var popup = document.getElementById('popupContainer');
    popup.style.display = 'block'; //paste title of clicked element
    // Hide popup when the user clicks outside the container
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
    if (contentID === 'Low Poly Man') {
        content = '<style> .header-text{ color: red; align-text: center; font-size: 100px}</style> <span class="header-text"> Dummy text</span>';
    }
    
    popupContainer.innerHTML = content;
    window.addEventListener('keydown', handleKeyDown);
    popup.style.display = 'block';
}*/