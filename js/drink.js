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
    this.presentDrink();
    this.getTemperatureDrink();
    this.getInfoAboutDrink();
  }

  _prepareDrink() {
    throw new Error('Ошибка! метод должен быть переопределен в наследниках.')
  }

  getTemperatureDrink() {
    console.log(`Температура данного напитка составляет ${this.#temperature} градусов`)
  }

  getInfoAboutDrink() {
    console.log(`Название - ${this.name}, температура - ${this.#temperature}, размер - ${this.size}, цена составляет - ${this.price}$`)
  }

  setTemperature(newTemperature) {
    this.#temperature = newTemperature;
  }

  getActualTemperature() {
    return this.#temperature;
  }
}