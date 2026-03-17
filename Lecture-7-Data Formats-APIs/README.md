Dong Nguyen - IT24SP

Part A – Fetch Data

### Code

```javascript
const response = await fetch("https://jsonplaceholder.typicode.com/users");
const data = await response.json();
console.log(data);
```
Explanation

fetch() sends a request to the API

await waits for the response

response.json() converts JSON into a JavaScript object

Output

console.log(data) prints: ➡️ An array of user objects

Part B – Print User Information

### Code

```javascript
users.forEach(function(user) {

    const name = user.name;
    const email = user.email;
    const city = user.address.city;

    log(name + " - " + email + " - " + city);

});
```
Explanation

Loop through all users using forEach()

Access nested field using: user.address.city
Example Output
Leanne Graham - leanne@example.com - Gwenborough
Ervin Howell - ervin@example.com - Wisokyburgh
Clementine Bauch - clementine@example.com - McKenziehaven

Part C – Add Error Handling
### Code

```javascript
try {

    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
        throw new Error("HTTP error: " + response.status);
    }

    const users = await response.json();

} catch (error) {

    log("Error: " + error.message);

}
```

Explanation

try...catch prevents the app from crashing

response.ok ensures the request is successful

Throws error if HTTP status is not OK

Part D – Test Error Handling

Changed URL
https://jsonplaceholder.typicode.com/userssss
Result
Error: HTTP error: 404

This confirms error handling works correctly.

Part E – Display Results on Webpage
HTML
<ul id="userList"></ul>

```JavaScript
const list = document.getElementById("userList");
list.innerHTML = "";

const li = document.createElement("li");
li.textContent = name + " - " + email + " - " + city;
list.appendChild(li);
```
Explanation

Creates an element for each user
Displays formatted data in the webpage

Reflection

1️⃣ What does fetch() return?

fetch() returns a Promise that resolves to a Response object.
This object contains the server response, including status and data.

2️⃣ Why do we use response.json()?

response.json() converts the JSON data into a JavaScript object or array.
This allows us to access properties like name, email, and nested fields.

3️⃣ Why must we check response.ok?

We check response.ok to ensure the HTTP request was successful.
If not, we can handle errors properly instead of using invalid data.

