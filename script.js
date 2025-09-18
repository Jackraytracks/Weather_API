/* Background */
body {
  margin: 0;
  font-family: "Poppins", sans-serif;
  background: url('https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1950&q=80') no-repeat center center/cover;
  min-height: 100vh;
  color: #fff;
  text-align: center;
}

/* Hero section */
.hero {
  padding: 60px 20px;
}

.title {
  font-size: 3rem;
  font-weight: bold;
}

.subtitle {
  margin-top: 10px;
  font-size: 1.2rem;
  opacity: 0.9;
}

/* Search Box */
.search-box {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}

.search-box input {
  padding: 12px;
  width: 300px;
  border: none;
  border-radius: 8px 0 0 8px;
  font-size: 1rem;
}

.search-box button {
  padding: 12px 20px;
  border: none;
  background: #1e40af;
  color: white;
  border-radius: 0 8px 8px 0;
  cursor: pointer;
  transition: 0.3s;
}

.search-box button:hover {
  background: #2563eb;
}

/* Weather Card */
.weather-card {
  background: rgba(255, 255, 255, 0.9);
  color: #333;
  max-width: 350px;
  margin: 30px auto;
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.2);
}

.weather-card h2 {
  margin-bottom: 10px;
}

.temp {
  font-size: 3rem;
  font-weight: bold;
  color: #f59e0b;
}

.details p {
  margin: 5px 0;
  font-size: 1rem;
}

/* Forecast */
.forecast {
  margin: 40px auto;
  max-width: 800px;
}

.forecast h3 {
  margin-bottom: 20px;
  font-size: 1.5rem;
}

.forecast-cards {
  display: flex;
  gap: 10px;
  justify-content: center;
}

.forecast-cards .card {
  background: rgba(255, 255, 255, 0.9);
  color: #333;
  padding: 15px;
  border-radius: 10px;
  width: 120px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
}
