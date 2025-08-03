# 🌤 Simple Weather App

A minimal weather web app built with HTML, CSS, and JavaScript that allows users to input a location and get the current temperature using [WeatherAPI.com](https://www.weatherapi.com/).

---

## 🔧 Features

- 🔍 Search weather by location
- 🌡 Displays temperature in Celsius
- 🌦 Shows current weather condition
- 🎨 Clean and responsive UI

---

## 🧩 Tech Stack

- HTML5
- CSS3
- JavaScript (ES6)
- [WeatherAPI](https://www.weatherapi.com/)

---

## 🚀 How to Run

1. **Clone or download the repository**
    ```bash
    git clone https://github.com/your-username/weather-app.git
    ```

2. **Open the project folder**

3. **Open `index.html` in any browser**
    - You can just double-click it, or
    - Serve it using a simple server like Live Server (VS Code extension)

---

## 🔑 API Key Setup

This project uses a free API key from [WeatherAPI.com].

Make sure your API key is added inside the `script.js` file:

```javascript
const apiKey = "your_api_key_here"; // Replace with your actual API key
Note: A sample key (bdd171bf6352406692670813250308) is provided for testing. Consider generating your own key for production use.

📁 Project Structure
bash
Copy
Edit
weather-app/
│
├── index.html       # Main HTML file
├── style.css        # Styling
├── script.js        # Weather logic
└── README.md        # Project documentation
❓ How It Works
User inputs a location (e.g., "London")

The app sends a GET request to the WeatherAPI

It retrieves the current temperature and weather condition

Displays the data to the user dynamically

💡 To Improve Later
Add support for Fahrenheit

Show weather icons

Add error messages for invalid locations

Responsive mobile design

📜 License
This project is open-source and free to use.
