class Phone {
  constructor(name, batteryPercentage, color) {
    this.name = name;
    this.batteryPercentage = batteryPercentage;
    this.color = color;
  }
  turn() {
    console.log(`Телефон ${this.name} включился, цвет ${this.color}, процент батареи ${this.batteryPercentage}`);
  }
}

class Android extends Phone {
  constructor(name, batteryPercentage, color, cardSlot) {
    super(color, batteryPercentage, name, cardSlot);
    this.cardSlot = cardSlot;
  }
  sendMessage() {
    console.log(`Телефон ${this.name} включился, цвет ${this.color}. У ${this.name} есть карта памяти от компании ${this.cardSlot}`);
  }
  turn() {
    super.turn()
    console.log(`Обьем карты памяти ${this.cardSlot} составляет 30 GB`)
  }
}

const onePlus = new Phone('One Plus 11R', 99, 'черный');
const samsung = new Phone('Samsung Galaxy S25', 100, 'небесно-голубой');
samsung.turn();
onePlus.turn();

const xiaomi = new Android('Сиреневый', 100,'Redmi Note 5', 'Transcend');
xiaomi.turn();
xiaomi.sendMessage();
