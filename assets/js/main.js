const $$ = (selector) => {
	const elements = document.querySelectorAll(selector);
	return elements.length === 1 ? elements[0] : [...elements];
};

// slide show
let currentSlide = 0;
const showSlide = (index) => {
	const slides = $$(".slide-content");
	const positionSlides = $$(".slide-position__item");

	if (index >= slides.length) {
		currentSlide = 0;
	} else if (index < 0) {
		currentSlide = slides.length - 1;
	}

	for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}

	for (let i = 0; i < positionSlides.length; i++) {
		positionSlides[i].classList.remove("active");
	}

	slides[currentSlide].style.display = "block";
	positionSlides[currentSlide].classList.add("active");
};

const btnChangeSlide = (value) => {
	showSlide((currentSlide += value));
};

showSlide(currentSlide++);

// accordion nav mobile
const navMenu = $$(".accordion-nav");
for (let i = 0; i < navMenu.length; i++) {
	navMenu[i].onclick = () => {
		const parentContainer = navMenu[i].parentElement;

		const subMenu = parentContainer.nextElementSibling;
		if (subMenu.style.maxHeight) {
			subMenu.style.maxHeight = null;
		} else {
			subMenu.style.maxHeight = subMenu.scrollHeight + "px";
		}
	};
}
