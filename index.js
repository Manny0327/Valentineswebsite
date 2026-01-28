// Login form validation
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('error-message');
    
    // Correct credentials
    const VALID_USERNAME = 'ashley&manny4L';
    const VALID_PASSWORD = '07282025';
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // Check if credentials match
        if (username === VALID_USERNAME && password === VALID_PASSWORD) {
            // Successful login - redirect to letter page
            window.location.href = '/letter.html';
        } else {
            // Show error message
            errorMessage.textContent = 'Invalid username or password';
            errorMessage.style.display = 'block';
            
            // Clear the error message after 3 seconds
            setTimeout(() => {
                errorMessage.style.display = 'none';
            }, 3000);
            
            // Shake animation for feedback
            loginForm.classList.add('shake');
            setTimeout(() => {
                loginForm.classList.remove('shake');
            }, 500);
        }
    });
    
    // Clear error message when user starts typing
    document.getElementById('username').addEventListener('input', function() {
        errorMessage.style.display = 'none';
    });
    
    document.getElementById('password').addEventListener('input', function() {
        errorMessage.style.display = 'none';
    });
});