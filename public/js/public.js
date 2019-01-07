$(document).ready(function() {
	$("img").lazyload({
		placeholder: "../images/blank.jpg",
		event: "sporty",
		threshold: 200,
		effect: "fadeIn"
	})
	$.fn.createTab = function(d) {
		var e = {
			activeEvt: 'mouseover',
			activeCls: 'current'
		};
		$.extend(e, d);
		this.each(function() {
			var b = $(this);
			var c;
			b.find('ul.tab-title li').mouseover(e.activeEvt, function() {
				var a = $(this).index(),
					that = $(this);
				c = setTimeout(function() {
					that.addClass('current').siblings().removeClass('current');
					b.find('div.tab-content-list').animate({
						marginLeft: -855 * a
					}, 'slow')
				}, 300)
			}).mouseout(function() {
				clearTimeout(c)
			})
		})
	};
	if($(".content-tab-list").length > 0) {
		$(".content-tab-list").createTab();
	}
});
$(window).bind("load", function() {
	var c = setTimeout(function() {
		$("img").trigger("sporty")
	}, 2000);
	$('.scroll_top').click(function() {
		$('html,body').animate({
			scrollTop: '0px'
		}, 800)
	});
	(function() {
		var a = document.createElement('script');
		var b = window.location.protocol.split(':')[0];
		if (b === 'https') {
			a.src = 'https://zz.bdstatic.com/linksubmit/push.js'
		} else {
			a.src = 'http://push.zhanzhang.baidu.com/push.js'
		}
		var s = document.getElementsByTagName("script")[0];
		s.parentNode.insertBefore(a, s)
	})();
	var d = d || [];
	(function() {
		var a = document.createElement("script");
		a.src = "https://hm.baidu.com/hm.js?10053dff912ed5a0b33ce6ceaece6f1f";
		var s = document.getElementsByTagName("script")[0];
		s.parentNode.insertBefore(a, s)
	})();
	$('a[href*=#],area[href*=#]').click(function() {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var a = $(this.hash);
			a = a.length && a || $('[name=' + this.hash.slice(1) + ']');
			if (a.length) {
				var b = a.offset().top;
				$('html,body').animate({
					scrollTop: b
				}, 1000);
				return false
			}
		}
	});
	var e = new Swiper('.swiper-content1', {
		effect: 'fade',
		autoplay: 3500,
		autoplayDisableOnInteraction: false
	});
	var f = new Swiper('.swiper-content2', {
		effect: 'fade',
		autoplay: 3000,
		autoplayDisableOnInteraction: false
	});
	var g = new Swiper('.swiper-content3', {
		effect: 'fade',
		autoplay: 3500,
		autoplayDisableOnInteraction: false
	});
	var h = new Swiper('.swiper-content4', {
		effect: 'fade',
		autoplay: 3000,
		autoplayDisableOnInteraction: false
	});
	var i = new Swiper('.swiper-content5', {
		effect: 'fade',
		autoplay: 3500,
		autoplayDisableOnInteraction: false
	});
	var j = new Swiper('.swiper-content6', {
		effect: 'fade',
		autoplay: 3000,
		autoplayDisableOnInteraction: false
	})
});