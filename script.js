const apiKey = "bdd171bf6352406692670813250308";

function getWeather() {
    const location = document.getElementById("locationInput").value;
    const resultDiv = document.getElementById("weatherResult");

    if (!location) {
        resultDiv.innerHTML = "Please enter a location.";
        return;
    }

    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent(location)}&aqi=yes`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Weather data not found.");
            }
            return response.json();
        })
        .then(data => {
            const temp = data.current.temp_c;
            const condition = data.current.condition.text;
            const city = data.location.name;
            const country = data.location.country;
            resultDiv.innerHTML = `
                <strong>${city}, ${country}</strong><br>
                Temperature: ${temp}°C<br>
                Condition: ${condition}
            `;
        })
        .catch(error => {
            resultDiv.innerHTML = "Error: " + error.message;
        });
}
