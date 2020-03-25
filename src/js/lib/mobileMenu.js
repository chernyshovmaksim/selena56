function mobileMenu() {
	let closeBtn = $('.fa-times');
	let barsBtn = $('.fa-bars');
	let menu = $('.mobile-menu');

	$(closeBtn).on('click', function(e){
		$(menu).css({
			left: '100%'
		});
	});

	$(barsBtn).on('click', function(e){
		$(menu).css({
			left: '0'
		});
	});
}

module.exports = mobileMenu;
