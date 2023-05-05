const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if(entry.isIntersecting)
        {
            entry.classList.add('show');
        }
        else
        {
            entry.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.box');
hiddenElements.forEach((el) => observer.ebserve(el));