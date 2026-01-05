const currentYearEL = document.getElementById('currentYear')
currentYearEL.textContent = new Date().getFullYear();

const navEL = document.getElementById('nav');
const navToggleEL = document.querySelector('.nav-toggle');
const navLinksEL = document.querySelector('.nav-links');
const topLinkEL = document.querySelector('.top-link');
const navCenterEL = document.querySelector('.nav-center');

navToggleEL.addEventListener('click', function() {
    navLinksEL.classList.toggle('show-links');
    navEL.classList.toggle('show-links');
    const iconEL = this.querySelector('i');
    if (navLinksEL.classList.contains('show-links')) {
        iconEL.classList.remove('fa-bars');
        iconEL.classList.add('fa-times');
        navToggleEL.style.color = '#1e1d1dff';
        navCenterEL.classList.remove('show-color');
    } else {
        iconEL.classList.remove('fa-times');
        iconEL.classList.add('fa-bars');
        navToggleEL.style.color = 'white';
        navCenterEL.classList.add('show-color');
    }
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
        if (window.innerWidth <= 768) {
            navLinksEL.classList.remove('show-links');
            navEL.classList.remove('show-links');
            const iconEL = navToggleEL.querySelector('i');
            iconEL.classList.remove('fa-times');
            iconEL.classList.add('fa-bars');
        }
    });
});


window.addEventListener('scroll', function() {
    const scrollHeightEL = window.pageYOffset;
    
    if (scrollHeightEL > 80) {
        navEL.classList.add('scrolled');
    } else {
        navEL.classList.remove('scrolled');
    }

    if (scrollHeightEL > 500) {
        topLinkEL.classList.add('show');
    } else {
        topLinkEL.classList.remove('show');
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetIdEL = this.getAttribute('href');
        if(targetIdEL === '#') return;
        
        const targetElementEL = document.querySelector(targetIdEL);
        if(targetElementEL) {
            const navHeightEL = navEL.getBoundingClientRect().height;
            const targetPositionEL = targetElementEL.offsetTop - navHeightEL;
            
            window.scrollTo({
                top: targetPositionEL,
                behavior: 'smooth'
            });
        }
    });
});
