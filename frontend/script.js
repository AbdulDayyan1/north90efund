// Adjust the screen size based on window width
function adjustScreenSize() {
    const width = window.innerWidth;
  
    if (width >= 992 && width <= 1600) {
      document.body.style.transform = "scale(0.9)";
      document.body.style.transformOrigin = "top left";
    } else if (width >= 700 && width < 992) {
      document.body.style.transform = "scale(0.8)";
      document.body.style.transformOrigin = "top left";
    } else if (width >= 600 && width < 700) {
      document.body.style.transform = "scale(0.75)";
      document.body.style.transformOrigin = "top left";
    } else if (width < 600) {
      document.body.style.transform = "scale(0.5)";
      document.body.style.transformOrigin = "top left";
    } else {
      document.body.style.transform = "scale(1)";
    }
  }
  // Intersection Observer to detect when the team section is in view
const teamSection = document.getElementById("team");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Add flip animations to the cards when section is in view
      const cards = entry.target.querySelectorAll('.team-card');
      cards.forEach((card, index) => {
        card.classList.add(`animate__flipIn${index % 3 === 0 ? 'X' : index % 3 === 1 ? 'Y' : 'Z'}`);
      });
    }
  });
}, { threshold: 0.5 });

observer.observe(teamSection);

  
  // Add animations to buttons on hover
  function addButtonAnimation() {
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
      button.addEventListener("mouseover", () => {
        button.classList.add("animate__pulse");
      });
  
      button.addEventListener("mouseout", () => {
        button.classList.remove("animate__pulse");
      });
    });
  }
  
  // Run functions on page load
  window.onload = function () {
    adjustScreenSize();
    addButtonAnimation();
  };
  
  // Re-run the adjust screen function on window resize
  window.onresize = adjustScreenSize;
  