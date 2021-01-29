
//image
function ibg() {

	let ibg = document.querySelectorAll("._ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}
ibg();

//mobileMenu
let burger = document.querySelector(".menu-burger");
let menu = document.querySelector(".menu-header");
let body = document.querySelector("body");
burger.addEventListener("click", function (e) {
	burger.classList.toggle("active");
	menu.classList.toggle("active");
	body.classList.toggle("lock");
});


//tabs
let tabs = document.querySelectorAll("._tabs");
for (let index = 0; index < tabs.length; index++) {
	let tab = tabs[index];
	let tabs_items = tab.querySelectorAll("._tabs-item");
	let tabs_blocks = tab.querySelectorAll("._tabs-block");
	for (let index = 0; index < tabs_items.length; index++) {
		let tabs_item = tabs_items[index];
		tabs_item.addEventListener("click", function (e) {
			for (let index = 0; index < tabs_items.length; index++) {
				let tabs_item = tabs_items[index];
				tabs_item.classList.remove('_active');
				tabs_blocks[index].classList.remove('_active');
			}
			tabs_item.classList.add('_active');
			tabs_blocks[index].classList.add('_active');
			e.preventDefault();
		});
	}
}

//fixedMenu
window.onscroll = () => {
	const headerRow = document.querySelector('.header__row');
	const bodyScroll = window.scrollY;

	if (bodyScroll > 400) {
		headerRow.classList.add('_fixed-menu');
	}
	else if (bodyScroll < 100) {
		headerRow.classList.remove('_fixed-menu');
	}
};