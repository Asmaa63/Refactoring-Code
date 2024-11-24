// Back-to-Top Button Visibility Control
const backToTopButton = document.getElementById("backToTop");

// Show or hide the "Back to Top" button based on scroll position
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    // If the scroll position is greater than 200px, show the button
    backToTopButton.classList.add("show");
  } else {
    // Otherwise, hide the button
    backToTopButton.classList.remove("show");
  }
});

// Smooth Scroll to Top Functionality
backToTopButton.addEventListener("click", () => {
  // Scroll smoothly to the top of the page when the button is clicked
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Dark Mode Toggle Functionality
const darkModeToggle = document.getElementById("darkModeToggle"); // The toggle button element
const darkModeIcon = document.getElementById("darkModeIcon"); // The icon inside the button

// Add a click event to toggle between light and dark themes
darkModeToggle.addEventListener("click", () => {
  // Check the current theme from the body dataset attribute
  const currentTheme = document.body.dataset.theme;

  if (currentTheme === "dark") {
    // Switch to light mode
    document.body.dataset.theme = "light";
    // Update the icon to a sun to indicate light mode
    darkModeIcon.classList.replace("fa-moon", "fa-sun");
  } else {
    // Switch to dark mode
    document.body.dataset.theme = "dark";
    // Update the icon to a moon to indicate dark mode
    darkModeIcon.classList.replace("fa-sun", "fa-moon");
  }
});
