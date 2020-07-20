let $todoInput;
let $alertInfo;
let $addBtn;
let $ulList;
let $newTask;
let $popup;
let $popupinfo;
let $editedTodo;
let $popupInput;
let $addPopupBtn;
let $closeTodoBtn;
let $idNumber = 0;
let $allTask;


const main = () => {
    prepareDOMElements();
    prepareDOMEvents();
}


const prepareDOMElements = () => {
    $todoInput = document.querySelector('.todo__input');
    $alertInfo = document.querySelector('.todo__list--info');
    $addBtn = document.querySelector('.todo__top--btn');
    $ulList = document.querySelector('.todo__list Ul');
    $popup = document.querySelector('.todo__popup');
    $popupinfo = document.querySelector('.todo__popup-main--info');
    $popupInput = document.querySelector('.todo__popup-main--input');
    $addPopupBtn = document.querySelector('.accept');
    $closeTodoBtn = document.querySelector('.cancel');
    $allTask = $ulList.getElementsByTagName('li');
}

const prepareDOMEvents = () => {
    $addBtn.addEventListener('click', addNewTask)
}


const addNewTask = () => {
    if ($todoInput.value !== '') {
        $newTask = document.createElement('li');
        $newTask.innerText = $todoInput.value;
        $ulList.appendChild($newTask);
        $todoInput.value = ""
        $alertInfo.innerText = ""
        createToolsArea()
    } else {
        $alertInfo.innerText = "Enter the content of task!"
    }
}

const createToolsArea = () => {
    const toolsPanel = document.createElement('div');
    toolsPanel.classList.add('todo__tool');
    $newTask.appendChild(toolsPanel)

    const completeBtn = document.createElement('button');
    completeBtn.classList.add('todo__complete');
    completeBtn.innerHTML = '<i class="fas fa-check"></i>'
    toolsPanel.appendChild(completeBtn)

    const editBtn = document.createElement('button');
    editBtn.classList.add('todo__edit');
    editBtn.innerText = 'EDIT';
    toolsPanel.appendChild(editBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('todo__delte');
    deleteBtn.innerHTML = '<i class="fas fa-times"></i>';
    toolsPanel.appendChild(deleteBtn);

}

document.addEventListener('DOMContentLoaded', main)

