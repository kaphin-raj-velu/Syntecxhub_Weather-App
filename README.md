🌤️ Weather App

A responsive and dynamic Weather Application built using HTML, CSS, and JavaScript that fetches real-time weather data using the OpenWeather API.

This app allows users to search for any city and instantly view current weather conditions including temperature, humidity, wind speed, and weather status with dynamic background themes.

🚀 Features

🔍 Search weather by city name

🌡️ Real-time temperature (°C)

💧 Humidity percentage

💨 Wind speed (km/h)

🌤️ Weather condition with icon

🎨 Dynamic background theme based on weather

⌨️ Press Enter key to search

🌍 Default city loaded on startup (Chennai)

⚠️ Error handling for:

Invalid city

Invalid API key

Network issues

📱 Fully responsive design

🛠️ Technologies Used

HTML5 – Structure

CSS3 – Styling & Animations

JavaScript (ES6) – Logic & API handling

OpenWeather API – Weather Data

Google Fonts (Poppins)

📂 Project Structure
Weather-App/
│
├── index.html      # Main HTML file
├── style.css       # Styling & animations
├── script.js       # API & dynamic functionality
└── README.md       # Project documentation
⚙️ How It Works

User enters a city name.

JavaScript fetches weather data from:

https://api.openweathermap.org/data/2.5/weather

The app updates:

City name

Temperature

Weather condition

Humidity

Wind speed

Background theme changes based on weather type:

☀️ Clear

☁️ Clouds

🌧️ Rain

❄️ Snow

🔑 Setup Instructions
1️⃣ Get Your API Key

Go to OpenWeather

Create a free account

Generate your API key

2️⃣ Add API Key

Open script.js and replace:

const apiKey = "YOUR_API_KEY";

with your actual API key.

3️⃣ Run the Project

Simply open:

index.html

in your browser.

No server required 🚀

📸 Preview

Modern glassmorphism card UI

Smooth fade-in animation

Dynamic gradient backgrounds

🧠 Learning Outcomes

This project helps you understand:

Fetch API in JavaScript

Async/Await

DOM Manipulation

Error Handling

Dynamic CSS theme switching

Working with external APIs

🔮 Future Improvements

📍 Add current location detection (Geolocation API)

🌡️ Toggle between °C and °F

📅 5-day weather forecast

🌙 Dark mode toggle

💾 Search history using Local Storage

🌎 Country flag display
