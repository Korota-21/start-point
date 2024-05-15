// Function to include navbar HTML
function includeNavbar() {
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-container').innerHTML = data;
            setActiveLink(); // Call function to set active link
        });
}

// Function to set active link
function setActiveLink() {
    var currentPath = window.location.pathname; // Get current page path
    var navLinks = document.querySelectorAll('.navbar-nav .nav-link'); // Select all navigation links
    navLinks.forEach(function (link) {
        if (link.getAttribute('href') === currentPath) { // Check if link matches current path
            link.classList.add('active'); // Add active class to parent <li> element
        }
    });
}

// Call the function to include navbar
includeNavbar();