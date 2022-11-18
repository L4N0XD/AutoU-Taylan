
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg-holder");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;
    
    if (username === "taylannoronha@cliente.com" && password === "mecontrata" || username === "3785" && password === "mecontrata") {
        window.location.replace("pages/dashboard.html");
    } else {
        loginErrorMsg.style.display = "none";
    }
})
