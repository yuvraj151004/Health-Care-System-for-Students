function toggleTheme() {
    // Toggle the dark mode class on the body
    document.body.classList.toggle("dark-mode");

    // Store the user's theme preference in localStorage
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

// Apply the saved theme preference when the page loads
window.onload = function() {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }
};
