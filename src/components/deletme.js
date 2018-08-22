import uuid from 'uuid';
let Database = [];

const saveData = () => {
  return localStorage.setItem('user', 'value');
}

const render = () => {
  Database.push(
    {
      name: inputEl,
      email: emailEl,
      id: uuid()
    }
  )

  saveData()
}