
const forecastBtn = document.querySelector('.forecast-btn');
const currentForecastTitle = document.querySelector('.current-forecast h1');
const currentForecastProbability = document.querySelector('.current-forecast p');
const forecastsContainer = document.querySelector('.forecasts');
const forecastItemTemplate = document.getElementById('forecast-item').content;

const forecasts = [
    { text: 'Тебе стоит отдохнуть.', probability: 72 },
    { text: 'Встретишь свою судьбу.', probability: 83 },
    { text: 'Предложение повышения по работе.', probability: 55 },
    { text: 'Выгодная покупка.', probability: 92 },
    { text: 'Финансовые поощрения.', probability: 38 },
    { text: 'Тебя ждет приятный вечер.', probability: 96 },
];

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createForecastElement(forecast) {
    const forecastElement = forecastItemTemplate.cloneNode(true);
    forecastElement.querySelector('h3').textContent = forecast.text;
    forecastElement.querySelector('p').textContent = `Вероятность: ${forecast.probability}%`;
    return forecastElement;
}
forecastBtn.addEventListener('click', () => {
    const randomIndex = getRandomNumber(0, forecasts.length - 1);
    const forecast = forecasts[randomIndex];
    currentForecastTitle.textContent = forecast.text;
    currentForecastProbability.textContent = `Вероятность: ${forecast.probability}%`;
    const forecastElement = createForecastElement(forecast);
    forecastsContainer.append(forecastElement);
});
