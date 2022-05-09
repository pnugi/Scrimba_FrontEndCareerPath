/* Setting slide position to 0 and counting total slides */
const slides = document.getElementsByClassName("carousel-item");
let slidePosition = 0;
const totalSlides = slides.length;



/* Getting buttons and setting functions for them */
/* function without () !! */
document.getElementById('carousel-button-prev').addEventListener('click', moveToPrevSlide);
document.getElementById('carousel-button-next').addEventListener('click', moveToNextSlide);

function hideAllSlides() {
    for (let slide of slides) {
        slide.classList.remove("carousel-item-visible");
        slide.classList.add("carousel-item-hidden");
    }
}

function moveToNextSlide() {
    hideAllSlides();

    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }

    /* Adding display:block to next image */
    slides[slidePosition].classList.add("carousel-item-visible");
}

function moveToPrevSlide() {
    hideAllSlides();
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }
    slides[slidePosition].classList.add("carousel-item-visible");
}




/* For of loop
const people = [{ name: 'Karl', location: 'UK' }, { name: 'Steve', location: 'US' }];
for (let person of people) {
    console.log(person.name);
    console.log(person.location);
}
*/