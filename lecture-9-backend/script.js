const loadMessageBtn = document.getElementById("loadMessageBtn");
const messageOutput = document.getElementById("messageOutput");

const loadStudentBtn = document.getElementById("loadStudentBtn");
const studentOutput = document.getElementById("studentOutput");

loadMessageBtn.addEventListener("click", async () => {
  try {
    messageOutput.innerHTML = "Loading...";

    const response = await fetch("http://localhost:3000/api/message");

    if (!response.ok) {
      throw new Error("Failed to fetch message");
    }

    const data = await response.json();

    messageOutput.innerHTML = `
      <p><strong>Message:</strong> ${data.message}</p>
      <p><strong>Course:</strong> ${data.course}</p>
      <p><strong>Year:</strong> ${data.year}</p>
      <p><strong>Time:</strong> ${new Date(data.time).toLocaleString()}</p>
    `;
  } catch (error) {
    messageOutput.innerHTML = `<p>Error loading message.</p>`;
    console.error(error);
  }
});

loadStudentBtn.addEventListener("click", async () => {
  try {
    studentOutput.innerHTML = "Loading...";

    const response = await fetch("http://localhost:3000/api/student");

    if (!response.ok) {
      throw new Error("Failed to fetch student");
    }

    const data = await response.json();

    studentOutput.innerHTML = `
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Role:</strong> ${data.role}</p>
    `;
  } catch (error) {
    studentOutput.innerHTML = `<p>Error loading student.</p>`;
    console.error(error);
  }
});