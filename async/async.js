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
  const loadNotification = document.getElementById('loading');
  if(localStorage.getItem('users')) {
    const usersFromStorage = JSON.parse(localStorage.getItem('users'));
    if(loadNotification) {
      loadNotification.remove();
    }
    provideData(usersFromStorage);
  }
  else {
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000)
    })
    try {
      const fetchedUsers = await getUsers();
      provideData(fetchedUsers);
      console.log(fetchedUsers);
      if(loadNotification) {
        loadNotification.remove();
      }
      localStorage.setItem('users', JSON.stringify(fetchedUsers));
    }
    catch (error) {
      alert('Ошибка! данные не загрузились.', error);
    }
  }
}
getUserData();

function provideData(data) {
  const template = document.getElementById('people-list');
  userList.innerHTML = '';
  data.forEach((item) => {
    const items = template.content.cloneNode(true);
    const specificDeleteBtn = items.querySelector('.delete-specific-card');
    specificDeleteBtn.addEventListener('click', () => {
      deleteUser(item.id)
    })
    items.querySelector('.id').textContent = item.id;
    items.querySelector('.name').textContent = item.name;
    items.querySelector('.surname').textContent = item.surname;
    items.querySelector('.email').textContent = item.email;
    items.querySelector('.age').textContent = item.age;
    userList.append(items);
  });
}

const deleteAllCardBtn = document.getElementById('delete-all-card-btn');
deleteAllCardBtn.addEventListener('click', () => {
  localStorage.removeItem('users');
  provideData([]);
})

const getAllCardBtn = document.getElementById('get-all-card-btn');
getAllCardBtn.addEventListener('click', async () => {
  try {
    const fetchedUsers = await getUsers();
    const usersFromStorage = JSON.parse(localStorage.getItem('users'));
    if(!usersFromStorage || usersFromStorage.length < fetchedUsers.length) {
      provideData(fetchedUsers);
      localStorage.setItem('users', JSON.stringify(fetchedUsers));
    }
    else {
      alert('Все пользователи отображены.');
    }
  }
  catch (error) {
    alert('Ошибка! данные не загрузились.', error);
  }
})

function deleteUser(itemId) {
  let usersFromStorage = JSON.parse(localStorage.getItem('users'));
  const filtered = usersFromStorage.filter((user) => {
    return user.id !== itemId;
  })
  usersFromStorage = filtered;
  localStorage.setItem('users', JSON.stringify(usersFromStorage));
  provideData(filtered)
}