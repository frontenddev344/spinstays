function validateForm() {
    var name = document.getElementById('name').value;
    var last_name = document.getElementById('last_name').value; // Updated variable name
    var email = document.getElementById('email').value;
    var numr = document.getElementById('numr').value;
    var message = document.getElementById('message').value; // Get the value of the message field

    var valid = true;

    // Reset previous error messages
    document.querySelectorAll('.error').forEach(function (element) {
        element.textContent = '';
    });

    // Validation logic
    if (!name) {
        document.getElementById('nameError').textContent = 'Please enter your first name';
        valid = false;
    }
    if (!last_name) {
        document.getElementById('last_nameError').textContent = 'Please enter your last name'; // Updated to set the error message in 'last_nameError' div
        valid = false;
    }
    if (!email) {
        document.getElementById('emailError').textContent = 'Please enter your email';
        valid = false;
    }
    if (!numr) {
        document.getElementById('numrError').textContent = 'Please enter your phone number'; // Corrected to set the error message in 'numrError' div
        valid = false;
    }
    if (!message) {
        document.getElementById('messageError').textContent = 'Please enter your message'; // Set error message if message field is empty
        valid = false;
    }

    // If all fields are valid, you can submit the form
    if (valid) {
        document.getElementById('myForm').submit();
    }
}