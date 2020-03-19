import Tablesaw from "tablesaw";
import $ from "jquery";
import	Tabs from './lib/tabs';

import "slick-carousel";
import "@fancyapps/fancybox";

// Tabs init
Tabs();

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
