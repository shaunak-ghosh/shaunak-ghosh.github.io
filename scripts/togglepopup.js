var popup = document.getElementById('popupContainer');
var popupTitle = document.getElementById("popup-title");
var popupContent = document.getElementById("popup-content");
var closeButton = document.getElementById('close');
var popupWindow = document = document.getElementById("popup-window")

function showPopup(title) {
    
    popupTitle.innerText = title;
    //popupTitle.style.backgroundColor = "red";
    popup.style.display = 'block';

    closeButton.onclick = function() {
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
    if(title === 'Typography')
    {
        popupWindow.style.width = 'max-content';
        popupContent.style.overflowY = 'scroll';
        popupContent.style.textAlign = 'center';
        content = '<p style="font-size:25px; text-align: left; margin-bottom: 5%; filter:blur(0)">Some Typography designs...</p>' +
                    '<br>' + '<div>' +
                    '<img style="height: 100%; width: 100%; margin-bottom: 3%" class="image-content box" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/cd9471168280493.6437b21ba0444.png">' + 
                    '<br>' + 
                    '<img style="height: 100%; width: 100%; margin-bottom: 3%" class="image-content box" src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/7cf038168280493.6437b21ba3881.png">' +
                    '<br>' + 
                    '<img style="height: 100%; width: 100%; margin-bottom: 3%" class="image-content box" src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b54e23168280493.6437b21ba1190.jpg">' +
                    '<br>' + 
                    '<img style="height: 100%; width: 100%; margin-bottom: 3%" class="image-content box" src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/9e8fca168280493.6437b21ba1c5a.jpg">' + 
                    '</div>' + 
                    '<p style="text-align: left; font-size: 20px;"><a href="https://www.behance.net/gallery/168280493/Typography-Brand-identity">View this on Behance</a></p>';
    }
    if(title === 'Logofolio')
    {
        popupWindow.style.width = 'max-content';
        popupContent.style.overflowY = 'scroll';
        popupContent.style.textAlign = 'center';
        content = '<p style="font-size:25px; text-align: left; margin-bottom: 5%; filter:blur(0)">Some Logos I designed as personal work last year...</p>' +
                    '<br>' + '<div>' +
                    '<img style="height: 100%; width: 100%; margin-bottom: 3%" class="image-content box" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/1a9419167076873.6423343eefeb0.png">' + 
                    '<br>' + 
                    '<img style="height: 100%; width: 100%; margin-bottom: 3%" class="image-content box" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/e314f5167076873.6423144d1327e.png">' +
                    '<br>' + 
                    '<img style="height: 100%; width: 100%; margin-bottom: 3%" class="image-content box" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/3f5c96167076873.6423144d13e4d.png">' +
                    '<br>' + 
                    '<img style="height: 100%; width: 100%; margin-bottom: 3%" class="image-content box" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/f0e58d167076873.6423144d15ba3.png">' +
                    '<br>' + 
                    '<img style="height: 100%; width: 100%; margin-bottom: 3%" class="image-content box" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/d976b3167076873.6423144d17782.png">' +
                    '<br>' + 
                    '<img style="height: 100%; width: 100%; margin-bottom: 3%" class="image-content box" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/e0e184167076873.6423144d14db3.png">' + 
                    '</div>' + 
                    '<p style="text-align: left; font-size: 20px;"><a href="https://www.behance.net/gallery/167076873/Logofolio-2023-Vol-1">View this on Behance</a></p>';
    }
    if(title === 'Pharm-Care')
    {
        popupWindow.style.width = 'max-content';
        popupContent.style.overflowY = 'scroll';
        popupContent.style.textAlign = 'center';
        content = '<p style="font-size:25px; text-align: left; margin-bottom: 5%; filter:blur(0)">A magazine I worked on as a personal work</p>' +
                    '<br>' + '<div>' +
                    '<img style="height: 100%; width: 100%; margin-bottom: 3%" class="image-content box" src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0a44a2167319465.6426c2807e9b2.png">' + 
                    '<br>' + 
                    '<img style="height: 100%; width: 100%; margin-bottom: 3%" class="image-content box" src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/59a271167319465.6426c28079be9.png">' +
                    '<br>' + 
                    '<img style="height: 100%; width: 100%; margin-bottom: 3%" class="image-content box" src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/276aef167319465.6426c2807bc8e.png">' +
                    '<br>' + 
                    '<img style="height: 100%; width: 100%; margin-bottom: 3%" class="image-content box" src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2accc1167319465.6426c2807f6f8.png">' +
                    '<br>' + 
                    '<img style="height: 100%; width: 100%; margin-bottom: 3%" class="image-content box" src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/65caf3167319465.6426c2807cc8f.png">' + 
                    '</div>' + 
                    '<p style="text-align: left; font-size: 20px;"><a href="https://www.behance.net/gallery/167076873/Logofolio-2023-Vol-1">View this on Behance</a></p>';
    }
    if(title === 'Winter Snow')
    {
        popupWindow.style.width = 'max-content';
        popupContent.style.textAlign = 'center';
        popupContent.style.overflowY = 'hidden';
        content = '<img style="height: 100%;" class="image-content box" src="https://cdna.artstation.com/p/assets/images/images/070/844/180/large/shaunak-ghosh-winter-snow.jpg?1703704109">';
    }
    if(title === 'Chief')
    {
        popupWindow.style.width = 'max-content';
        popupContent.style.textAlign = 'center';
        popupContent.style.overflowY = 'hidden';
        content = '<img style="height: 100%;" class="image-content box" src="assets/work/illustrations/2023/chief.jpg">';
    }
    if(title === 'Swinging through New York')
    {
        popupWindow.style.width = 'max-content';
        popupContent.style.textAlign = 'center';
        popupContent.style.overflowY = 'hidden';
        content = '<img style="height: 100%;" class="image-content box" src="https://64.media.tumblr.com/4678b75930d6aceb3cd440f0b694e47e/bb0fbfcc154d43b5-f0/s2048x3072/a32502219fef9e1725d7532843c2f2022e792889.jpg">';
    }
    if(title === 'Spider-Man 2099')
    {
        popupWindow.style.width = 'max-content';
        popupContent.style.textAlign = 'center';
        popupContent.style.overflowY = 'hidden';
        content = '<img style="height: 100%;" class="image-content box" src="https://cdna.artstation.com/p/assets/images/images/070/230/950/large/shaunak-ghosh-2099.jpg?1702042534">';
    }
    if(title === 'Woman with greys')
    {
        popupWindow.style.width = 'max-content';
        popupContent.style.textAlign = 'center';
        popupContent.style.overflowY = 'hidden';
        content = '<img style="height: 100%;" class="image-content box" src="https://64.media.tumblr.com/ec26ea016282788b93f5861825ae93bb/32702db007ff36e3-b2/s2048x3072/9e24d9431bae9f79d7f5ef8ef29f4968e2b7376b.jpg">';
    }
    if(title === 'Ahsoka the white')
    {
        popupWindow.style.width = 'fit-content';
        popupContent.style.textAlign = 'center';
        popupContent.style.overflowY = 'scroll';
        content = '<div>' +
                    '<img style="height: 100%; width: 100%; margin-bottom: 3%" class="image-content box" src="https://cdnb.artstation.com/p/assets/images/images/067/969/335/large/shaunak-ghosh-ahsoka-final.jpg?1696664227">' + 
                    '<br>' + 
                    '<img style="height: 100%; width: 100%; margin-bottom: 3%" class="image-content box" src="https://cdnb.artstation.com/p/assets/images/images/067/969/331/large/shaunak-ghosh-1.jpg?1696664218">' +
                    '<br>' + 
                    '<img style="height: 100%; width: 100%; margin-bottom: 3%" class="image-content box" src="https://cdnb.artstation.com/p/assets/images/images/067/969/349/large/shaunak-ghosh-2.jpg?1696664253">' +
                    '<br>' + 
                    '<img style="height: 100%; width: 100%; margin-bottom: 3%" class="image-content box" src="https://cdna.artstation.com/p/assets/images/images/067/969/340/large/shaunak-ghosh-sketch.jpg?1696664237">' + 
                    '</div>' + 
                    '<p style="text-align: left; font-size: 20px;"><a href="https://www.behance.net/gallery/168280493/Typography-Brand-identity">View this on Behance</a></p>';
    }
    if(title === 'Xamira (character sheet)')
    {
        popupWindow.style.width = 'fit-content';
        popupContent.style.textAlign = 'center';
        popupContent.style.overflowY = 'scroll';
        content = '<div>' +
                    '<img style="height: 100%; width: 100%; margin-bottom: 3%" class="image-content box" src="https://cdna.artstation.com/p/assets/images/images/068/318/296/large/shaunak-ghosh-wand-girl.jpg?1697531154">' + 
                    '<br>' + 
                    '<img style="height: 100%; width: 100%; margin-bottom: 3%" class="image-content box" src="https://cdna.artstation.com/p/assets/images/images/068/318/300/large/shaunak-ghosh-wankd-girl.jpg?1697531161">' +
                    '<br>' + 
                    '<img style="height: 100%; width: 100%; margin-bottom: 3%" class="image-content box" src="https://cdnb.artstation.com/p/assets/images/images/068/318/319/large/shaunak-ghosh-wand-2girl.jpg?1697531187">' +
                    '<br>' + 
                    '<img style="height: 100%; width: 100%; margin-bottom: 3%" class="image-content box" src="https://cdnb.artstation.com/p/assets/images/images/068/318/329/large/shaunak-ghosh-wand-girl1.jpg?1697531196">' + 
                    '<br>' + 
                    '<img style="height: 100%; width: 100%; margin-bottom: 3%" class="image-content box" src="https://cdnb.artstation.com/p/assets/images/images/068/318/313/large/shaunak-ghosh-wansd-girl.jpg?1697531177">' + 
                    '<br>' + 
                    '<img style="height: 100%; width: 100%; margin-bottom: 3%" class="image-content box" src="https://cdnb.artstation.com/p/assets/images/images/068/318/305/large/shaunak-ghosh-wadnd-girl.jpg?1697531168">' + 
                    '</div>' + 
                    '<p style="text-align: left; font-size: 20px;"><a href="https://www.behance.net/gallery/168280493/Typography-Brand-identity">View this on Behance</a></p>';
    }
    if(title === 'Low Poly Man')
    {
        popupWindow.style.width = 'max-content';
        popupContent.style.textAlign = 'center';
        popupContent.style.overflowY = 'hidden';
        content = '<img style="height: 100%" class="image-content box" src="assets/work/illustrations/2023/low_poly_man.jpg">';
    }
    if(title === 'Dwarf\'s Journey')
    {
        popupWindow.style.width = 'max-content';
        popupContent.style.textAlign = 'left';
        popupContent.style.overflowY = 'scroll';
        content = '<img class="box" style="margin-bottom: 5%;" src="assets/work/gamedev/dj.jpg">' + 
                    '<br>' +
                    '<span style="font-size:30px; font-weight: bold; filter:blur(0)">Dwarf\'s Journey</span>' + 
                    '<br>' +
                    '<p style="margin-top: 2%;font-size:20px; filter:blur(0); margin-bottom: 5%;">A platformer game where a tiny dwarf embarks on a journey in a dangerous, yet beautiful pixelart world</p>' + 
                    
                    '<p style="margin-top: 2%;font-size:20px; filter:blur(0); margin-bottom: 2%;">This game is being built using Unity engine and C#, it is still under development</p>' + 
                    '<br>' + 
                    '<span>Follow on Twitter</span>' + 
                    '<br>' + 
                    '<span>Follow on Instagram</span>';
    }
    popupContent.innerHTML = content;
    window.addEventListener('keydown', handleKeyDown);
}