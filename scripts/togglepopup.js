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
                    '<p class="suggest" style="background-color: rgb(244, 229, 186); margin-left:0; text-align: left; align-self: start;"><a href="https://www.behance.net/gallery/168280493/Typography-Brand-identity" class="underline" style=" border: none;">View this on Behance<img src="assets/home/external-link.svg" style="margin-left: 15px;"></a></p>';
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
                    '</div>'+
                    '<p class="suggest" style="background-color: rgb(244, 229, 186); margin-left:0; text-align: left; align-self: start;"><a href="https://www.behance.net/gallery/167076873/Logofolio-2023-Vol-1" class="underline" style=" border: none;">View this on Behance<img src="assets/home/external-link.svg" style="margin-left: 15px;"></a></p>';
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
                    '<p class="suggest" style="background-color: rgb(244, 229, 186); margin-left:0; text-align: left; align-self: start;"><a href="https://www.behance.net/gallery/167319465/Pharm-Care-Magazine-logo-and-branding" class="underline" style=" border: none;">View this on Behance<img src="assets/home/external-link.svg" style="margin-left: 15px;"></a></p>';
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
                    '<p class="suggest" style="cursor: pointer;background-color: rgb(244, 229, 186); margin-left:0; text-align: left; align-self: start;"><a href="https://rooveloft.artstation.com/projects/DvKXle?album_id=10004696" class="underline" style=" border: none;">View this on Artstation<img src="assets/home/external-link.svg" style="margin-left: 15px;"></a></p>';
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
                    '<p class="suggest" style="background-color: rgb(244, 229, 186); margin-left:0; text-align: left; align-self: start;"><a href="https://rooveloft.artstation.com/projects/el1XKG?album_id=10004699" class="underline" style=" border: none;">View this on Artstation<img src="assets/home/external-link.svg" style="margin-left: 15px;"></a></p>';
    }
    if(title === 'Woman in dark')
    {
        popupWindow.style.width = 'max-content';
        popupContent.style.textAlign = 'center';
        popupContent.style.overflowY = 'hidden';
        content = '<img style="height: 100%" class="image-content box" src="https://cdnb.artstation.com/p/assets/images/images/067/896/473/large/shaunak-ghosh-dual-light-woman.jpg?1696491324">';
    }
    if(title === 'Crater')
    {
        popupWindow.style.width = 'fit-content';
        popupContent.style.textAlign = 'center';
        popupContent.style.overflowY = 'scroll';
        content = '<div>' +
                    '<img style="height: 100%; width: 100%; margin-bottom: 3%" class="image-content box" src="https://cdnb.artstation.com/p/assets/images/images/067/794/837/large/shaunak-ghosh-crater.jpg?1696261010">' + 
                    '<br>' + 
                    '<img style="height: 100%; width: 100%; margin-bottom: 3%" class="image-content box" src="https://cdnb.artstation.com/p/assets/images/images/067/794/877/large/shaunak-ghosh-crater4.jpg?1696261049">' +
                    '<br>' + 
                    '<img style="height: 100%; width: 100%; margin-bottom: 3%" class="image-content box" src="https://cdnb.artstation.com/p/assets/images/images/067/794/855/large/shaunak-ghosh-crater1.jpg?1696261018">' +
                    '<br>' + 
                    '<img style="height: 100%; width: 100%; margin-bottom: 3%" class="image-content box" src="https://cdnb.artstation.com/p/assets/images/images/067/794/863/large/shaunak-ghosh-crater2.jpg?1696261033">' + 
                    '<br>' + 
                    '<img style="height: 100%; width: 100%; margin-bottom: 3%" class="image-content box" src="https://cdnb.artstation.com/p/assets/images/images/067/794/869/large/shaunak-ghosh-crater3.jpg?1696261042">' +
                    '</div>' +
                    '<p class="suggest" style="background-color: rgb(244, 229, 186); margin-left:0; text-align: left; align-self: start;"><a href="https://www.artstation.com/artwork/DvKlwe" class="underline" style=" border: none;">View this on Artstation<img src="assets/home/external-link.svg" style="margin-left: 15px;"></a></p>';
    }
    if(title === 'Spider-Punk(Comics)')
    {
        popupWindow.style.width = 'max-content';
        popupContent.style.textAlign = 'center';
        popupContent.style.overflowY = 'scroll';
        content = '<img style="height: 100%; margin-bottom: 3%" class="image-content box" src="https://cdna.artstation.com/p/assets/images/images/067/008/458/large/rooveloft-spider-punk.jpg?1694331946">' + 
                    '<br>' +
                    '<img style="height: 100%; margin-bottom: 3%" class="image-content box" src="https://cdna.artstation.com/p/assets/images/images/067/008/542/large/rooveloft-sketch.jpg?1694332242">' + 
                    '<br>' + 
                    '<img style="height: 100%; margin-bottom: 3%" class="image-content box" src="https://cdna.artstation.com/p/assets/images/images/067/008/546/large/rooveloft-spider-punk.jpg?1694332250"></img>'; 
    }
    if(title === 'Low Poly Man')
    {
        popupWindow.style.width = 'max-content';
        popupContent.style.textAlign = 'center';
        popupContent.style.overflowY = 'hidden';
        content = '<img style="height: 100%" class="image-content box" src="assets/work/illustrations/2023/low_poly_man.jpg">';
    }
    if(title === 'Cliffs')
    {
        popupWindow.style.width = 'fit-content';
        popupContent.style.textAlign = 'center';
        popupContent.style.overflowY = 'scroll';
        content = '<div>' +
                    '<img style="height: 100%; width: 100%; margin-bottom: 3%" class="image-content box" src="https://cdnb.artstation.com/p/assets/images/images/067/717/643/large/shaunak-ghosh-rocks.jpg?1696045957">' + 
                    '<br>' + 
                    '<img style="height: 100%; width: 100%; margin-bottom: 3%" class="image-content box" src="https://cdnb.artstation.com/p/assets/images/images/067/717/647/large/shaunak-ghosh-rocfks.jpg?1696045968">' +
                    '<br>' + 
                    '<img style="height: 100%; width: 100%; margin-bottom: 3%" class="image-content box" src="https://cdna.artstation.com/p/assets/images/images/067/717/650/large/shaunak-ghosh-5.jpg?1696045975">' +
                    '<br>' + 
                    '<img style="height: 100%; width: 100%; margin-bottom: 3%" class="image-content box" src="https://cdna.artstation.com/p/assets/images/images/067/717/652/large/shaunak-ghosh-r4ocks.jpg?1696045985">' + 
                    '<br>' + 
                    '<img style="height: 100%; width: 100%; margin-bottom: 3%" class="image-content box" src="https://cdna.artstation.com/p/assets/images/images/067/717/658/large/shaunak-ghosh-rock2s.jpg?1696045996">' + 
                    '<br>' + 
                    '<img style="height: 100%; width: 100%; margin-bottom: 3%" class="image-content box" src="https://cdna.artstation.com/p/assets/images/images/067/717/660/large/shaunak-ghosh-ocks.jpg?1696046006">' + 
                    '</div>' +
                    '<p class="suggest" style="background-color: rgb(244, 229, 186); margin-left:0; text-align: left; align-self: start;"><a href="https://www.artstation.com/artwork/aoryzk" class="underline" style=" border: none;">View this on Artstation<img src="assets/home/external-link.svg" style="margin-left: 15px;"></a></p>';
    }
    if(title === 'Practice dump')
    {
        popupWindow.style.width = 'fit-content';
        popupContent.style.textAlign = 'center';
        popupContent.style.overflowY = 'scroll';
        content = '<div>' +
                    '<img style="height: 100%; width: 100%; margin-bottom: 3%" class="image-content box" src="https://cdnb.artstation.com/p/assets/images/images/067/284/133/large/shaunak-ghosh-untitled-1-2.jpg?1695022530">' + 
                    '<br>' + 
                    '<img style="height: 100%; width: 100%; margin-bottom: 3%" class="image-content box" src="https://cdna.artstation.com/p/assets/images/images/067/253/280/large/shaunak-ghosh-376918982-270627499236165-4690595841735228305-n.jpg?1694940106">' +
                    '<br>' + 
                    '<img style="height: 100%; width: 100%; margin-bottom: 3%" class="image-content box" src="https://cdna.artstation.com/p/assets/images/images/066/815/616/large/rooveloft-colorjpg.jpg?1693849984">' + 
                    '<br>' + 
                    '<img style="height: 100%; width: 100%; margin-bottom: 3%" class="image-content box" src="https://cdnb.artstation.com/p/assets/images/images/067/253/275/large/shaunak-ghosh-375339965-1383414629277414-1764811630579831530-n.jpg?1694940101">' + 
                    '<br>' + 
                    '<img style="height: 100%; width: 100%; margin-bottom: 3%" class="image-content box" src="https://cdna.artstation.com/p/assets/images/images/067/153/054/large/rooveloft-untitled-1-1.jpg?1694676423">' + 
                    '<br>' + 
                    '<img style="height: 100%; width: 100%; margin-bottom: 3%" class="image-content box" src="https://cdna.artstation.com/p/assets/images/images/067/253/278/large/shaunak-ghosh-371472648-272791892215315-4973794584596394529-n.jpg?1694940104">' + 
                    '<br>' + 
                    '<img style="height: 100%; width: 100%; margin-bottom: 3%" class="image-content box" src="https://cdna.artstation.com/p/assets/images/images/067/253/280/large/shaunak-ghosh-376918982-270627499236165-4690595841735228305-n.jpg?1694940106">' +
                    '<br>' + 
                    '<img style="height: 100%; width: 100%; margin-bottom: 3%" class="image-content box" src="https://cdna.artstation.com/p/assets/images/images/067/253/274/large/shaunak-ghosh-378801179-988286972396455-7686516756908011341-n.jpg?1694940096">' + 
                    '</div>'
    }
    if(title === 'Yellow Mandalorian')
    {
        popupWindow.style.width = 'max-content';
        popupContent.style.textAlign = 'center';
        popupContent.style.overflowY = 'hidden';
        content = '<img style="height: 100%" class="image-content box" src="assets/work/illustrations/2022/mandalorian_character.jpg">';
    }
    if(title === 'Master Chief')
    {
        popupWindow.style.width = 'max-content';
        popupContent.style.textAlign = 'center';
        popupContent.style.overflowY = 'hidden';
        content = '<img style="height: 100%" class="image-content box" src="assets/work/illustrations/2022/Master chief.jpg">';
    }
    if(title === 'Xamira')
    {
        popupWindow.style.width = 'max-content';
        popupContent.style.textAlign = 'center';
        popupContent.style.overflowY = 'hidden';
        content = '<img style="height: 100%" class="image-content box" src="assets/work/illustrations/2022/Xamira.jpg">';
    }
    if(title === 'Flat characters')
    {
        popupWindow.style.width = 'fit-content';
        popupContent.style.textAlign = 'center';
        popupContent.style.overflowY = 'scroll';
        content = '<div>' +
                    '<img style="height: 100%; width: 100%; margin-bottom: 3%" class="image-content box" src="https://cdnb.artstation.com/p/assets/images/images/057/134/703/large/rooveloft-2d-character-art.jpg?1670910995">' + 
                    '<br>' + 
                    '<img style="height: 100%; width: 100%; margin-bottom: 3%" class="image-content box" src="https://cdnb.artstation.com/p/assets/images/images/057/134/771/large/rooveloft-happy-man.jpg?1670911227">' +
                    '<br>' + 
                    '<img style="height: 100%; width: 100%; margin-bottom: 3%" class="https://cdna.artstation.com/p/assets/images/images/057/134/776/large/rooveloft-man-listening-to-music.jpg?1670911240">' +
                    '<br>' + 
                    '<img style="height: 100%; width: 100%; margin-bottom: 3%" class="image-content box" src="https://cdnb.artstation.com/p/assets/images/images/057/134/777/large/rooveloft-math-teacher.jpg?1670911251">' + 
                    '<br>' + 
                    '<img style="height: 100%; width: 100%; margin-bottom: 3%" class="image-content box" src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/4c6549162347367.63d3f6b405e28.jpg">' + 
                    '</div>' +
                    '<p class="suggest" style="background-color: rgb(244, 229, 186); margin-left:0; text-align: left; align-self: start;"><a href="https://www.artstation.com/artwork/aoryzk" class="underline" style=" border: none;">View this on Artstation<img src="assets/home/external-link.svg" style="margin-left: 15px;"></a></p>';
    }
    if(title === 'Dwarf')
    {
        popupWindow.style.width = 'max-content';
        popupContent.style.textAlign = 'center';
        popupContent.style.overflowY = 'hidden';
        content = '<img style="height: 100%" class="image-content box" src="assets/work/illustrations/2022/dwarf.jpg">';
    }
    if(title === 'Boba Fett')
    {
        popupWindow.style.width = 'max-content';
        popupContent.style.textAlign = 'center';
        popupContent.style.overflowY = 'hidden';
        content = '<img style="height: 100%" class="image-content box" src="assets/work/illustrations/2022/boba-fett.jpg">';
    }
    if(title === 'Grumpy Man')
    {
        popupWindow.style.width = 'max-content';
        popupContent.style.textAlign = 'center';
        popupContent.style.overflowY = 'hidden';
        content = '<img style="height: 100%" class="image-content box" src="assets/work/illustrations/2022/green_suit_man.jpg">';
    }
    if(title === 'Low Poly Woman')
    {
        popupWindow.style.width = 'max-content';
        popupContent.style.textAlign = 'center';
        popupContent.style.overflowY = 'hidden';
        content = '<img style="height: 100%" class="image-content box" src="assets/work/illustrations/2022/Face_poly_small.jpg">';
    }
    if(title === 'Venom')
    {
        popupWindow.style.width = 'max-content';
        popupContent.style.textAlign = 'center';
        popupContent.style.overflowY = 'hidden';
        content = '<img style="height: 100%" class="image-content box" src="assets/work/illustrations/2022/venom.jpg">';
    }
    if(title === 'Spaceman vs eye monster')
    {
        popupWindow.style.width = 'max-content';
        popupContent.style.textAlign = 'center';
        popupContent.style.overflowY = 'hidden';
        content = '<img style="height: 100%" class="image-content box" src="assets/work/illustrations/2022/spaceman.jpg">';
    }
    if(title === 'Doraemon and friends')
    {
        popupWindow.style.width = 'max-content';
        popupContent.style.textAlign = 'center';
        popupContent.style.overflowY = 'hidden';
        content = '<img style="height: 100%" class="image-content box" src="assets/work/illustrations/2022/doraemon.jpg">';
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
                    '<p class="suggest" style="background-color: rgb(244, 229, 186); margin-left:0; text-align: left; align-self: start;">Follow me on&emsp;<a href="https://twitter.com/Rooveloft" class="underline" style=" border: none;">Twitter<img src="assets/home/external-link.svg" style="margin-left: 15px;"></a>' + ' and&emsp;' + '<a href="https://twitter.com/Rooveloft" class="underline" style=" border: none;"> Instagram<img src="assets/home/external-link.svg" style="margin-left: 15px;"></a></p>';
    }
    if(title === 'Wizard Staff')
    {
        popupWindow.style.width = 'fit-content';
        popupContent.style.textAlign = 'center';
        popupContent.style.overflowY = 'scroll';
        content = '<div>' +
                    '<img style="height: 100%; width: 100%; margin-bottom: 3%" class="image-content box" src="https://cdna.artstation.com/p/assets/images/images/070/198/274/large/shaunak-ghosh-stx.jpg?1701964805">' + 
                    '<br>' + 
                    '<img style="height: 100%; width: 100%; margin-bottom: 3%" class="image-content box" src="https://cdna.artstation.com/p/assets/images/images/070/198/198/large/shaunak-ghosh-screenshot-78.jpg?1701964716">' +
                    '<br>' + 
                    '<img style="height: 100%; width: 100%; margin-bottom: 3%" class="image-content box" src="https://cdna.artstation.com/p/assets/images/images/070/198/200/large/shaunak-ghosh-screenshot-79.jpg?1701964720">' +
                    '<br>' + 
                    '<img style="height: 100%; width: 100%; margin-bottom: 3%" class="image-content box" src="https://cdnb.artstation.com/p/assets/images/images/070/198/197/large/shaunak-ghosh-screenshot-82.jpg?1701964712">' + 
                    '<br>' + 
                    '<img style="height: 100%; width: 100%; margin-bottom: 3%" class="image-content box" src="https://cdnb.artstation.com/p/assets/images/images/070/198/201/large/shaunak-ghosh-screenshot-80.jpg?1701964723">' + 
                    '<br>' + 
                    '<img style="height: 100%; width: 100%; margin-bottom: 3%" class="image-content box" src="https://cdnb.artstation.com/p/assets/images/images/070/198/205/large/shaunak-ghosh-screenshot-81.jpg?1701964730">' + 
                    '</div>' +
                    '<p class="suggest" style="background-color: rgb(244, 229, 186); margin-left:0; text-align: left; align-self: start;"><a href="https://www.artstation.com/artwork/8bgqaQ" class="underline" style=" border: none;">View this on Artstation<img src="assets/home/external-link.svg" style="margin-left: 15px;"></a></p>';
    }
    if(title === 'Pillows')
    {
        popupWindow.style.width = 'fit-content';
        popupContent.style.textAlign = 'center';
        popupContent.style.overflowY = 'scroll';
        content = '<div>' +
                    '<img style="height: 100%; width: 100%; margin-bottom: 3%" class="image-content box" src="https://cdna.artstation.com/p/assets/images/images/068/729/514/large/shaunak-ghosh-coushion-render.jpg?1698508448">' + 
                    '<br>' + 
                    '<img style="height: 100%; width: 100%; margin-bottom: 3%" class="image-content box" src="https://cdna.artstation.com/p/assets/images/images/068/729/490/large/shaunak-ghosh-coushion.jpg?1698508429">' +
                    '<br>' + 
                    '<img style="height: 100%; width: 100%; margin-bottom: 3%" class="image-content box" src="https://cdna.artstation.com/p/assets/images/images/068/729/494/large/shaunak-ghosh-coushion1.jpg?1698508433">' +
                    '<br>' + 
                    '<img style="height: 100%; width: 100%; margin-bottom: 3%" class="image-content box" src="https://cdnb.artstation.com/p/assets/images/images/068/729/497/large/shaunak-ghosh-coushion2.jpg?1698508436">' + 
                    '</div>' +
                    '<p class="suggest" style="background-color: rgb(244, 229, 186); margin-left:0; text-align: left; align-self: start;"><a href="https://www.artstation.com/artwork/DvWK3E" class="underline" style=" border: none;">View this on Artstation<img src="assets/home/external-link.svg" style="margin-left: 15px;"></a></p>';
    }
    if(title === 'Soda Can')
    {
        popupWindow.style.width = 'fit-content';
        popupContent.style.textAlign = 'center';
        popupContent.style.overflowY = 'scroll';
        content = '<div>' +
                    '<img style="height: 100%; width: 100%; margin-bottom: 3%" class="image-content box" src="https://cdnb.artstation.com/p/assets/images/images/068/599/917/large/shaunak-ghosh-can-render.jpg?1698217736">' + 
                    '<br>' + 
                    '<img style="height: 100%; width: 100%; margin-bottom: 3%" class="image-content box" src="https://cdna.artstation.com/p/assets/images/images/068/599/920/large/shaunak-ghosh-can.jpg?1698217174">' +
                    '<br>' + 
                    '<img style="height: 100%; width: 100%; margin-bottom: 3%" class="image-content box" src="https://cdnb.artstation.com/p/assets/images/images/068/599/999/large/shaunak-ghosh-can-top.jpg?1698217442">' +
                    '<br>' + 
                    '<img style="height: 100%; width: 100%; margin-bottom: 3%" class="image-content box" src="https://cdna.artstation.com/p/assets/images/images/068/600/012/large/shaunak-ghosh-tap.jpg?1698217466">' + 
                    '</div>' +
                    '<p class="suggest" style="background-color: rgb(244, 229, 186); margin-left:0; text-align: left; align-self: start;"><a href="https://www.artstation.com/artwork/Xg0Plw" class="underline" style=" border: none;">View this on Artstation<img src="assets/home/external-link.svg" style="margin-left: 15px;"></a></p>';
    }
    
    popupContent.innerHTML = content;
    window.addEventListener('keydown', handleKeyDown);
}