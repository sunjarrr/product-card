export class Drink {
  #temperature;
  constructor(name, size, price, temperature) {
    this.name = name;
    this.size = size;
    this.price = price;
    this.#temperature = temperature;
  }

  presentDrink() {
    console.log(`Вуаля! представляем вашему вниманию напиток под названием ${this.name}`)
  }

  serveDrink() {
    this._prepareDrink();
    this._setTemperatureDrink();
    this.presentDrink();
    this.getInfoAboutDrink();
  }

  _prepareDrink() {}

  getTemperatureDrink() {
    console.log(`Температура данного напитка составляет ${this.#temperature} градусов`)
  }

  _setTemperatureDrink() {}

  getInfoAboutDrink() {
    console.log(`Название - ${this.name}, температура - ${this.#temperature}, размер - ${this.size}, цена составляет - ${this.price}$`)
  }

  editTemperature(newTemperature) {
    this.#temperature = newTemperature;
  }

  getActualTemp() {
    return this.#temperature;
  }
}