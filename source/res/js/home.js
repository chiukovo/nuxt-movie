$(document).ready(function() {
	var f = new Swiper('.gallery', {
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		slidesPerView: 6,
		spaceBetween: 18,
		autoplay: 3500,
		uniqueNavElements: false
	});
	var b = $("#sidebar-scroll").offset().top;
	var c = $(".content-bottom").offset().top - $("#sidebar-scroll").height();
	$(window).scroll(function() {
		var a = $(window).scrollTop();
		if (a > b) {
			$("#sidebar-scroll").css({
				"position": "fixed",
				"top": "0"
			});
			a > c ? $("#sidebar-scroll").css("top", -(a - c + 30)) : $("#sidebar-scroll").css("top", "0")
		} else {
			$("#sidebar-scroll").css({
				"position": "static"
			})
		}
	})
});


