1. Why is this page called dynamic?

This page is called dynamic because the content changes after the user clicks a button. The weather data is loaded from an API and inserted into the webpage using JavaScript, instead of being written directly in the HTML.

2. What does the API give us?

The API gives us real weather data in JSON format. In this exercise, it provides values such as temperature, wind speed, and time for the selected city.

3. Why is JSON useful here?

JSON is useful because it stores data in a clear and structured way. JavaScript can read JSON easily, so it is convenient for accessing fields like current.temperature_2m and current.wind_speed_10m.

4. Why is it better to create one reusable function for all cities?

One reusable function avoids repeating the same code many times. It makes the program cleaner, easier to update, and easier to maintain if more cities are added later.
