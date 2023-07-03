var linksToggleButton = document.getElementById('links-toggle-btn');
var linksPanel = document.getElementById('links-panel');        
linksToggleButton.addEventListener('click', function() {
    if (linksPanel.classList.contains('open')) 
    {
        linksPanel.classList.remove('open');
    } 
    else 
    {
        linksPanel.classList.add('open');
    }
});            
document.addEventListener('click', function(event) 
{
    var target = event.target;
    if (!linksPanel.contains(target) && !linksToggleButton.contains(target)) 
    {
        linksPanel.classList.remove('open');
    }
});
//var closeButton = document.getElementById('closeButton');
var closeButton = document.getElementsByClassName('open')
closeButton.addEventListener('click', function() 
{
    linksPanel.classList.remove('open');
});  