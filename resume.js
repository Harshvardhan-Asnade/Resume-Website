function toggleDarkMode() {
    // Toggle the dark mode class on the body
    document.body.classList.toggle("dark-mode");

    // Save the user's preference to localStorage
    const darkModeEnabled = document.body.classList.contains("dark-mode");
    try {
        localStorage.setItem("dark-mode", darkModeEnabled ? "enabled" : "disabled");
    } catch (error) {
        console.error("Could not save dark mode preference:", error);
    }
}

// Apply saved dark mode preference on load
document.addEventListener("DOMContentLoaded", () => {
    try {
        const darkMode = localStorage.getItem("dark-mode") === "enabled";
        if (darkMode) {
            document.body.classList.add("dark-mode");
        }
    } catch (error) {
        console.error("Could not retrieve dark mode preference:", error);
    }
});
