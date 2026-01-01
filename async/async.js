const list = document.getElementById('peoples');
async function outputData() {
  const load = document.getElementById('loading');
  if(localStorage.getItem('users')) {
    const parsedData = JSON.parse(localStorage.getItem('users'));
    if(load) {
      load.remove();
    }
    list.innerHTML = ''
    appendData(parsedData.users);
  }
  else {
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000)
    })
    try {
      const response = await fetch('data.json');
      if(!response.ok) {
        throw new Error('Файл не найден');
      }
      const peopleData = await response.json();
      list.innerHTML = '';
      appendData(peopleData.users);
      console.log(peopleData);
      if(load) {
        load.remove();
      }
      localStorage.setItem('users', JSON.stringify(peopleData));
    }
  catch (error) {
      alert('Ошибка! данные не загрузились.', error);
      }
    }
  }
outputData();

function appendData(data) {
  data.forEach((item) => {
    const deleteSpecificCard = document.createElement('button');
    deleteSpecificCard.addEventListener('click', () => {
      userCard.remove();
      const parsedData = JSON.parse(localStorage.getItem('users'));
      const filtered = parsedData.users.filter((users) => {
        return users.id !== item.id;
      })
      parsedData.users = filtered;
      localStorage.setItem('users', JSON.stringify(parsedData));
    })
    deleteSpecificCard.textContent = 'Удалить определенную карточку';
    const userCard = document.createElement('li');
    const userId = document.createElement('h3');
    userId.textContent = item.id;
    const userName = document.createElement('p');
    userName.textContent = item.name;
    const userSurname = document.createElement('p');
    userSurname.textContent = item.surname;
    const userEmail = document.createElement('p');
    userEmail.textContent = item.email;
    const userAge = document.createElement('p');
    userAge.textContent = item.age;
    userCard.append(userId, userName, userSurname, userEmail, userAge, deleteSpecificCard);
    list.append(userCard);
  });
}

const deleteAllCard = document.getElementById('deleteAllCard');
deleteAllCard.addEventListener('click', () => {
  list.innerHTML = '';
  localStorage.removeItem('users');
})

const getAllCard = document.getElementById('getAllCard');
getAllCard.addEventListener('click', async () => {
  const response = await fetch('data.json');
  const peopleData = await response.json();
  const parsedData = JSON.parse(localStorage.getItem('users'));
  if(!parsedData || parsedData.users.length < peopleData.users.length) {
    localStorage.removeItem('users');
    outputData();
  }
  else {
    alert('Все пользователи отображены.');
  }
})
