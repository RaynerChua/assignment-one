//Back-to-top function
document.addEventListener("DOMContentLoaded", () => {
    const scrollToTopButton = document.getElementById("scroll-to-top");
    console.log(scrollToTopButton); // Should log the button element
  
    // Show/hide button when scrolling
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) { // Show button when scrolled down 300px
            scrollToTopButton.style.opacity = 1;
            console.log("Button should be visible");
        } else {
            scrollToTopButton.style.opacity = 0;
            console.log("Button should be hidden");
        }
    });
  
    // Scroll to top functionality
    scrollToTopButton.addEventListener("click", () => {
      console.log("Scroll-to-top button clicked");
        window.scrollTo({
            top: 0,
            behavior: "smooth", // Smooth scrolling effect
        });
    });
  });