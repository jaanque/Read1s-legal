document.addEventListener('DOMContentLoaded', function() {
    // Get the navbar toggle button
    const navbarToggler = document.querySelector('.navbar-toggler');
    
    // Get the collapsible navbar content
    const navbarCollapse = document.querySelector('#navbarNav');
    
    // Check if elements exist
    if (navbarToggler && navbarCollapse) {
        // Add click event listener to the toggle button
        navbarToggler.addEventListener('click', function() {
            // Toggle the 'show' class on the collapsible content
            navbarCollapse.classList.toggle('show');
            
            // Toggle aria-expanded attribute
            const expanded = navbarToggler.getAttribute('aria-expanded') === 'true' || false;
            navbarToggler.setAttribute('aria-expanded', !expanded);
        });
        
        // Close the menu when a nav link is clicked (optional but useful)
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(function(navLink) {
            navLink.addEventListener('click', function() {
                // Only close if the navbar is expanded (in mobile view)
                if (window.getComputedStyle(navbarToggler).display !== 'none') {
                    navbarCollapse.classList.remove('show');
                    navbarToggler.setAttribute('aria-expanded', 'false');
                }
            });
        });
    }
});