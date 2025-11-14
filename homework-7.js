//Уровень 1;

//2.Создать массив чисел от 1 до 10. Отфильтровать его таким образом, что бы мы получил массив чисел, начиная с 5.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const filteredArray = numbers.filter(number => number > 4)
console.log(filteredArray);

/*3. Создать массив строк, относящихся к любой сущности (название фильмов/книг, кухонные приборы, мебель и т.д.),
 проверить, есть ли в массиве какая-то определенная сущность.*/
const stringsArray = ['knife', 'spoon', 'fork', 'plate', 'pot']
const findEntity = stringsArray.includes('spoon');
console.log(findEntity);

/*4. Написать функцию, которая аргументом будет принимать массив и изменять его порядок на противоположный ("переворачивать") 
 Два вышеуказанных массива с помощью этой функции перевернуть.*/
const reverseArrayNumbers = (numbers) => {
  numbers.reverse();
}
reverseArrayNumbers(numbers);
console.log(numbers);


const reverseArrayStrings = (stringsArray) => {
  stringsArray.reverse();
}
reverseArrayStrings(stringsArray);
console.log(stringsArray);

//Уровень 2;

import { socialComments } from "./comments.js";

//7. Вывести в консоль массив тех комментариев, почта пользователей которых содержит ".com"
const findEmail = socialComments.filter(comment => comment.email.includes(".com"))
console.log(findEmail);

//8. Перебрать массив таким образом, что бы пользователи с id меньше или равно 5 имели postId: 2, а те, у кого id больше 5, имели postId: 1
const getChangeId = socialComments.map(comment => ({...comment, postId: comment.id <= 5 ? 2 : 1 }))
console.log(getChangeId);

//9. Перебрать массив, что бы объекты состояли только из айди и имени
const getIterateArray = socialComments.map(({id, name}) => ({id, name}))
console.log(getIterateArray);

/*10. Перебираем массив, добавляем объектам свойство isInvalid и проверяем: 
если длина тела сообщения (body) больше 180 символов - устанавливаем true, меньше - false.*/
const getAddProperty = socialComments.map((comment) => ({...comment, isInvalid : comment.body.length > 180}))
console.log(getAddProperty);


//Уровень 3

// 11. Почитать про метод массива reduce. Используя его, вывести массив почт и провернуть тоже самое с помощью метода map
const getMailArray = socialComments.reduce((comment, property) => {
  return [...comment, property.email];
},[])
console.log(getMailArray);

const getMailArrayTwo = socialComments.map(({email}) => {
  return email;
})
console.log(getMailArrayTwo);

//12. Почитать про методы toString(), join() и перебрав массив с задания №11, привести его к строке.
console.log(getMailArray.join(', '));

