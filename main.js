document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');
    const revealElements = document.querySelectorAll('.reveal-up');

    // Header scroll effect
    const handleScroll = () => {
        // If we're not on the homepage, the header is always "scrolled" for visibility
        const isHomePage = window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('HY/');
        
        if (window.scrollY > 50 || !isHomePage) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    // Reveal on scroll using Intersection Observer
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // observer.unobserve(entry.target); // Keep observing for continuous feel
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // Smooth page transitions (Optional, enhances Antigravity feel)
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.6s ease-in-out';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 50);
});
