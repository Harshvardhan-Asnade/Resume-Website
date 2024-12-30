function toggleDarkMode() {
    // Toggle the dark mode class on the body
    document.body.classList.toggle("dark-mode");

    // Save the user's preference to localStorage
    const darkModeEnabled = document.body.classList.contains("dark-mode");
    localStorage.setItem("dark-mode", darkModeEnabled ? "enabled" : "disabled");
}

// Apply saved dark mode preference on load
document.addEventListener("DOMContentLoaded", () => {
    const darkMode = localStorage.getItem("dark-mode") === "enabled";
    if (darkMode) {
        document.body.classList.add("dark-mode");
    }
}

);

