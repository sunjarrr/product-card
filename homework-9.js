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
const registration = document.getElementById('registrationForm')
const password = document.getElementById('passwd')
const repeatePassword = document.getElementById('repeatPasswd')
const errorMessage = document.getElementById('errorMessage')

registration.addEventListener('submit', handleFormSubmission)

let dataCreatedOn;

function handleFormSubmission(properties) {
  const value1 = password.value
  const value2 = repeatePassword.value
  if(value2 != value1) {
    properties.preventDefault();
    errorMessage.textContent = "Регистрация отклонена";
    return;
  }
  else {
    const form = properties.target;
    const formData = new FormData(form)
    const data = Object.fromEntries(formData.entries())
    data.createdOn = new Date(); 
    dataCreatedOn = data; //6. Сохраняем этот объект в переменную для дальнейшего использования.
    console.log(data)
    properties.preventDefault();
  }
}

//7. Создать кнопку "Аутентификация", не стесняемся добавлять стили, практикуем css.

/*8. Создать модальное окно, используя классы "modal, modal-showed". Логика такая: при нажатии на кнопку у нас открывается модальное окно 
путем добавления modal-showed к div с классом modal. Не забываем добавить кнопку для закрытия модалки (крестик в углу).  
Важные правила создания модалки:
1) Задний фон должен быть затемнён, но не полностью черный (Создаем класс overlay, который будет затемнять всю страницу)
2) Модальное окно находиться ровно по центру страницы, независимо от масштаба*/

const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const authenticationButton = document.getElementById('openModal')
const closeModalButton = document.getElementById('closeModal')
authenticationButton.addEventListener('click', () => {
  overlay.classList.add('openOverlay')
  modal.classList.add('modal-showed')
})

closeModalButton.addEventListener('click', () => {
  modal.classList.remove('modal-showed')
  overlay.classList.remove('openOverlay')
})


/*9. В открытой модалке у нас будет форма авторизации: логин, пароль, кнопка "Войти". 
Используя объект с задания №6, проверяем, ввели ли мы правильные данные? 
Если да - то по нажатию на кнопку "Войти", модальное окно должно закрыться и пользователь должен получить сообщение об успешном входе, 
если нет - модальное окно не закрывается, пользователь получает сообщение об ошибке, например: "Неверный логин или пароль".*/

const signInButton = document.querySelector('.signIn')
const modalLogin = document.querySelector('.login-modal')
const modalPasswd = document.querySelector('.password-modal')

let currentUser;

signInButton.addEventListener('click', (authorization) => {
  let loginValue = modalLogin.value
  let passwdValue = modalPasswd.value
  if(loginValue !== dataCreatedOn.login || passwdValue !== dataCreatedOn.passwd) {
    authorization.preventDefault();
    alert("Неверный логин или пароль")
    return;
  }
  else {
    modal.classList.remove('modal-showed')
    overlay.classList.remove('openOverlay')
    alert('Успешный вход!')
    currentUser = dataCreatedOn;
    currentUser.lastLogin = new Date();
  }
})



