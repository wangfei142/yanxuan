    
  //通告栏文字滚动
  (function () {
    var topautoTimer = setInterval(autoLi, 3000)

    function autoLi() {
        $('.topauto-li').animate({
            top: "-20px"
        }, 500, function () {
            $('.topauto-li')[0].style.top = 12 + "px"
        })
    }
    $('.topauto-ul').hover(function () {
        clearInterval(topautoTimer)
        $('.topauto-li').css("color", "white")
        $('.topauto-li').css("text-decoration", "none")
    }, function () {
        $('.topauto-li').css("color", "#b4a078")
        $('.topauto-li').css("text-decoration", "underline")
        topautoTimer = setInterval(autoLi, 1000)
    })
})();

$(".title-li-er").hover(function () {
  $(this).children().eq(1).css('display', 'block')
  $(this).children().eq(2).css('display', 'block')
}, function () {
  $(this).children().eq(1).css('display', 'none')
  $(this).children().eq(2).css('display', 'none')
})


// 头部优惠券吸顶
$(function () {

  $(window).scroll(function () {
      //判断卷去的高度超过topPart的高度
      //1. 让navBar有固定定位
      //2. 让mainPart有一个marginTop
      if ($(window).scrollTop() >= 176) {
          $(".ticKet").addClass("fixed");
          $(".divhr").addClass("fixed");
          // $(".main").css("marginTop", $(".nav").height() + 10);
      } else {
          $(".ticKet").removeClass("fixed");
          $(".divhr").removeClass("fixed");
          // $(".main").css("marginTop", 10);
      }

  });

});


// 下单组件悬浮
$(function () {

  $(window).scroll(function () {
      //判断卷去的高度超过topPart的高度
      //1. 让navBar有固定定位
      //2. 让mainPart有一个marginTop
      if ($(window).scrollTop() < 300) {
          $(".order").addClass("fixed_order");
          // $(".main").css("marginTop", $(".nav").height() + 10);
      } else {
          $(".order").removeClass("fixed_order");
          // $(".main").css("marginTop", 10);
      }

  });

});

// 价格数据

// <!-- 滚走导航-->
$('.scrollNavLogin').hover(function () {
    $('.scrollNavLogin-erul').css('display', 'block')
    $('.scrollNavLogin > i').css('display', 'block')
}, function () {
    $('.scrollNavLogin-erul').css('display', 'none')
    $('.scrollNavLogin > i').css('display', 'none')
})


$(".scrollSearch>button").click(function () {
    $('.scrollSearch').css('display', "none")
    $('.noneSearch').css('display', "block")
})
$(".scrollNavSearch").click(function () {
    $('.scrollSearch').css('display', "block")
    $('.noneSearch').css('display', "none")
})
$(document).scroll(function () {
    if ($(document).scrollTop() >= 177) {
        $(".topNav").animate({
            top: "0px"
        }, 10)
    } else if ($(document).scrollTop() <= 176) {
        // console.log($(document).scrollTop())
        $(".topNav").animate({
            top: "-50px"
        }, 10)
    }

})

