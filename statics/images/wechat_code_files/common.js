$(document).ready(function () {
    $(".dropdown").hover(
		function () {
		    $(this).find(".dropdown-title").siblings().show();
		    $(this).css("backgroundColor", "white").css("border", "1px solid #D0D0D0");
		    $(this).find(".icon-arr").css("backgroundPosition", "-17px -96px");
		}, function () {
		    $(this).find(".dropdown-title").siblings().hide();
		    $(this).css("backgroundColor", "transparent").css("border", "1px solid transparent");
		    $(this).find(".icon-arr").css("backgroundPosition", "-3px -96px");
		})
    $(".item-letter").hover(
		function () {
		    $(this).find(".icon-letter").css("backgroundPosition", "-20px -23px");
		    $(this).find("a").css("color", "#bc2626");
		}, function () {
		    $(this).find(".icon-letter").css("backgroundPosition", "0 -23px");
		    $(this).find("a").css("color", "#333");
		})
    $(".dlul01").hover(
      function () {
          $(this).find(".icon").css("backgroundPosition", "-20px -36px");
          $(this).find("a").css("color", "#bc2626");
      }, function () {
          $(this).find(".icon").css("backgroundPosition", "0 -36px");
          $(this).find("a").css("color", "#333");
      })
    $(".dlul02").hover(
      function () {
          $(this).find(".icon").css("backgroundPosition", "-20px -55px");
          $(this).find("a").css("color", "#bc2626");
      }, function () {
          $(this).find(".icon").css("backgroundPosition", "0 -55px");
          $(this).find("a").css("color", "#333");
      })
    $(".dlul03").hover(
      function () {
          $(this).find(".icon").css("backgroundPosition", "-20px -74px");
          $(this).find("a").css("color", "#bc2626");
      }, function () {
          $(this).find(".icon").css("backgroundPosition", "0 -74px");
          $(this).find("a").css("color", "#333");
      });

    //// 新layout
    $(".topNav").hover(function () {
        $('.nav-list').css("display", "block");
    }, function () {
        var timer = setTimeout(function () {
            if (!$(".nav-list").hasClass('active')) {
                if ($('.nav-list').hasClass('defaulthide'))
                {
                    $('.nav-list').css("display", "none");
                }
            }
        }, 100);
    });

    $('.nav-list').hover(function () {
        $('.nav-float').show();
        $(this).addClass("active");
    }, function () {
        if ($(this).hasClass('defaulthide')) {
            var timer = setTimeout(function () {
                if (!$('.nav-float').hasClass('active')) {
                    $('.nav-float').hide();
                    $('.nav-item').removeClass("active");
                    $('.nav-list').hide();
                    $('.nav-list').removeClass("active");
                }
            }, 100);
        } else {
            var timer = setTimeout(function () {
                if (!$('.nav-float').hasClass('active')) {
                    $('.nav-float').hide();
                    $('.nav-item').removeClass("active");
                }
            }, 100);
        }
        $(this).removeClass("active");
    });

    $('.nav-float').hover(function () {
        $(this).addClass("active");
    }, function () {
        $(this).removeClass("active");
        $(this).css("display", "none");
        var timer = setTimeout(function () {
            if (!$('.nav-list').hasClass('active'))
            {
                if ($('.nav-list').hasClass('defaulthide')) {
                    $('.nav-list').css("display", "none");
                } else {
                    $('.nav-item').removeClass("active");
                }
            }
        }, 100);
    });

    $('.nav-item').hover(function () {
        $(this).addClass("active").siblings().removeClass("active");
        var fcode = $(this).attr("data-fcode");
        $('.nav-float').find('ul[data-fcode=' + fcode + ']').show().siblings().hide();
    }, function () {
    });

    var eBackTop = document.getElementById("backToTop");
    if (eBackTop) {
        window.onscroll = function () {
            if (document.documentElement.scrollTop + document.body.scrollTop > 100) {
                document.getElementById("backToTop").style.display = "block";
            }
            else {
                document.getElementById("backToTop").style.display = "none";
            }
        }
    }

    $(document).on("click", "#backToTop", function () {
        $('body,html').animate({ scrollTop: 0 }, 500);
    });
});

/**
* 获取查询参数
*/
function getQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
}
