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
const flippingArray = (numbers,stringsArray) => {
  numbers.reverse();
  stringsArray.reverse();
}
flippingArray(numbers, stringsArray);
console.log(numbers, stringsArray);


//Уровень 2;
/*5.Добавить файл comments.js, в нём создать константу и в него поместить первые 10 объектов этого массива.
Данный массив представляет собой пример комментариев в соц. сетях, поэтому переменная должна быть названа по смыслу*/
export const socialComments = [
  {
    postId: 1,
    id: 1,
    name: "id labore ex et quam laborum",
    email: "Eliseo@gardner.biz",
    body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
  },
  {
    postId: 1,
    id: 2,
    name: "quo vero reiciendis velit similique earum",
    email: "Jayne_Kuhic@sydney.com",
    body: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
  },
  {
    postId: 1,
    id: 3,
    name: "odio adipisci rerum aut animi",
    email: "Nikita@garfield.biz",
    body: "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
  },
  {
    postId: 1,
    id: 4,
    name: "alias odio sit",
    email: "Lew@alysha.tv",
    body: "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
  },
  {
    postId: 1,
    id: 5,
    name: "vero eaque aliquid doloribus et culpa",
    email: "Hayden@althea.biz",
    body: "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et"
  },
  {
    postId: 2,
    id: 6,
    name: "et fugit eligendi deleniti quidem qui sint nihil autem",
    email: "Presley.Mueller@myrl.com",
    body: "doloribus at sed quis culpa deserunt consectetur qui praesentium\naccusamus fugiat dicta\nvoluptatem rerum ut voluptate autem\nvoluptatem repellendus aspernatur dolorem in"
  },
  {
    postId: 2,
    id: 7,
    name: "repellat consequatur praesentium vel minus molestias voluptatum",
    email: "Dallas@ole.me",
    body: "maiores sed dolores similique labore et inventore et\nquasi temporibus esse sunt id et\neos voluptatem aliquam\naliquid ratione corporis molestiae mollitia quia et magnam dolor"
  },
  {
    postId: 2,
    id: 8,
    name: "et omnis dolorem",
    email: "Mallory_Kunze@marie.org",
    body: "ut voluptatem corrupti velit\nad voluptatem maiores\net nisi velit vero accusamus maiores\nvoluptates quia aliquid ullam eaque"
  },
  {
    postId: 2,
    id: 9,
    name: "provident id voluptas",
    email: "Meghan_Littel@rene.us",
    body: "sapiente assumenda molestiae atque\nadipisci laborum distinctio aperiam et ab ut omnis\net occaecati aspernatur odit sit rem expedita\nquas enim ipsam minus"
  },
  {
    postId: 2,
    id: 10,
    name: "eaque et deleniti atque tenetur ut quo ut",
    email: "Carmen_Keeling@caroline.name",
    body: "voluptate iusto quis nobis reprehenderit ipsum amet nulla\nquia quas dolores velit et non\naut quia necessitatibus\nnostrum quaerat nulla et accusamus nisi facilis"
  }
];

//7. Вывести в консоль массив тех комментариев, почта пользователей которых содержит ".com"
const findEmail = socialComments.filter(comment => comment.email.includes(".com"))
console.log(findEmail);

//8. Перебрать массив таким образом, что бы пользователи с id меньше или равно 5 имели postId: 2, а те, у кого id больше 5, имели postId: 1
const getChangeId = socialComments.map((comment) => {
  return {...comment, postId: comment.id <= 5 ? 2 : 1 };
})
console.log(getChangeId);

//9. Перебрать массив, что бы объекты состояли только из айди и имени
const getIterateArray = socialComments.map(({id, name}) => {
  return {id, name};
})
console.log(getIterateArray);

/*10. Перебираем массив, добавляем объектам свойство isInvalid и проверяем: 
если длина тела сообщения (body) больше 180 символов - устанавливаем true, меньше - false.*/
const getAddProperty = socialComments.map((comment) => {
  return {...comment, isInvalid : comment.body.length > 180};
})
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

