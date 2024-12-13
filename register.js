document.getElementById('signup-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    const name = document.getElementById('name');
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

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
    // Confirm password validation
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }
    // If all validations pass, show success message and clear fields
    alert('Signup successfull!');
    // Clear input fields
    document.getElementById('signup-form').reset();
    // Redirect to another page
    window.location.href = 'detailedpage.html'; // Change 'success.html' to your desired URL
});
