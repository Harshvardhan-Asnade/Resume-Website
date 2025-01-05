 
function toggleDescription(jobId) {
    const jobDescription = document.getElementById(jobId).querySelector('.job-description');
    const button = document.getElementById(jobId).querySelector('.show-more');
    
    // Toggle the description visibility with smooth fade effect
    if (jobDescription.style.display === "none") {
        jobDescription.style.display = "block";
        jobDescription.classList.add("fade-in");
        button.textContent = "Show Less";
    } else {
        jobDescription.style.display = "none";
        jobDescription.classList.remove("fade-in");
        button.textContent = "Show More";
    }
}

// Initially hide all job descriptions
document.querySelectorAll('.job-description').forEach((description) => {
    description.style.display = "none";
});
// Smooth scrolling to internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}
// Toggle menu visibility
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}

// Close the menu when a link is clicked
const menuLinks = document.querySelectorAll('#menu li a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        const menu = document.getElementById('menu');
        menu.classList.remove('active'); // Hide the menu after a link is clicked
    });
});
