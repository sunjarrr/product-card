import { Drink } from "./drink.js";
export class Lemonade extends Drink {
  constructor(name, size, price, temperature, sweetness, amountIce, syrup) {
    super(name, size, price, temperature);
    this.sweetness = sweetness;
    this.amountIce = amountIce;
    this.syrup = syrup;
  }

  _prepareDrink() {
    console.log(`Берем стеклянный бокал, наливаем туда газированную воду, если лимонад у нас ${this.sweetness}, то не добавляем сироп из ${this.syrup}, а также по желанию клиента добавляем ${this.amountIce} количество льда.`)
  }

  _setTemperatureDrink() {
    const lemonadeTemp = 10;
    this.editTemperature(lemonadeTemp);
    console.log(`У лимонада устанавливается температура в ${this.getActualTemp()} градусов`)
  }
}