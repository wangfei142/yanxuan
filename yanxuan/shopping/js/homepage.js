
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



// 购物车组件
$('.shopcar').mousemove(function () {
    $('.shopcar .adddet').show();
});
$('.shopcar').mouseout(function () {
    $('.shopcar .adddet').hide();
});


function initA() {
    var carS = new CarS();

    function CarS() { }
    // //获取购物车商品
    CarS.prototype.getCar = function () {
        //     //没有数据默认返回一个空数组
        return JSON.parse(localStorage.getItem('cartlist')) || [];
    }

    var cartlistA = carS.getCar();
    // //循环购物车商品，构建tr标签
    var strA = ``;
    var numA = 0;
    var price_unmA = 0;
    var det_num = 0;
    for (var i = 0; i < cartlistA.length; i++) {
        var itemPrice = parseFloat(cartlistA[i].money) * parseInt(cartlistA[i].number);
        numA += cartlistA[i].number;
        price_unmA += itemPrice;
        strA += ` <div class="detlist">
                <div class="detlist-left ">
                    <img src="./details/images/img1/1.jpg" alt=""><span></span>
                </div>
                <div class="dettxt">
                    <div class="detDescribe">
                        <div class="p-1">${cartlistA[i].title}</div><i class="i-2">￥</i><span class="span-0">${cartlistA[i].money}</span>
                        <div class="p-2"> <span class="detN">1个装</span>
                            <span class="detNum"> &nbsp;x <i class="dgNum">${cartlistA[i].number}</i></span></div>

                    </div>
                </div>
                <p class="del-det">
                    <i onclick="car.delGoods(${cartlistA[i].id})"></i>
                </p>
            </div>`;
        det_num = cartlistA[i].number

    }
    // 所有商品
    console.log(numA)
    $(".pop").html(strA);
    $('.i-1').html(numA);
    // 已选商品数量
    // 所有商品总价格
    $('.total-prices i').html(price_unmA);
}
initA();
// 

