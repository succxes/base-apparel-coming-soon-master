document.getElementById("btn").addEventListener("click", send);

function send() {
    const email = document.getElementById("email");
    const iconError = document.getElementById("icon-error");

    // Check if email input exists
    if (!email) {
        console.error("Email input element not found");
        return; // Exit function if email input is not found
    }

    // Check if icon error element exists
    if (!iconError) {
        console.error("Icon error element not found");
        return; // Exit function if icon error element is not found
    }

    // Check email validity
    if (!email.checkValidity()) {
        // Display error message
        document.getElementById("msg").innerHTML = "Please provide a valid email";

        // Show error icon
        if (!iconError.classList.contains("show")) {
            iconError.classList.add("show");
        }
    } else {
        // Clear error message
        document.getElementById("msg").innerHTML = "";

        // Hide error icon
        if (iconError.classList.contains("show")) {
            iconError.classList.remove("show");
        }
    }
}
