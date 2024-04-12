const loginBtn = document.getElementById('loginButton');

localStorage.setItem("username", "saad@linkup.com");
localStorage.setItem("password", "jashanpreet");


    loginBtn.addEventListener('click', login);

function login() {
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    // Get user's input
    const username = document.getElementById('email-phone').value.trim();
    const password = document.getElementById('password').value.trim();

    if(username === storedUsername && password === storedPassword) {
        window.location.href = 'home.html';
    } else {
        document.getElementById('error-message').innerText = 'Incorrect username and/or password'; 
    }
}