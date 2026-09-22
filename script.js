// 1. SIGNUP LOGIC

const signupButton = document.getElementById('signup-button');

if (signupButton) {
    signupButton.addEventListener('click', (e) => {
        e.preventDefault(); // Reload hone se rokna 🛑

        const usernameInput = document.getElementById('username');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');

        // getting values

        const username = usernameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // checks

        if (username === "" || email === "" || password === "") {
            alert("Please fill up all fields ⚠️");
        } else {
            localStorage.setItem("username", username);
            localStorage.setItem("email", email);
            localStorage.setItem("password", password);

            alert("Congratulations, You successfully created a new account! 🎉");
        }
    });
}

// 2. LOGIN LOGIC

const loginForm = document.getElementById('loginForm');

if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault(); // stopping the Reload

        const loginEmailInput = document.getElementById('email');
        const loginPasswordInput = document.getElementById('password');

        const enteredEmail = loginEmailInput.value.trim();
        const enteredPassword = loginPasswordInput.value.trim();

        // getting saved credentials from LocalStorage
        const savedEmail = localStorage.getItem("email");
        const savedPassword = localStorage.getItem("password");

        // Logic Check 
        if (enteredEmail === savedEmail && enteredPassword === savedPassword) {
            // Session flag set karna zaroori hai dashboard redirect se pehle!
            localStorage.setItem("isLoggedIn", "true");
            
            alert('Logged in successfully! 🎉');
            window.location.href = "dashboard.html"; 
        } else {
            alert("Email or password is incorrect ❌");
        }
    });
}

// show password feature

const togglePassword = document.getElementById('togglePassword');
const loginPasswordInput = document.getElementById('password');

if (togglePassword) {
    togglePassword.addEventListener('click', () => {
        // 1. Password type toggle 
        const type = loginPasswordInput.type === 'password' ? 'text' : 'password';
        loginPasswordInput.type = type;

        togglePassword.classList.toggle('fa-eye');
        togglePassword.classList.toggle('fa-eye-slash');
    });
}


// Dashboard 

const welcomeMessage = document.getElementById('welcomeMessage');
const useremail = document.getElementById('useremail');


if (welcomeMessage) {
    // LocalStorage se saved username nikalna
    const savedUsername = localStorage.getItem("username");

    if (savedUsername) {
        welcomeMessage.textContent = `Welcome, ${savedUsername}! 👋`;
    } else {
        welcomeMessage.textContent = "Welcome, Guest!";
    }
}

if (useremail) {
    // localstorage se saved useremail nikalna
    const savedUseremail = localStorage.getItem("email")

    if (savedUseremail) {
        useremail.textContent = `Your email is: ${savedUseremail}! 👋`;
    } else {
        useremail.textContent = "Email not found ❌";
    }
}    

// logout button

const logoutbtn = document.getElementById("logoutBtn")

if(logoutbtn){
    logoutbtn.addEventListener("click", () =>{
        localStorage.removeItem('isLoggedIn')

        window.location.href = "index.html"
    })
}

// session
// checking if we r on dashboard
if (window.location.pathname.includes("dashboard.html")) {
    if (localStorage.getItem("isLoggedIn") !== "true") {
        window.location.href = "index.html";
    }
}