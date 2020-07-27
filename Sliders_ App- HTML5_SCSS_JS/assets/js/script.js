let slideIndex = 0;

const first_btn = document.querySelector("#first-btn")
first_btn.addEventListener('click', function () {
    slideIndex = 0;
})

const second_btn = document.querySelector("#second-btn")
second_btn.addEventListener('click', function () {
    slideIndex = 1;
})

const third_btn = document.querySelector("#third_btn")
third_btn.addEventListener('click', function () {
    slideIndex = 2;
})

const showSlides = () => {
    const slides = document.getElementsByClassName("slider__mySlides");
    const dots = document.getElementsByClassName("slider__dot");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"

    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "")
    }

    slides[slideIndex - 1].style.display = "block"
    dots[slideIndex - 1].className += " active"


    x = console.log(setTimeout(showSlides, 3000))

};

showSlides();

