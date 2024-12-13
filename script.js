document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Email validation
    if (!email.includes("@")) {
        alert("@ is missing in the email");
        return;
    }
    // Password validation
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }

    // If all validations pass, show success message and clear fields
    alert('Login successful!');
    // Clear input fields
    document.getElementById('login-form').reset();
    // Redirect to another page
    window.location.href = 'detailedpage.html'; // Change 'success.html' to your desired URL
});

