🌤 Weather App

A simple Weather App built with FastAPI (Python) for the backend and HTML + TailwindCSS + JavaScript for the frontend.
It fetches real-time weather data using the OpenWeatherMap API.

🚀 Features

Search weather by city name

Shows temperature, feels like, humidity, and condition

FastAPI backend with CORS enabled

TailwindCSS UI with clean design

Responsive frontend (works on desktop & mobile)

🛠 Tech Stack

Backend: FastAPI, Python, Requests

Frontend: HTML, TailwindCSS, JavaScript

API: OpenWeatherMap

📂 Project Structure
weather-app/
│── backend/
│   └── weather_api.py       # FastAPI backend
│── frontend/
│   ├── index.html           # Frontend page
│   ├── style.css            # Tailwind + custom CSS
│   └── script.js            # JavaScript logic

⚡ Setup Instructions
1. Clone Repository
git clone https://github.com/your-username/weather-app.git
cd weather-app

2. Backend Setup (FastAPI)
pip install fastapi uvicorn requests
uvicorn weather_api:app --reload


Backend runs at: http://127.0.0.1:8000

3. Frontend Setup

Just open index.html in your browser (or serve with VS Code Live Server).
