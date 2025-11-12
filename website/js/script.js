// Loaded & Locked In Training Academy - Main Script

document.addEventListener('DOMContentLoaded', function() {
    // Update year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Mobile menu toggle
    initializeMobileMenu();
    
    // Smooth scroll for navigation
    initializeSmoothScroll();
    
    // Details element styling
    initializeDetailsElements();
});

/**
 * Initialize mobile menu toggle functionality
 */
function initializeMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNav = document.getElementById('mobile-nav');
    
    if (!mobileMenuBtn || !mobileNav) return;
    
    mobileMenuBtn.addEventListener('click', function() {
        const expanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', String(!expanded));
        mobileNav.classList.toggle('hidden');
    });
    
    // Close menu when a link is clicked
    const mobileLinks = mobileNav.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
            mobileNav.classList.add('hidden');
        });
    });
}

/**
 * Initialize smooth scroll behavior for anchor links
 */
function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (!target) return;
            
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
}

/**
 * Initialize details elements with custom styling
 */
function initializeDetailsElements() {
    const details = document.querySelectorAll('details');
    
    details.forEach(detail => {
        detail.addEventListener('toggle', function() {
            const summary = this.querySelector('summary');
            const span = summary.querySelector('span');
            
            if (this.open) {
                span.textContent = '−';
            } else {
                span.textContent = '+';
            }
        });
    });
}

/**
 * Scroll to contact section from CTA button
 */
function scrollToContact() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        contactSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

/**
 * Form submission handler (if needed in future)
 */
function handleFormSubmit(e) {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted');
}

/**
 * Add scroll animation to elements
 */
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    observer.observe(section);
});
