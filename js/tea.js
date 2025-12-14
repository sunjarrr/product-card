import { Drink } from "./drink.js";
export class Tea extends Drink {
  constructor(name, size, price, temperature, type, collectionTime, smell) {
    super(name, size, price, temperature)
    this.type = type;
    this.collectionTime = collectionTime;
    this.smell = smell;
  }

  _prepareDrink() {
    console.log(`В нашем кафе самым популярным видом чая является ${this.type}, он собирается ${this.collectionTime}, и его аромат содержит в себе ${this.smell} ноты`)
  }

  _setTemperatureDrink() {
    const teaTemp = 90;
    this.setTemperature(teaTemp);
    console.log(`По итогу приготовления нашего чая его температура будет составлять - ${this.getActualTemperature()} градусов`)
  }
}