function forecastGenerate (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const buttonClick = document.querySelector('.forecast-btn');
buttonClick.addEventListener('click', function(){
    const predictionNumber = forecastGenerate(1, 5);
    let predictionText = "";
    if (predictionNumber == 1) {
        predictionText = "Сегодня тебя ждёт приятный сюрприз!";
    } else if (predictionNumber == 2) {
        predictionText = "У тебя обязательно всё получится!";
    } else if (predictionNumber == 3) {
        predictionText = "Ты обязательно выучишь JavaScript!"; 
    } else {
        predictionText = "Тебя ждёт хорошо проведённый вечер в приятной компании!";
    }
    const title = document.querySelector('.current-forecast h1');
    title.textContent = predictionText;
    console.log(title);

    const percent = forecastGenerate(0, 100);
    const paragraph = document.querySelector('.current-forecast p');
    paragraph.textContent = percent + '%';

    buttonClick.addEventListener('click', function(){
        const card = document.querySelector('#forecast-item');
        function makeCard (prediction, predictionPercent) {
            const myCard = card.content.cloneNode(true);
            myCard.querySelector('h3').textContent = prediction;
            myCard.querySelector('p').textContent = predictionPercent;
            return myCard;
        }
        
        const predictionCard = makeCard(predictionText, percent);
        const forecasts = document.querySelector('.forecasts');
        forecasts.append(predictionCard);  
    })
});