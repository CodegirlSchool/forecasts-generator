/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */

/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) 
показывай их пользователю */

/* Подставляй текст нового предсказания в .current-forecast h1 */

/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */

/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */

/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max 
и используй ее где нужно */

/* При генерации нового предсказания старое предсказание должно добавляться в начало списка 
«Мои предсказания» — .forecasts  */

/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */

const forecastButton = document.querySelector('.forecast-btn');
const predictionElement = document.querySelector('.current-forecast h1');
const probabilityElement = document.querySelector('.current-forecast p');
const forecastsContainer = document.querySelector('.forecasts');
const forecastItemTemplate = document.querySelector('#forecast-item');

function generateForecast(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
} 

function generatePercent() {
    return generateForecast(0, 100);
}

function createForecastItem(prediction, probability) {
    const forecastItem = forecastItemTemplate.cloneNode(true).content;

    forecastItem.querySelector('h3').textContent = prediction;
    forecastItem.querySelector('p').textContent = `Вероятность: ${probability}%`;
    return forecastItem;
}



forecastButton.addEventListener ('click', function() {
    switch (generateForecast(1, 5)) {
        case 1:
            predictionElement.textContent = 'Все будет хорошо!';
            probabilityElement.textContent = `Вероятность ${generatePercent()}%`;
            break;
        case 2:
            predictionElement.textContent = 'Все будет даже лучше!';
            probabilityElement.textContent = `Вероятность ${generatePercent()}%`;
            break;
        case 3:
            predictionElement.textContent = 'У тебя все получится!';
            probabilityElement.textContent = `Вероятность ${generatePercent()}%`;
            break;
        case 4:
            predictionElement.textContent = 'Никогда не сдавайся!';
            probabilityElement.textContent = `Вероятность ${generatePercent()}%`;
            break;
       

    }

    const newForecastItem = createForecastItem(predictionElement.textContent, probabilityElement.textContent);
    forecastsContainer.prepend(newForecastItem);

})









