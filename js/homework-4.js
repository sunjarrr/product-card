//Смена цвета для всех карточек
const productCards = document.querySelectorAll('.card-container');
const changeColorAllCardButton = document.querySelector('#change-color-all-card');
const violetColorHash = '#8400ffff';

changeColorAllCardButton.addEventListener('click', () => {
  productCards.forEach((card) => card.style.backgroundColor = violetColorHash)
})

//Смена цвета для первой карточки
const purpleColorHash = '#c300ffff';
const firstProductCard = document.querySelector('.card-container');
const changeColorFirstCardButton = document.querySelector('#change-color-first-card');

changeColorFirstCardButton.addEventListener('click', () => {
  firstProductCard.style.backgroundColor = purpleColorHash;
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
const mainHeader = document.querySelector('.main-headline');

mainHeader.addEventListener('mouseover', () => headerOutput('Выбери свой продукт'))

function headerOutput(message) {
  console.log(message)
}

//Добавил кнопку цвет которой меняю через classList
const changeColorBtn = document.querySelector('#chameleon-btn');

  changeColorBtn.onclick = function() {
    changeColorBtn.classList.toggle("chameleon_shift");
    changeColorBtn.classList.toggle("color-shifter");
  }



