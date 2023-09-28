const emailInput = document.querySelector('input[type="text"][placeholder="Enter your email"]');
const phoneInput = document.querySelector('input[type="text"][placeholder="Enter your number"]');
const passwordInput = document.querySelector('input[type="password"][placeholder="Enter your password"]');
const confirmPasswordInput = document.querySelector('input[type="password"][placeholder="Confirm your password"]');

emailInput.addEventListener('blur', function () {
    const emailError = document.querySelector('.input-box:nth-child(3) .error');
    if (!isValidEmail(this.value)) {
        emailError.style.display = 'block';
    } else {
        emailError.style.display = 'none';
    }
});

phoneInput.addEventListener('blur', function () {
    const phoneError = document.querySelector('.input-box:nth-child(4) .error');
    if (this.value.length < 10) {
        phoneError.style.display = 'block';
    } else {
        phoneError.style.display = 'none';
    }
});

passwordInput.addEventListener('blur', function () {
    const passwordError = document.querySelector('.input-box:nth-child(5) .error');
    if (this.value.length < 8) {
        passwordError.style.display = 'block';
    } else {
        passwordError.style.display = 'none';
    }
});

confirmPasswordInput.addEventListener('blur', function () {
    const confirmPasswordError = document.querySelector('.input-box:nth-child(6) .error');
    if (this.value !== passwordInput.value) {
        confirmPasswordError.style.display = 'block';
    } else {
        confirmPasswordError.style.display = 'none';
    }
});

function isValidEmail(email) {
    return email.includes('@');
}




