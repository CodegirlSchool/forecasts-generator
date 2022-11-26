/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */

/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */

/* Подставляй текст нового предсказания в .current-forecast h1 */

/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */

/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */

/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */

/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */

/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */

const currentForecast = document.querySelector('.current-forecast');
const currentForecastText = currentForecast.querySelector('h1');
const currentForecastPercent = currentForecast.querySelector('p');

const currentForecastItem = document.querySelector('.forecasts');

const percent =  document.createElement('div');
percent.classList.add('current-forecast');
percent.textContent = 'Вероятность';

const predictionLove = document.createElement('div');
predictionLove.classList.add('current-forecast');
predictionLove.textContent = 'В этом году любовь приобретет новый смысл!';

const predictionJob = document.createElement('div');
predictionJob.classList.add('current-forecast');
predictionJob.textContent = 'В этом году ты найдешь работу мечты!';

const predictionJS = document.createElement('div');
predictionJS.classList.add('current-forecast');
predictionJS.textContent = 'В этом году ты освоишь JS!';

const getPredictions = document.querySelector('.forecast-btn');

getPredictions.addEventListener('click', () => {
    let predictionRandom = randomGeneration(1, 3);

    if (predictionRandom === 1) {
        currentForecastText.append(predictionLove);
        currentForecastPercent.append(`${percent.textContent} ${randomGeneration(0, 100)} %`);

    } else if (predictionRandom === 2) {
        currentForecastText.append(predictionJob);
        currentForecastPercent.append(`${percent.textContent} ${randomGeneration(0, 100)} %`);

    } else if (predictionRandom === 3) {
        currentForecastText.append(predictionJS);
        currentForecastPercent.append(`${percent.textContent} ${randomGeneration(0, 100)} %`);
    } 
       return  currentForecastText, currentForecastPercent;
    
})

const savedCurrentForecastText =  currentForecastText;
const savedCurrentForecastPercent = currentForecastPercent;

const textCard = makeCardTemplate(savedCurrentForecastText, savedCurrentForecastPercent);
currentForecastItem.prepand(textCard);

function randomGeneration(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const cardTemplate = document.querySelector("#forecast-item");

function makeCardTemplate(prediction, predictionPercentage) {
    const myCard = cardTemplate.content.cloneNode(true);
    myCard.querySelector('h3').textContent = prediction;
    myCard.querySelector('p').textContent = predictionPercentage;
    return myCard;
}







