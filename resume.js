document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.querySelector(".typing-animation");
    const text = "Harshvardhan";
    let index = 0;

    function type() {
        if (index < text.length) {
            textElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, 150); // Adjust typing speed here
        }
    }

    type();
});
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
