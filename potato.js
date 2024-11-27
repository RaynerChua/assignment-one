let currentIndex = 0; // Start at the first image
const slides = document.querySelectorAll('.history-slide'); // Select all the images
const totalSlides = slides.length; // Get total number of images

function changeSlide() {
    // Move to the next image
    currentIndex++;

    // If we're at the last image, go back to the first
    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    // Update the position of the slider to show the current image
    const newTransformValue = -currentIndex * 100; // Slide width is 100%
    document.querySelector('.history-slider').style.transform = `translateX(${newTransformValue}%)`;
}

// Change slide every 3 seconds
setInterval(changeSlide, 3000); // 3000ms = 3 seconds
