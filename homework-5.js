//3 задание
function findWeather (city, temperature){
  console.log(`Сейчас в ${city} температура - ${temperature} градусов по Цельсию`)
}
findWeather('Осаке', 21)


//4 задание
const LIGHT_SPEED = 343
function soundLevel(speed) {
  if (speed > LIGHT_SPEED) {
    console.log("Сверхзвуковая скорость")
  }
  else{
    console.log("Дозвуковая скорость")
  }
}
soundLevel(342)


//5 задание
function trading(cur_budget) {
let product = "яблоко"
let price = 50;
  if(cur_budget > price) {
    console.log(`${product}, приобретёно. Спасибо за покупку!`)
  }
  else{
    let dif_price = price - cur_budget
    console.log(`Вам не хватает ${dif_price}, пополните баланс`)
  }
}
trading(51)


// 6 и 7 Для улучшения аналитических способностей:
let benchPress
let squatting
let deadlift

function triathlon(benchPress,squatting,deadlift) {
  let indicators = benchPress + squatting + deadlift
  if (indicators>=250) {
    console.log("Ваш результат хороший, если вы весите меньше 80 kg")
  }
  else{
    console.log("Нужно постраться!")
  }
}
triathlon(100, 100, 100)
