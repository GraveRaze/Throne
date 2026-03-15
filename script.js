// Navigation menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = hamburger.querySelector('i');
    if(navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = hamburger.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// Scroll Reveal Animations
const revealElements = document.querySelectorAll('.fade-in');

const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
};

const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const revealObserver = new IntersectionObserver(revealCallback, revealOptions);

revealElements.forEach(el => {
    revealObserver.observe(el);
});

// Copy Discord ID to clipboard
const copyBtn = document.querySelector('.copy-btn');
const discordId = document.querySelector('.discord-id');

if(copyBtn && discordId) {
    copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(discordId.textContent).then(() => {
            const originalIcon = copyBtn.innerHTML;
            copyBtn.innerHTML = '<i class="fas fa-check"></i>';
            copyBtn.style.color = '#4ade80';
            
            setTimeout(() => {
                copyBtn.innerHTML = originalIcon;
                copyBtn.style.color = '';
            }, 2000);
        });
    });
}

// Navbar background change on scroll
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(13, 10, 19, 0.98)';
        navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.5)';
        navbar.style.padding = '0.8rem 5%';
    } else {
        navbar.style.background = 'rgba(13, 10, 19, 0.9)';
        navbar.style.boxShadow = 'none';
        navbar.style.padding = '1rem 5%';
    }
});

// Add glitch effect interval to title
const title = document.querySelector('.glitch');
if(title) {
    setInterval(() => {
        title.style.textShadow = `
            ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px 0 rgba(255,0,255,0.8),
            ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px 0 rgba(0,255,255,0.8)
        `;
        setTimeout(() => {
            title.style.textShadow = '0 0 20px var(--primary-color)';
        }, 50);
    }, 3000);
}
