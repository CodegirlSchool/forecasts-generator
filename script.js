/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */
const button = document.querySelector('.forecast-btn');
const header = document.querySelector('h1');
const description = document.querySelector('p');
const container = document.querySelector('.forecasts');
const forecastItem = document.querySelector('.forecast-item');

function generateRandomCard(min, max) {
    const random = Math.random() * (max - min) + min;
    return +random.toFixed(0);
}

button.addEventListener('click', function() {
    function 
})

function getRandomCase(min, max) {
    getRandomCase(1, 5);
    return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomProcent(min, max) {
    getRandomProcent(1, 100);
    return Math.floor(Math.random() * (max - min)) + min;
}

let prediction = '';
switch(getRandomCase) {
    case '1':
        prediction = 'Тебя ожидает интересная поездка.';
        break;
    
    case '2':
        prediction = 'Будешь много плакать, но только от радости.';
        break;
    
    case '3':
        prediction = 'Успешным будет любое начатое дело.';
        break;

    case '4':
        prediction = 'Посвяти больше времени себе.';
        break;

    case '5':
        prediction = 'Ждет много интересных приключений.';
        break;

    default: 
        prediction = 'Предсказаний больше нет';
        break;

}


/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */

/* Подставляй текст нового предсказания в .current-forecast h1 */

/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */

/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */

/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */

/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */

/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */
