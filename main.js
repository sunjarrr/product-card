import './js/homework-4.js';
import './js/homework-5.js';
import './js/homework-6.js';
import './js/homework-7.js';
import './js/homework-8.js';
import './js/homework-9.js';
import './js/modal.js'
import './js/phone.js'
import { Cafe } from './js/cafe.js'
import { Lemonade } from './js/lemonade.js'
import './async/async.js';

const orderLemonade = new Lemonade('Марокканский', 'large', 10, 15, 'сладкий', 'небольшое', 'клубники')
const cafe = new Cafe('Vo dvore', 'Astana, Mangilik el 47');
cafe.orderDrink(orderLemonade);