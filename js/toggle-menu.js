// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the navbar toggler button and the collapse element
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.collapse.navbar-collapse');

    // Check if the elements exist
    if (navbarToggler && navbarCollapse) {
        // Add click event listener to the toggler button
        navbarToggler.addEventListener('click', function() {
            // Toggle the 'show' class on the collapse element
            navbarCollapse.classList.toggle('show');
            
            // Toggle the 'aria-expanded' attribute on the button
            const isExpanded = navbarToggler.getAttribute('aria-expanded') === 'true';
            navbarToggler.setAttribute('aria-expanded', !isExpanded);
        });

        // Close the menu when a nav link is clicked (better mobile experience)
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                // Only close if the navbar is expanded (mobile view)
                if (window.innerWidth < 992) { // Bootstrap lg breakpoint
                    navbarCollapse.classList.remove('show');
                    navbarToggler.setAttribute('aria-expanded', 'false');
                }
            });
        });
    }
});