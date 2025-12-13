 export class Cafe {
  constructor(nameCafe, location) {
    this.nameCafe = nameCafe;
    this.location = location;
  }

  getInfoCafe() {
    console.log(`Наше кафе называется - ${this.nameCafe}, находится оно по адресу ${this.location}, ждем вас с нетерпением!`)
  }

  orderDrink(drinkInstance) {
    console.log(`Наше кафе ${this.nameCafe} которая находится по адресу ${this.location} принимает заказ на ${drinkInstance.name}`);
    drinkInstance.serveDrink();
    console.log('Ваш заказ готов!')
  }
}