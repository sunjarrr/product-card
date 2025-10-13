//Смена цвета для всех карточек
const productCards = document.querySelectorAll('.card-container');
const changeColorAllCardButton = document.querySelector('#change-color-all-card');
const greenColorHash = '#8400ffff';
const blueColorHash = '#c300ffff';

changeColorAllCardButton.addEventListener('click', () => {
  productCards.forEach((card) => card.style.backgroundColor = greenColorHash)
})

//Смена цвета для первой карточки
const firstProductCards = document.querySelector('.card-container');
const changeColorFirstCardButton = document.querySelector('#change-color-first-card');

changeColorFirstCardButton.addEventListener('click', () => {
  firstProductCards.style.backgroundColor = blueColorHash;
})

//Открыть Google
const openGoogleButton = document.querySelector('#open-google');

openGoogleButton.addEventListener('click', openGoogle)

function openGoogle() {
  const answer = confirm('Вы действительно хотите открыть Google?');
  
  if (answer === true) {
    window.open('https://google.com')
  } else {
    return;
  }
}

//При наведении на главный заголовок ("Выбери свой продукт") - он выводится в консоль.
const outputHead = document.querySelector('.main-headline');

outputHead.addEventListener('mouseover', () => headOutput('Выбери свой продукт'))

function headOutput(message) {
  console.log(message)
}

//Добавил кнопку цвет которой меняю через classList
const itsColor = document.querySelector('#chameleon-btn');

  itsColor.onclick = function() {
    itsColor.classList.toggle("chameleon_shift");
    itsColor.classList.toggle("color-shifter");
  }



