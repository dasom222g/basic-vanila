const formEl = document.querySelector('form');
const todoInput = document.querySelector('.todo-input');
const todoUl = document.querySelector('.todoList');

// todo example
// const todo = {
//   id: 1,
//   todo: '밥먹기',
//   isComplete: false
// }

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
  {
    id: 3,
    todo: '산책하기',
    isComplete: false,
  },
];

// const todoList = [];

console.log('form', formEl);
const handleSubmit = (event) => {
  event.preventDefault();

  // todoItem 생성
  const newItem = {
    id: todoList.length + 1,
    todo: todoInput.value,
    isComplete: false,
  };

  // todoList에 추가
  todoList = [...todoList, newItem];

  // UI 추가
  updateTodo(newItem);

  // input 리셋
  todoInput.value = null;
};

const updateTodo = (item) => {
  // li 세팅
  const li = document.createElement('li');
  const deleteButton = document.createElement('button');
  li.innerText = item.todo;
  li.dataset.id = item.id;

  // 삭제버튼 세팅
  deleteButton.setAttribute('type', 'button');
  deleteButton.classList.add('delete-button');
  deleteButton.innerText = '❌';
  deleteButton.addEventListener('click', handleDelete);
  li.appendChild(deleteButton);

  // 최종적으로 UI변경
  todoUl.appendChild(li);

  // TODO
  // 구조분해 할당을 이용해 item 세팅을 간결하게 리팩토링 할것
  // delete 버튼에 클래스 추가하여 스타일 설정
};

// delete Item
const handleDelete = (event) => {
  const li = event.target.parentNode;
  const { id } = li.dataset;

  // 데이터 삭제
  todoList = todoList.filter((todo) => todo.id !== Number(id));

  // UI 삭제
  li.remove();
};

// 첫 페이지 진입시
const setTodoList = () => {
  todoList.forEach((item) => {
    updateTodo(item);
  });
};

setTodoList();
formEl.addEventListener('submit', handleSubmit);
