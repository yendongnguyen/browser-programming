// Get HTML elements
const output = document.getElementById("output");
const list = document.getElementById("userList");

// Print text to the <pre> area
function log(text) {
    output.textContent += text + "\n";
}

// Clear old output
function clearOutput() {
    output.textContent = "";
}

// Run loadUsers when button is clicked
document.getElementById("btnLoadUsers").onclick = loadUsers;

async function loadUsers() {
    clearOutput();
    list.innerHTML = "";

    try {
        // Request data from the REST API
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        // Check for HTTP errors
        if (!response.ok) {
            throw new Error("HTTP error: " + response.status);
        }

        // Convert JSON response into JavaScript array
        const users = await response.json();

        console.log(users);

        // Loop through each user
        users.forEach(function(user) {
            const name = user.name;
            const email = user.email;
            const city = user.address.city; // nested field

            const result = name + " - " + email + " - " + city;

            console.log(result);
            log(result);

            // Optional: show result in webpage
            const li = document.createElement("li");
            li.textContent = result;
            list.appendChild(li);
        });

    } catch (error) {
        log("Error: " + error.message);
    }
}