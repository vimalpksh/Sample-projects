const apiKey = "agoBcywxbVbl1QogFFwol8zDsJUgbdGD";

const cityEl = document.querySelector(".city-input");

const weatherEl = document.querySelector(".weather-data");

const formEl = document.querySelector(".form");

const imageEl = document.querySelector(".imager");
const detailsEl = document.querySelector(".details");
const degreeEl = document.querySelector(".degree");
const descEl = document.querySelector(".description");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const cityValue = cityEl.value;
  getWeather(cityValue);
  console.log(cityValue);
});

async function getWeather(city) {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=0fce1856e6b64e3387c185446240704&q=${city}&aqi=no`
    );

    if (!response.ok) {
      throw new Error("Network seems to be busy");
    }

    const data = await response.json();
    const temperature = Math.round(data.current.temp_c);
    const description = data.current.condition.text;
    const imgLink = data.current.condition.icon;
    imageEl.src = imgLink;

    degreeEl.textContent = `${temperature}°C`;
    descEl.textContent = description;
    const windSpeed = Math.round(data.current.wind_kph);
    const humidity = Math.round(data.current.humidity);
    const feelsEl = Math.round(data.current.feelslike_c);

    const detailsData = [
      `Feels like ${feelsEl}°C`,
      `Wind Speed: ${windSpeed}kph`,
      `Humidity: ${humidity}g.m `,
    ];

    detailsData.map((detail) => {
      const newDiv = document.createElement("div");
      newDiv.textContent = detail;
      detailsEl.appendChild(newDiv);
    });
  } catch (error) {
    degreeEl.textContent = ``;
    imageEl.src = `https://cdn-icons-png.flaticon.com/512/2748/2748558.png`;
    descEl.textContent = `Unable to fetch data, Please try again.`;
  }
}
