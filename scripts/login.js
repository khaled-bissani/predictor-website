// Sign up
const newName = document.querySelector("#new-name");
const newUsername = document.querySelector("#new-username");
const newPassword = document.querySelector("#new-password");

// Submit button
const submitButton = document.querySelector("#submit");
// Login button
const loginButton = document.querySelector("#login");

submitButton.addEventListener('click',store);
loginButton.addEventListener('click',checkLogin);

//Storing name, username and password
function store()
{
    localStorage.setItem('name',newName.value)
    localStorage.setItem('username', newUsername.value)
    localStorage.setItem('password',newPassword.value)    
}

function checkLogin()
{
    // Login data
    const inputUsername = document.querySelector("#username").value;
    const inputPassword = document.querySelector("#password").value;

    //get set stored data
    let usernameStored = localStorage.getItem('username')
    let passwordStored = localStorage.getItem('password')

    if (inputUsername == usernameStored && inputPassword == passwordStored) {
        window.location.href = "index.html";
    }
    else {
        document.getElementById('username').style.borderColor = 'red';
        document.getElementById('password').style.borderColor = 'red';
    }
}