let isLoggedIn = false;

// Get the "Post" button
const postButton = document.getElementById("postButton");

// Function to update the post button (modify as needed)
function updatePostButton() {
    const postButton = document.getElementById('postButton');
    if (postButton) {
        postButton.style.backgroundColor = 'green';
        postButton.innerText = 'Post (Active)'; 
    }
}

// When user logs in or signs up
function handleLoginOrSignup() {
    localStorage.setItem('isLoggedIn', 'true'); 
}

document.addEventListener('DOMContentLoaded', () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const postButton = document.getElementById('postButton');
    console.log("logged in");
    const documentName = window.location.pathname.split('/').pop();
    if (isLoggedIn && documentName === "forums.html") {
        postButton.classList.add('post-button.logged-in');
        postButton.classList.remove('post-button');
        console.log("logged in");
    }
    const loginButton = document.getElementById('loginBtn');
    const signupButton = document.getElementById('signupBtn');

    if (loginButton) {
        loginButton.addEventListener('click', (event) => {
            handleLoginOrSignup();
            console.log("pressed");
        });
    }

    if (signupButton) {
        signupButton.addEventListener('click', (event) => {
            handleLoginOrSignup();
        });
    }
});






