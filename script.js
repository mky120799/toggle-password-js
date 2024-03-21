inputBox = document.querySelector('input');

image = document.getElementById('image');

console.log(image);

// Use onclick directly, but with a proper function definition
image.onclick = () => {
    // Assuming inputBox is defined elsewhere in your code
    if (inputBox.type == "password") {
        inputBox.type = "text";
        image.src = "assests/eye-regular.svg";
    } else {
        inputBox.type = "password";
        image.src = "assests/eye-password-hide-svgrepo-com.svg";
    }
};

