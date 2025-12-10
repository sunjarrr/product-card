import { Form } from "./form.js";
import { ModalWindow } from "./modal.js";

// Уровень 1:

/* 4. К Форме, которая прикреплена в футере - добавить логику:
email должен соответствовать стандартам (добавить валидацию), 
если он не заполнен - форма не отправляется. Кнопка "Подписаться" и есть "отправкой формы", 
при нажатии на которую мы будем выводить консоль лог в виде объекта:  { email: 'введенная почта' }*/

const emailForm = document.querySelector('.footer-inside-form')
emailForm.addEventListener('submit', (event) => {
  event.preventDefault()
  const form = event.target;
  const formData = new FormData(form)
  const data = Object.fromEntries(formData.entries())
  console.log(data)
})

// Уровень 2:

/* 5. Создать форму для регистрации. Она должна содержать поля: имя, фамилия, дата рождения, логин, пароль, повторение пароля. 
Используйте <label> для того, что бы указать пользователю, какое поле за что отвечает. 
Также важно использовать placeholder (обо всем этом можно будет почитать в документации в конце поста) 
Разрешается добавить поля на ваше усмотрение. Все поля должны иметь валидацию. Если пользователь ввел два разных пароля - мы должны 
предупредить его о том, что регистрация отклонена. Если регистрация успешна - также выводим объект с свойствами и их значениями, 
как в задании №4. Дополнительно мы должны добавить к этому объекту свойство createdOn и указать туда время создания (используем сущность new Date())*/
const registration = document.getElementById('registration-form')
const errorMessage = document.getElementById('error-message')

registration.addEventListener('submit', handleFormSubmission)

let userBase;

function handleFormSubmission(properties) {
  properties.preventDefault();
  const form = new Form('registration-form');
  if(!form.checkFormValid()) {
    return;
  }
  const formData = form.getAllValueForm();
  const password = formData.passwd;
  const repeatePassword = formData.repeatPasswd;
  if(repeatePassword != password) {
    errorMessage.textContent = "Регистрация отклонена, пароли не совпадают";
    return;
  }
  else {
    const registeredUser = formData;
    registeredUser.createdOn = new Date(); 
    userBase = registeredUser; //6. Сохраняем этот объект в переменную для дальнейшего использования.
    console.log(registeredUser)
    form.resetAllValues();
  }
}

//7. Создать кнопку "Аутентификация", не стесняемся добавлять стили, практикуем css.

/*8. Создать модальное окно, используя классы "modal, modal-showed". Логика такая: при нажатии на кнопку у нас открывается модальное окно 
путем добавления modal-showed к div с классом modal. Не забываем добавить кнопку для закрытия модалки (крестик в углу).  
Важные правила создания модалки:
1) Задний фон должен быть затемнён, но не полностью черный (Создаем класс overlay, который будет затемнять всю страницу)
2) Модальное окно находиться ровно по центру страницы, независимо от масштаба*/

const modal = document.getElementById('modal-id')
const overlay = document.getElementById('overlay-id')
const authenticationButton = document.getElementById('open-modal')
const closeModalButton = document.getElementById('close-modal')
const modalClass = new ModalWindow('modal-id', 'overlay-id')
console.log(modalClass.isItOpen())
authenticationButton.addEventListener('click', () => {
  modalClass.openModal()
  modalClass.isItOpen()
  console.log(modalClass.isItOpen())
})

closeModalButton.addEventListener('click', () => {
  modalClass.closeModal()
  console.log(modalClass.isItOpen())
})


/*9. В открытой модалке у нас будет форма авторизации: логин, пароль, кнопка "Войти". 
Используя объект с задания №6, проверяем, ввели ли мы правильные данные? 
Если да - то по нажатию на кнопку "Войти", модальное окно должно закрыться и пользователь должен получить сообщение об успешном входе, 
если нет - модальное окно не закрывается, пользователь получает сообщение об ошибке, например: "Неверный логин или пароль".*/

const signInButton = document.querySelector('.modal-window')

let currentUser;
signInButton.addEventListener('submit', (authorization) => {
  authorization.preventDefault();
  const form = new Form('modal-window-id');
  if(!form.checkFormValid()) {
    return;
  }
  const formData = form.getAllValueForm();
  const modalLoginField = formData.modalLogin
  const modalPasswdField = formData.modalPasswd
  if(modalLoginField !== userBase.login || modalPasswdField !== userBase.passwd) {
    authorization.preventDefault();
    alert("Неверный логин или пароль")
    return;
  }
  else {
    modal.classList.remove('modal-showed')
    overlay.classList.remove('open-overlay')
    alert('Успешный вход!')
    currentUser = userBase;
    currentUser.lastLogin = new Date();
    form.resetAllValues();
  }
})



