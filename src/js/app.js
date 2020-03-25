import $ from "jquery";
import Tablesaw from "tablesaw";

import Tabs from './lib/tabs';
import Footer from './lib/footerSlick';
import MobileMenu from './lib/mobileMenu';


import "slick-carousel";
import "@fancyapps/fancybox";


Tabs();

Footer();

MobileMenu();


// Tablesaw init
Tablesaw.init();


// Slick init
// eslint-disable-next-line func-names
$(document).ready(function(){
	$(".product__image--main").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: ".product__images"
	});
	$(".product__images").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: ".product__image--main",
		dots: true,
		centerMode: true,
		focusOnSelect: true
	});
});
