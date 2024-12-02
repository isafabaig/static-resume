const toggleButton = document.getElementById("toggle-button");
const hiddenSkills = document.querySelectorAll(".hidden-skill");

let isExpanded = false;

// Toggle function
toggleButton.addEventListener("click", () => {
  // hidden skills
  hiddenSkills.forEach(skill => {
    skill.style.display = isExpanded ? "none" : "list-item";
  });

  // Update button text and state
  isExpanded = !isExpanded;
  toggleButton.textContent = isExpanded ? "Show Less" : "Show More";
});

hiddenSkills.forEach(skill => {
  skill.style.display = "none";
});
