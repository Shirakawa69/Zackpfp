// Project Image Modal
const img = document.getElementById('clinic-img');
const modal = document.getElementById('img-modal');
img.onclick = function() {
    modal.style.display = "flex";
}
modal.onclick = function(e) {
    if (e.target === modal) {
        modal.style.display = "none";
    }
}

// Hire Modal
const hireBtn = document.getElementById('hireBtn');
const hireModal = document.getElementById('hire-modal');
const closeHireModal = document.getElementById('close-hire-modal');
hireBtn.onclick = function() {
    hireModal.style.display = "flex";
}
closeHireModal.onclick = function() {
    hireModal.style.display = "none";
}
hireModal.onclick = function(e) {
    if (e.target === hireModal) {
        hireModal.style.display = "none";
    }
}

// Profile Image Modal
const pfpImg = document.getElementById('pfp-img');
const pfpModal = document.getElementById('pfp-modal');
pfpImg.onclick = function() {
    pfpModal.style.display = "flex";
}
pfpModal.onclick = function(e) {
    if (e.target === pfpModal) {
        pfpModal.style.display = "none";
    }
}

// Navigation active link highlighting based on scroll position
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

function activateNavLinkOnScroll() {
    let scrollY = window.pageYOffset;
    let windowHeight = window.innerHeight;
    let documentHeight = document.documentElement.scrollHeight;

    if (scrollY < 50) {
        // At top of page, remove all active highlights
        navLinks.forEach(link => link.classList.remove('active'));
    } else if (scrollY + windowHeight >= documentHeight - 5) {
        // At bottom of page, highlight contact section
        navLinks.forEach(link => link.classList.remove('active'));
        const contactLink = document.querySelector('.nav-links a[href="#contact"]');
        if (contactLink) contactLink.classList.add('active');
    } else {
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 60; // Adjust offset for header height
            const sectionId = section.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
}

window.addEventListener('scroll', activateNavLinkOnScroll);

// Initial call to set active link on page load
activateNavLinkOnScroll();

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navLinksMenu = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinksMenu.classList.toggle('active');
    const icon = mobileMenuBtn.querySelector('i');
    icon.className = navLinksMenu.classList.contains('active') ? 'fas fa-times' : 'fas fa-bars';
});

// Update active nav link on click
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        // Close mobile menu after click
        if (navLinksMenu.classList.contains('active')) {
            navLinksMenu.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            icon.className = 'fas fa-bars';
        }
    });
});

// Scroll Animation Observer
const observerOptions = {
    threshold: 0.3,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe animated elements
document.querySelectorAll('.scale-in').forEach(el => {
    observer.observe(el);
});

// Back to Top Button
const backToTopBtn = document.getElementById('back-to-top');

// Show/hide button based on scroll position
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

// Smooth scroll to top when clicked
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    // Update nav highlight after scrolling to top
    // Use a timeout to allow scroll to complete
    setTimeout(() => {
        activateNavLinkOnScroll();
    }, 300);
});


