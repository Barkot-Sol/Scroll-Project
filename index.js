const currentYearEL = document.getElementById('currentYear')
currentYearEL.textContent = new Date().getFullYear();

const nav = document.getElementById('nav');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const topLink = document.querySelector('.top-link');

navToggle.addEventListener('click', function() {
    navLinks.classList.toggle('show-links');
    nav.classList.toggle('show-links');
    const icon = this.querySelector('i');
    if (navLinks.classList.contains('show-links')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
        if (window.innerWidth <= 768) {
            navLinks.classList.remove('show-links');
            nav.classList.remove('show-links');
            const icon = navToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
});


window.addEventListener('scroll', function() {
    const scrollHeight = window.pageYOffset;
    
    if (scrollHeight > 80) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }

    if (scrollHeight > 500) {
        topLink.classList.add('show');
    } else {
        topLink.classList.remove('show');
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            const navHeight = nav.getBoundingClientRect().height;
            const targetPosition = targetElement.offsetTop - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});