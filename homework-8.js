//3. По аналогии из лекции — создать и реализовать шаблон для продуктовых карточек.
import { cards } from "./cards.js";

const cardTemplate = document.querySelector('.card-template');
const cardList = document.querySelector('.product-card-list'); 

function renderCards(cards) {
cards.forEach(card => {
  const containerClone = cardTemplate.content.cloneNode(true);
  containerClone.querySelector('.product-category').textContent = card.type;
  containerClone.querySelector('.product-title').textContent = card.name;
  containerClone.querySelector('.product-description').textContent = card.description;
  card.compound.forEach(item => {
    const ul = containerClone.querySelector('.product-composition');
    const li = document.createElement('li');
    li.classList.add('product-composition-item');
    li.textContent = item;
    ul.appendChild(li);
  });
  containerClone.querySelector('.card-image').src = `${card.img}.png`;
  containerClone.querySelector('.product-price').textContent = card.price + ' \u20BD';
  containerClone.querySelector('.card-container').classList.add('card-distance');
  cardList.appendChild(containerClone);
 })
}


//4. Используя метод .reduce(), получить строку, которая состоит из названий продуктовых карточек, разделенных точкой с запятой
const getProductString = cards.reduce((acc, products) => {
  acc.push(products.name);
  return acc;
}, []).join('; ');
console.log(getProductString);

//5. Используя метод .reduce(), получить массив объектов, где ключем является название продукта, а значением - его описание
const getArrObjects = cards.reduce((acc, value) => {
  acc[value.name] = value.description;
  return acc;
}, {});
console.log(getArrObjects);

/*6*. Реализовать функцию, которая при старте нашей страницы выводит сообщение с текстом, мол 
"Сколько карточек отобразить? От 1 до 5" и в зависимости от результата - будет выводить это количество. 
Должна быть защита от введенных других значений (имеется ввиду проверка if).
P.S - код из задания №3 переместить в функцию, не нужно его дублировать
*/
function countCards() {
  const count = Number(prompt('Сколько карточек отобразить? От 1 до 5'))
    if (isNaN(count) || count < 1 || count > 5) {
      alert("Введите число от 1 до 5");
    }
    else {
     renderCards(cards.slice(0, count));
    }
}
countCards();