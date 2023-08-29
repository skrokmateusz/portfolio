const burgerButton = document.querySelector('.burger-btn');
const burgerNav = document.querySelector('.burger-nav');
const burgerIcon = document.querySelector('.burger-btn__bars');
const liItems = document.querySelectorAll('.nav__item');

const navigationHandler = () => {
	burgerNav.classList.toggle('burger-nav--active');
	burgerIcon.classList.toggle('burger-btn__bars--active');
	liItems.forEach(item => {
		item.addEventListener('click', () => {
			burgerNav.classList.remove('burger-nav--active');
			burgerIcon.classList.remove('burger-btn__bars--active');
		});
	});
};

burgerButton.addEventListener('click', navigationHandler);
