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

const themeBtn = document.getElementById("themeBtn");

let isDark = false;

function renderTheme() {
  if (isDark) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
}

themeBtn.addEventListener("click", function () {
  isDark = !isDark;
  renderTheme();
  localStorage.setItem("portfolio_theme", isDark ? "dark" : "light");
});

const savedTheme = localStorage.getItem("portfolio_theme");

if (savedTheme === "dark") {
  isDark = true;
}

renderTheme();

const lastUpdated = document.getElementById("lastUpdated");

const today = new Date();
const formattedDate = today.toISOString().split("T")[0];

lastUpdated.innerText = `Last updated: ${formattedDate}`;
