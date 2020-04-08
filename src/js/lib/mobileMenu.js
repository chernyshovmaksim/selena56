import 'mmenu-light';
function mobileMenu() {
	const menu = new MmenuLight(
		document.querySelector("#my-menu")
	);

	const navigator = menu.navigation({
		title: 'Меню сайта'
	});
	const drawer = menu.offcanvas();

	document.querySelector('a[href="#my-menu"]')
		.addEventListener('click', (evnt) => {
			evnt.preventDefault();
			drawer.open();
		});
}

module.exports = mobileMenu;
