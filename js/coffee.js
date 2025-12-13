import { Drink } from "./drink.js";
export class Coffee extends Drink {
  constructor(name, size, price, temperature, typeOfGrains, typeOfMilk, roastingGrains) {
    super(name, size, price, temperature)
    this.typeOfGrains = typeOfGrains;
    this.typeOfMilk = typeOfMilk;
    this.roastingGrains = roastingGrains;
  }

  _prepareDrink() {
    console.log(`В нашем фирменном кофе применяются зерна ${this.typeOfGrains}, он исключительно готовится на ${this.typeOfMilk} молоке, а также мы используем ${this.roastingGrains} обжарку зерен`)
  }

  _setTemperatureDrink() {
    const coffeeTemp = 93;
    this.editTemperature(coffeeTemp);
    console.log(`В дальнейшем соблюдая все условия приготовления мы получим кофе оптимальной и правильной температуры которая равна - ${this.getActualTemp()} градусам`)
  }
}