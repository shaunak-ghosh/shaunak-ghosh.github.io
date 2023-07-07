var linksToggleButton = document.getElementById('links-toggle-btn');
var linksPanel = document.getElementById('links-panel');
var line1 = document.getElementsByClassName('line-1');      
linksToggleButton.addEventListener('click', function() {
    if (linksPanel.classList.contains('open') && linksToggleButton.classList.contains('cross')) 
    {
        linksPanel.classList.remove('open');
        linksToggleButton.classList.remove('open');
    } 
    else
    {
        linksPanel.classList.add('open');
        linksToggleButton.classList.add('cross');
    }
});       
linksToggleButton.addEventListener('click', function() {
    if(linksToggleButton.classList.contains('cross')) 
    {
        line1.style.visibility = 'hidden';        
    }
});
document.addEventListener('click', function(event) 
{
    var target = event.target;
    if (!linksPanel.contains(target) && !linksToggleButton.contains(target)) 
    {
        linksPanel.classList.remove('open');
        linksToggleButton.classList.remove('cross');
    }
});
//var closeButton = document.getElementById('closeButton');
var closeButton = document.getElementsByClassName('open')
closeButton.addEventListener('click', function() 
{
    linksPanel.classList.remove('open');
});