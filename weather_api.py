from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import requests

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # allow all origins (for testing)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

API_KEY = "24415d9135867aec67f3e794a096a4ef"
BASE_URL = "https://api.openweathermap.org/data/2.5/weather"


@app.get("/")
def home():
    return {"message": "FastAPI is working! Try /weather?city=London"}


@app.get("/weather")
def get_weather(city: str = "Mumbai"):
    """
    Get current weather for a given city.
    Example: /weather?city=Mumbai
    """
    try:
        url = f"{BASE_URL}?q={city}&appid={API_KEY}&units=metric"
        response = requests.get(url)
        data = response.json()

        # If city not found
        if data.get("cod") != 200:
            return {"error": data.get("message", "Unable to fetch weather")}

        return {
            "city": data["name"],
            "temperature": data["main"]["temp"],
            "feels_like": data["main"]["feels_like"],
            "condition": data["weather"][0]["description"],
        }
    except Exception as e:
        return {"error": str(e)}
