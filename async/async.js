const fetchUsers = async () => {
  const response = await fetch('users.json');
  if (!response.ok) {
    throw new Error('Файл не найден');
  }
  const users = await response.json();
  return users;
}

const userList = document.getElementById('user-list');
async function getUsers() {
  const loadNotification = document.getElementById('loading');
  if (localStorage.getItem('users')) {
    const usersFromStorage = JSON.parse(localStorage.getItem('users'));
    if (loadNotification) {
      loadNotification.remove();
    }
    renderUsers(usersFromStorage);
  }
  else {
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000)
    })
    try {
      const fetchedUsers = await fetchUsers();
      renderUsers(fetchedUsers);
      console.log(fetchedUsers);
      if (loadNotification) {
        loadNotification.remove();
      }
      localStorage.setItem('users', JSON.stringify(fetchedUsers));
    }
    catch (error) {
      alert('Ошибка! данные не загрузились.', error);
    }
  }
}
getUsers();

function renderUsers(data) {
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
  renderUsers([]);
})

const getAllCardBtn = document.getElementById('get-all-card-btn');
getAllCardBtn.addEventListener('click', async () => {
  try {
    const fetchedUsers = await fetchUsers();
    const usersFromStorage = JSON.parse(localStorage.getItem('users'));
    if (!usersFromStorage || usersFromStorage.length < fetchedUsers.length) {
      renderUsers(fetchedUsers);
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
  renderUsers(filtered)
}