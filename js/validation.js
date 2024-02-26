function validateForm() {
    var name = document.getElementById('name').value;
    var last_name = document.getElementById('last_name').value; 
    var email = document.getElementById('email').value;
    var numr = document.getElementById('numr').value;
    var message = document.getElementById('message').value; 
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
        document.getElementById('last_nameError').textContent = 'Please enter your last name'; 
        valid = false;
    }
    if (!email) {
        document.getElementById('emailError').textContent = 'Please enter your email';
        valid = false;
    }
    if (!numr) {
        document.getElementById('numrError').textContent = 'Please enter your phone number'; 
        valid = false;
    }
    if (!message) {
        document.getElementById('messageError').textContent = 'Please enter your message';
        valid = false;
    }

    if (valid) {
        document.getElementById('myForm').submit();
    }
}