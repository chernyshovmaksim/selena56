import 'mmenu-light';
function mobileMenu() {

	const link = document.querySelector('a[href="#my-menu"]');

	const menu = new MmenuLight(
		document.querySelector("#my-menu")
	);

	const navigator = menu.navigation({
		title: 'Меню сайта'
	});
	const drawer = menu.offcanvas();

	if (link) {
		link.addEventListener('click', (evnt) => {
			evnt.preventDefault();
			drawer.open();
		});
	}
}

module.exports = mobileMenu;
