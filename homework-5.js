//3 задание
function determineWeather(city, temperature) {
  console.log(`Сейчас в ${city} температура - ${temperature} градусов по Цельсию`);
}
determineWeather('Осаке', 21);


//4 задание
const LIGHT_SPEED = 343;
function recognizeSpeed(speed) {
  if (speed > LIGHT_SPEED) {
    console.log("Сверхзвуковая скорость");
  }
  else {
    console.log("Дозвуковая скорость");
  }
}
recognizeSpeed(342);


//5 задание
function buyProduct(budget) {
  let product = "яблоко";
  let price = 50;
  if (budget > price) {
    console.log(`${product}, приобретёно. Спасибо за покупку!`);
  }
  else {
    let diffCost = price - budget;
    console.log(`Вам не хватает ${diffCost}, пополните баланс`);
  }
}
buyProduct(51);


// 6 и 7 Для улучшения аналитических способностей:
let benchPress = 100;
let squatting = 150;
let deadlift = 170;

function checkStrength(benchPress, squatting, deadlift) {
  const indicators = benchPress + squatting + deadlift;
  if (indicators >= 250) {
    console.log("Ваш результат хороший, если вы весите меньше 80 kg");
  }
  else {
    console.log("Нужно постраться!");
  }
}
checkStrength(benchPress,squatting,deadlift);
