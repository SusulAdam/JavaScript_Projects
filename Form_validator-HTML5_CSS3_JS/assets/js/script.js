const username = document.querySelector('#username');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');
const email = document.querySelector('#email');
const clearBtn = document.querySelector('.validator__clear-btn');
const sendBtn = document.querySelector('.validator__send-btn')
const poup = document.querySelector('.validator__popup');
const popupbtn = document.querySelector('.validator__popup--close-btn')

const clearInputs = (e) => {
    e.preventDefault();
    [username, password, password2, email].forEach(el => {
        el.value = ''
    })
}

clearBtn.addEventListener('click', clearInputs);