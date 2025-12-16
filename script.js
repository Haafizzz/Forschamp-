// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const nav = document.getElementById('nav');

mobileMenuBtn.addEventListener('click', function () {
    nav.classList.toggle('active');
});

// Close mobile menu when clicking a link
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
        nav.classList.remove('active');
    });
});

// Smooth scrolling for anchor links
const anchorLinks = document.querySelectorAll('a[href^="#"]');
anchorLinks.forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll animation for cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry, index) {
        if (entry.isIntersecting) {
            setTimeout(function () {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(30px)';

                setTimeout(function () {
                    entry.target.style.transition = 'all 0.6s ease';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 50);
            }, index * 100);
        }
    });
}, observerOptions);

const competitionCards = document.querySelectorAll('.competition-card');
competitionCards.forEach(function (card) {
    observer.observe(card);
});

// Login button functionality
const loginBtn = document.querySelector('.login-btn');
loginBtn.addEventListener('click', function () {
    alert('Fitur login akan segera hadir! Pendaftaran dimulai Desember 2025.');
});

// Add scroll effect to header
let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > 100) {
        header.style.transform = 'translateY(-100%)';
    } else {
        header.style.transform = 'translateY(0)';
    }

    lastScrollTop = scrollTop;
});

// Add animation to announcement badge
const announcement = document.querySelector('.announcement');
if (announcement) {
    setInterval(function () {
        announcement.style.transform = 'scale(1.05)';
        setTimeout(function () {
            announcement.style.transform = 'scale(1)';
        }, 200);
    }, 3000);
}

// Parallax effect for hero section
window.addEventListener('scroll', function () {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');

    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = 'translateY(' + (scrolled * 0.5) + 'px)';
        hero.style.opacity = 1 - (scrolled / 700);
    }
});

// Add hover effect to logo
const logo = document.querySelector('.logo');
logo.addEventListener('mouseenter', function () {
    this.style.transform = 'rotate(360deg) scale(1.1)';
    this.style.transition = 'all 0.6s ease';
});

logo.addEventListener('mouseleave', function () {
    this.style.transform = 'rotate(0deg) scale(1)';
});

// Counter animation for numbers
function animateCounter(element, target, duration) {
    let start = 0;
    const increment = target / (duration / 16);

    const timer = setInterval(function () {
        start += increment;
        if (start >= target) {
            element.textContent = target.toLocaleString('id-ID');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start).toLocaleString('id-ID');
        }
    }, 16);
}

// Animate statistics in About section
const statsObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            const target = parseInt(entry.target.getAttribute('data-target'));
            animateCounter(entry.target, target, 2000);
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const statNumbers = document.querySelectorAll('.stat-number');
statNumbers.forEach(function (stat) {
    statsObserver.observe(stat);
});

// Initialize counters when they come into view
const counterObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            const h2Elements = entry.target.querySelectorAll('h2');
            h2Elements.forEach(function (h2) {
                const text = h2.textContent;
                const numberMatch = text.match(/[\d.]+/);
                if (numberMatch) {
                    const number = parseFloat(numberMatch[0].replace(/\./g, ''));
                    animateCounter(h2, number, 1000);
                }
            });
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const priceCards = document.querySelectorAll('#biaya .competition-card, #hadiah .competition-card');
priceCards.forEach(function (card) {
    counterObserver.observe(card);
});

console.log('🤠 OU Festival 11 - Wild West Edition loaded successfully! Yeehaw!');
console.log('🏜️ Pendaftaran dibuka sampai Januari 2026');