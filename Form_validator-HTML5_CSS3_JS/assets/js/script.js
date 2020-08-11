const username = document.querySelector('#username');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');
const email = document.querySelector('#email');
const clearBtn = document.querySelector('.validator__clear-btn');
const sendBtn = document.querySelector('.validator__send-btn')
const popup = document.querySelector('.validator__popup');
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


const checkLenght = (input, min) => {
    if (input.value.length < min) {
        showError(input, `too short ${input.previousElementSibling.innerText.slice(0, input.value.length - 1)} it should by ${min}`) // or slice(0, -1)
    }

}

const checkPassword = (password, repeatPassword) => {
    if (password.value !== repeatPassword.value) {
        showError(repeatPassword, `RepetPassword it isn't the same llike password`)
    }
}

const checkMail = email => {

    // re from stackoverflow "regex for email js"
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(email.value)) {
        clearErorr(email)
    } else {
        showError(email, "Email isn't valid")
    }
}

const chceckErrors = () => {
    const allInputs = document.querySelectorAll('.validator__form-box');
    let errorCount = 0;

    allInputs.forEach(el => {
        if (el.classList.contains('error')) {
            errorCount++;
        }
    })

    if (errorCount === 0) {
        popup.classList.add('validator__popup--show-popup');
    }

    console.log(errorCount)
}

sendBtn.addEventListener('click', e => {
    e.preventDefault();

    checkForm([username, password, password2, email])
    checkLenght(username, 3)
    checkLenght(password, 8)
    checkPassword(password, password2)
    checkMail(email)
    chceckErrors();

})

const clearInputs = e => {
    e.preventDefault();
    [username, password, password2, email].forEach(el => {
        el.value = ''
        clearErorr(el)
    })
}

clearBtn.addEventListener('click', clearInputs);