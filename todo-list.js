
const todoList = [{
  name: 'make dinner',
  dueDate: '2023-12-22'
},
{
  name: 'wash dishes',
  dueDate: '2023-12-22'
}];


renderTodoList();
function renderTodoList() {


  let todoListHTML = '';
  for (i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i]
    const name = todoObject.name;
    const dueDate = todoObject.dueDate;
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button onclick="
    todoList.splice(${i},1);
    renderTodoList();
    " class="delete-todo-button">Delete</button>
    `;
    todoListHTML += html;
  };

  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;


}
function addTodo() {
  const inputElement = document.querySelector('.inputButton-js');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input')

  const dueDate = dateInputElement.value;


  todoList.push({
    name,
    dueDate
  });

  inputElement.value = '';
  renderTodoList();
}