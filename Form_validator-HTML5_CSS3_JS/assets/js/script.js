const username = document.querySelector('#username');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');
const email = document.querySelector('#email');
const clearBtn = document.querySelector('.validator__clear-btn');
const sendBtn = document.querySelector('.validator__send-btn')
const poup = document.querySelector('.validator__popup');
const popupbtn = document.querySelector('.validator__popup--close-btn')


const showError = (input, msg) => {
    const formBox = input.parentElement;
    const errorMsg = formBox.querySelector('.validator__error-text')
    formBox.classList.add('error');
    errorMsg.textContent = msg;
}


const clearErorr = input => {
    const formBox = input.parentElement;
    formBox.classList.remove('error');
}

const checkForm = input => {
    input.forEach(el => {
        if (el.value === '') {
            showError(el, el.placeholder)
        } else {
            clearErorr(el)
        }
    })
}


sendBtn.addEventListener('click', e => {
    e.preventDefault();

    checkForm([username, password, password2, email])
})

const clearInputs = e => {
    e.preventDefault();
    [username, password, password2, email].forEach(el => {
        el.value = ''
    })
}

clearBtn.addEventListener('click', clearInputs);