exports.install = function(Vue, options) {
  /*
     * api encrypt  key + (time = h + m) + key
     */
  Vue.prototype.apiEncrypt = function() {
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let time = h + m;
    let key = process.env.VUE_APP_API_KEY;
    let result = md5(key + time + key);

    return result;
  };

  Vue.prototype.getVIESHOWCINEMAS = function() {
    let var0 = "35";
    let var1 = "l589";
    let date = new Date();
    var var3 = date.toLocaleString('zh-CN', { hour12: false })
      .replace(/\//g, '-').replace(/\b\d\b/g, '0$&');
    let enc_str = "3939889gotit" + var3 + "3939889gotit";
    let md5Str = md5(enc_str);
    let var2 = md5Str;

    return 'http://www.tv222.net/txconn8899.aspx?HostID=' + var0 + '&cashagent=' + var1 +'&code=' + var2 + '&time=' + var3 + '&u=500';
  };

  Vue.prototype.setSiderJQ = function() {
    var b = $("#sidebar-scroll").offset().top;
    var c = $(".footer").offset().top - $("#sidebar-scroll").height();
    var total = this.$store.state.listData.total;

    $(window).scroll(function() {
      var a = $(window).scrollTop();
      if (a > b && (total >= 10 || typeof total == "undefined")) {
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
  };

  //设置cookie
  Vue.prototype.setCookie = (c_name, value) => {
    var expiredays = 'in3Minutes';

    var exdate = new Date();
    exdate.setDate(exdate.getDate() + expiredays);
    document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
  }

  //获取cookie、
  function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
      return (arr[2]);
    else
      return null;
  }

  Vue.prototype.getCookie = getCookie;
  //删除cookie
  Vue.prototype.delCookie =(name) => {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null)
      document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
  }

  //public.js
  Vue.prototype.publicJS = function() {
    $("img").lazyload({
      placeholder: "/images/blank.jpg",
      event: "sporty",
      threshold: 200,
      effect: "fadeIn"
    })


    $(window).bind("load", function() {
      var c = setTimeout(function() {
        $("img").trigger("sporty")
      }, 2000);

      $('.scroll_top').click(function(e) {
        e.stopPropagation();
        e.preventDefault();

        $('html,body').animate({
          scrollTop: '0px'
        }, 200)
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
        a.src = "https://hm.baidu.com/hm.js?120c1d4b61990a5ef0e0f05a56a9ddaa";
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
  }

  //is undefined ?
  Vue.prototype.isUndefined = (target) => {
    return typeof target == 'undefined' ? true : false;
  }

  //设置title alt 名稱
  Vue.prototype.setTitleName = (name) => {
    return Vue.prototype.webTitle + '《'+ name +'》高清線上看';
  }

  //取得對應名字
  Vue.prototype.getCidCnName = (cid) => {
    switch(cid) {
      case 3:
        return '电影';
        break;
      case 4:
        return '剧集';
        break;
      case 6:
        return '动漫';
        break;
    }

    return '';
  }

  //取得對應名字
  Vue.prototype.getCidEnName = (cid) => {
    switch(cid) {
      case 3:
        return 'movie';
        break;
      case 4:
        return 'episode';
        break;
      case 6:
        return 'anime';
        break;
    }

    return '';
  }

  //為正整数
  Vue.prototype.isPositiveInt = (target) => {
    var r = /^[0-9]*[0-9][0-9]*$/　　//正整数
    var check = true;

    target.forEach(function(val){
      if ( ! r.test(val)) {
        check = false;
      }
    });

    return check;
  }
};
