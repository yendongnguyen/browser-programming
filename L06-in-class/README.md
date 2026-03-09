Lecture 6 – Asynchronous JavaScript & Fetch

Part A — Setup & First Run
Timeout Output

When clicking Async Timeout, the output shows: 

Start
End
Timeout finished after 2 seconds

This happens because setTimeout runs asynchronously and does not block the program.

Status Line for Promise / Await / Fetch

Async Promise
Status: Waiting (Promise)...

After the Promise resolves, it changes to:
Status: Idle

Async Await
Status: Waiting (await)...

After completion:
Status: Idle

Async Fetch
Status: Loading from API...

After data is loaded:
Status: Idle


Part B — Async Timeout

What changed?

The timeout delay changed from 2000 ms to 500 ms, so the message appears faster.
Did “End” appear before “Timeout finished”?
Yes.
Why?
Because setTimeout runs asynchronously, JavaScript continues executing the next lines before the timeout function runs.

Part C — Promise
Did the button click freeze the page?

No, the page did not freeze. The program continues running while waiting for the Promise.
When does .then() run?
.then() runs after the Promise has been resolved.
Sentence answer
.then() executes when the Promise finishes successfully and returns a result.

Part C — Promise
Did the button click freeze the page?
No, the page did not freeze. The program continues running while waiting for the Promise.
When does .then() run?
.then() runs after the Promise has been resolved.
Sentence answer
.then() executes when the Promise finishes successfully and returns a result.

Part D — Async / Await
Order of logs
Before await
After await
Promise resolved...
Sentence answer
await pauses the execution of the async function until the Promise resolves, but it does not freeze the browser.

Part E — Fetch
What message is printed when the item does not exist?
Error: HTTP Error: 404
Why do we check response.ok?

We check response.ok to make sure the HTTP request was successful. If the server returns an error like 404 or 500, we can detect it and handle the error properly.

Part F — Short Reflection
Why do we use async/await?
We use async/await to make asynchronous code easier to read and understand. It allows us to write code that looks like normal step-by-step code while still handling asynchronous operations.
Why do we use try/catch with fetch?
We use try/catch to handle possible errors when requesting data from an API, such as network problems or server errors.
Why do we check response.ok?
We check response.ok to verify that the HTTP request was successful. If the response status is not OK, we can handle the error properly.

