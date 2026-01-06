const getUsers = async () => {
  const response = await fetch('data.json');
  if(!response.ok) {
    throw new Error('Файл не найден');
  }
  const users = await response.json();
  return users;
}
const userList = document.getElementById('user-list');
async function getUserData() {
  const load = document.getElementById('loading');
  if(localStorage.getItem('users')) {
    const parsedData = JSON.parse(localStorage.getItem('users'));
    if(load) {
      load.remove();
    }
    userList.innerHTML = '';
    provideData(parsedData.users);
  }
  else {
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000)
    })
    try {
      const peopleData = await getUsers();
      userList.innerHTML = '';
      provideData(peopleData.users);
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
getUserData();

function provideData(data) {
  const template = document.getElementById('people_list');
  data.forEach((item) => {
    const items = template.content.cloneNode(true);
    const specificDeleteBtn = items.querySelector('.deleteSpecificCard');
    specificDeleteBtn.addEventListener('click', (userDelete) => {
      userDelete.target.closest('li').remove();
      const parsedData = JSON.parse(localStorage.getItem('users'));
      const filtered = parsedData.users.filter((users) => {
        return users.id !== item.id;
      })
      parsedData.users = filtered;
      localStorage.setItem('users', JSON.stringify(parsedData));
    })
    items.querySelector('.id').textContent = item.id;
    items.querySelector('.name').textContent = item.name;
    items.querySelector('.surname').textContent = item.surname;
    items.querySelector('.email').textContent = item.email;
    items.querySelector('.age').textContent = item.age;
    userList.append(items);
  });
}

const deleteAllCardBtn = document.getElementById('deleteAllCardBtn');
deleteAllCardBtn.addEventListener('click', () => {
  userList.innerHTML = '';
  localStorage.removeItem('users');
})

const getAllCardBtn = document.getElementById('getAllCardBtn');
getAllCardBtn.addEventListener('click', async () => {
  try {
  const peopleData = await getUsers();
  const parsedData = JSON.parse(localStorage.getItem('users'));
  if(!parsedData || parsedData.users.length < peopleData.users.length) {
    localStorage.removeItem('users');
    getUserData();
  }
  else {
    alert('Все пользователи отображены.');
  }
}
catch (error) {
  alert('Ошибка! данные не загрузились.', error);
}
})