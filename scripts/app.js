// Placeholder for a feature to optimize (e.g., load content dynamically)
document.addEventListener('DOMContentLoaded', () => {
    console.log("JavaScript loaded. Add dynamic features here!");
  });
  
// Function to handle showing the image in the lightbox modal
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('[data-bs-image]');
    
    images.forEach(image => {
      image.addEventListener('click', function() {
        const imageUrl = this.getAttribute('data-bs-image');
        const lightboxImage = document.getElementById('lightboxImage');
        lightboxImage.src = imageUrl;  // Set the src attribute of the modal image
      });
    });
  });
  