document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");
  const navigationButtons = document.querySelectorAll(".navigation-button");

  sections.forEach(section => {
    section.addEventListener("mouseenter", () => {
      section.classList.add("highlight");
    });

    section.addEventListener("mouseleave", () => {
      section.classList.remove("highlight");
    });
  });

  navigationButtons.forEach(button => {
    button.addEventListener("click", () => {
      const targetSectionId = button.getAttribute("data-target");
      const targetSection = document.getElementById(targetSectionId);
      scrollToSection(targetSection);
    });
  });

  fetchRandomUserData();
});

async function fetchRandomUserData() {
  try {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    const user = data.results[0];

    const profilePhoto = document.querySelector(".profile-photo");
    profilePhoto.src = user.picture.large;

    document.getElementById("name").textContent = `${user.name.first} ${user.name.last}`;
    document.getElementById("dob").textContent = `Nacimiento: ${user.dob.date}`;
    document.getElementById("phone").textContent = `Teléfono: ${user.phone}`;
    document.getElementById("email").textContent = `Email: ${user.email}`;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function scrollToSection(section) {
  window.scrollTo({
    top: section.offsetTop - 50,
    behavior: "smooth"
  });
}

const backButton = document.querySelector(".back-button");

backButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
