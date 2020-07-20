let $todoInput; // input
let $alertInfo; // info o braku zadan
let $addBtn; // przcisk
let $ulList; // lista zadan
let $newTask; // nowy dodany li
let $popup; // pobrany popup
let $popupinfo; // alert w popupie, jak sie doda pusty tekst
let $editedTodo; //edtytowany Todo
let $popupInput; // tekst wpisywany w input
let $addPopupBtn; // przycisk "zatwierdz" w popup'e
let $closeTodoBtn; // przycisk do zamykania popup'a
let $idNumber = 0;
let $allTask;


const main = () => {
    prepareDOMElements();
    prepareDOMEvens();
}


// pobieramy elelemnty
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

