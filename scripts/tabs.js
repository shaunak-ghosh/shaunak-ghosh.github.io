var tabButtons = document.querySelectorAll(".tab-contain .button-contain button");
var tabPanels=document.querySelectorAll(".tab-contain .tab-panel");
function showPanel(panelIndex,colorCode)
{
    tabButtons.forEach(function(node)
    {
        node.style.backgroundColor = "";
        node.style.color = "";        
    });
    tabButtons[panelIndex].style.backgroundColor = colorCode;
    tabButtons[panelIndex].style.color = "black";
    //tabButtons[panelIndex].style.fontWeight = "bold";
    tabPanels.forEach(function(node){
        node.style.display = "none";
    });
    tabPanels[panelIndex].style.display = "block";
    tabPanels[panelIndex].style.backgroundColor = colorCode;
}
showPanel(0,'#a096ff');