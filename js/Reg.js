const form = document.querySelector('form')
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const emailInput = document.getElementById('email');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = usernameInput.value;
    const password = passwordInput.value;
    const email = emailInput.value;
    const user = {
        username: username,
        password: password,
        email: email
    };
    localStorage.setItem(username, JSON.stringify(user));
    alert('Registration Successfull!');
    window.location.href = 'home.html';
});