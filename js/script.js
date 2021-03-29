const toggleSwitch = document.querySelector("input[type='checkbox'] ");
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");

// Image mode
imageMode = (color) => {
  image1.src = `img/undraw_proud_coder_${color}.svg`;
  image2.src = `img/undraw_feeling_proud_${color}.svg`;
  image3.src = `img/undraw_conceptual_idea_${color}.svg`;
};

// Dark Mode
darkMode = () => {
  nav.style.backgroundColor = "rgb(0 0 0 / 50%)";
  textBox.style.backgroundColor = "rgb(255 255 255 / 50%)";
  toggleIcon.children[0].textContent = "Dark Mode";
  toggleIcon.children[1].classList.replace("fa-sun", "fa-moon");
  imageMode("dark");
};

// Light Mode.
lightMode = () => {
  nav.style.backgroundColor = "rgb(255 255 255 / 50%)";
  textBox.style.backgroundColor = "rgb(0 0 0 / 50%)";
  toggleIcon.children[0].textContent = "Light Mode";
  toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
  imageMode("light");
};

// Theme Switch
switchTheme = (e) => {
  //console.log(e.target.checked);
  if (e.target.checked === true) {
    document.documentElement.setAttribute("data-theme", "dark");
    // Set local storage
    localStorage.setItem("theme", "dark");
    darkMode();
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    // Set local storage
    localStorage.setItem("theme", "light");
    lightMode();
  }
};

// Listen to the event
toggleSwitch.addEventListener("change", switchTheme);

// Get local storage
const currentTheme = localStorage.getItem("theme");
//console.log(currentTheme);
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
    darkMode();
  }
}
