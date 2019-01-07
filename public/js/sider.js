$(document).ready(function() {
	var b = $("#sidebar-scroll").offset().top;
	var c = $(".footer").offset().top - $("#sidebar-scroll").height();
	$(window).scroll(function() {
		var a = $(window).scrollTop();
		if (a > b) {
			$("#sidebar-scroll").css({
				"position": "fixed",
				"top": "0"
			});
			a > c ? $("#sidebar-scroll").css("top", -(a - c + 60)) : $("#sidebar-scroll").css("top", "0")
		} else {
			$("#sidebar-scroll").css({
				"position": "static"
			})
		}
	})
});