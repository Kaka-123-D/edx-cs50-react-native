const classNames = {
  TODO_ITEM: "todo-container",
  TODO_CHECKBOX: "todo-checkbox",
  TODO_TEXT: "todo-text",
  TODO_DELETE: "todo-delete",
};

const list = document.getElementById("todo-list");
const itemCountSpan = document.getElementById("item-count");
const uncheckedCountSpan = document.getElementById("unchecked-count");

function createTodo(text) {
  const li = document.createElement("li");
  li.innerHTML =
    "<input type='checkbox' onchange=handleCheckbox(this) /><span>&nbsp;&nbsp;&nbsp;&nbsp;" +
    text +
    "&nbsp;&nbsp;&nbsp;&nbsp;</span><button onclick=deleteTodo(this) >delete</button>";
  return li;
}

function newTodo() {
  // get text
  const text = prompt("add Todo: ");
  console.log(text);
  if (text === "" || text === null) 
    return;

  //invoke createTodo and append list item
  list.appendChild(createTodo(text));

  // update counts
  itemCountSpan.innerHTML++;
  uncheckedCountSpan.innerHTML++;
}

function handleCheckbox(input) {
  if (input.checked) {
    uncheckedCountSpan.innerHTML--;
  } else {
    uncheckedCountSpan.innerHTML++;
  }
}

function deleteTodo(button) {
  const checked = button.parentNode.childNodes[0].checked;

  // delete
  button.parentNode.parentNode.removeChild(button.parentNode);

  // update counts
  itemCountSpan.innerHTML--;
  if (!checked) uncheckedCountSpan.innerHTML--;
}
