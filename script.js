async function getWeather() {
  const city = document.getElementById("city").value; // match index.html id="city"
  const weatherCard = document.getElementById("weather-card");
  const errorMsg = document.getElementById("error"); // optional error div if you add one

  // Hide result initially
  weatherCard.style.display = "none";
  if (errorMsg) errorMsg.style.display = "none";

  if (!city) {
    if (errorMsg) {
      errorMsg.textContent = "⚠️ Please enter a city name!";
      errorMsg.style.display = "block";
    } else {
      alert("⚠️ Please enter a city name!");
    }
    return;
  }

  try {
    const response = await fetch(`http://127.0.0.1:8000/weather?city=${encodeURIComponent(city)}`);
    const data = await response.json();

    if (data.error) {
      if (errorMsg) {
        errorMsg.textContent = `⚠️ ${data.error}`;
        errorMsg.style.display = "block";
      } else {
        alert(`⚠️ ${data.error}`);
      }
      return;
    }

    // Populate weather card
    document.getElementById("city-name").textContent = data.city;
    document.getElementById("temperature").textContent = `${data.temperature}°C`;
    document.getElementById("condition").textContent = data.condition;
    document.getElementById("feels-like").textContent = data.feels_like ?? "--";
    document.getElementById("humidity").textContent = data.humidity ?? "--";
    document.getElementById("wind").textContent = data.wind ?? "--";

    // Show card
    weatherCard.style.display = "block";
  } catch (err) {
    if (errorMsg) {
      errorMsg.textContent = `⚠️ ${err.message || err}`;
      errorMsg.style.display = "block";
    } else {
      alert(`⚠️ ${err.message || err}`);
    }
  }
}
