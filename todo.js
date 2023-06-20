const formEl = document.querySelector('form');
const todoInput = document.querySelector('.todo-input');
const todoUl = document.querySelector('.todoList');

// todo example
// const todo = {
//   id: 1,
//   todo: '밥먹기',
//   isComplete: false,
// };

let todoList = [
  {
    id: 1,
    todo: '공부하기',
    isComplete: false,
  },
  {
    id: 2,
    todo: '밥 먹기',
    isComplete: false,
  },
];

// let todoList = [];

// const value = todoInput.value;
const name = todoInput.name;

// const { value, name, style} = todoInput;

const addTodo = (event) => {
  event.preventDefault();

  // 데이터 변경
  const newItem = {
    id: todoList.length + 1,
    todo: todoInput.value,
    isComplete: false,
  };
  // todoList.push(newItem)
  todoList = [...todoList, newItem];
  console.log('todoList', todoList);

  // UI변경
  uiUpdate(newItem);
  listUiUpdte();
};

const listUiUpdte = () => {
  todoList;
};

const uiUpdate = (item) => {
  // UI변경
  const li = document.createElement('li');
  li.innerText = item.todo;

  todoUl.appendChild(li);

  todoInput.value = '';
};

const initRender = () => {
  todoList.forEach((item) => {
    uiUpdate(item);
  });
};

initRender();

formEl.addEventListener('submit', addTodo);
