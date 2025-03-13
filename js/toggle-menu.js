// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the navbar toggler button and the collapse element
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.collapse.navbar-collapse');

    // Check if the elements exist
    if (navbarToggler && navbarCollapse) {
        // We'll rely on Bootstrap's built-in toggle functionality
        // And only add our own functionality for the nav links
        
        // Close the menu when a nav link is clicked (better mobile experience)
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                // Only close if the navbar is expanded (mobile view)
                if (window.innerWidth < 992 && navbarCollapse.classList.contains('show')) { // Bootstrap lg breakpoint
                    // Use Bootstrap's collapse method to hide the menu
                    bootstrap.Collapse.getInstance(navbarCollapse).hide();
                }
            });
        });
    }
});