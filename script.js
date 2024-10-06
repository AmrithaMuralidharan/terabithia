document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the form from submitting

    // Perform any login validation or authentication here if needed

    // Redirect to search.html after successful validation
    window.location.href = 'search.html';
});
