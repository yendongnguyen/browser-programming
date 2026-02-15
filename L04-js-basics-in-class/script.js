// ===== STATE =====
let isDarkMode = false;
let clickCount = 0;

// ===== CONSOLE LOG 1 =====
console.log("Page loaded");

// ===== FUNCTIONS =====
function toggleTheme() {
  isDarkMode = !isDarkMode;
  document.body.classList.toggle("dark");
  console.log("Theme toggled. Dark mode:", isDarkMode);
}

function increaseClickCount() {
  clickCount++;
  console.log("Button clicked", clickCount, "times");
}

// ===== EVENTS =====
const themeButton = document.getElementById("theme-btn");
const clickButton = document.getElementById("click-btn");

themeButton.addEventListener("click", toggleTheme);
clickButton.addEventListener("click", increaseClickCount);
