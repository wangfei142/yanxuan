
//更换大图
var a =0;
var lis = $('.commodity-left>ul').children();
for (var i = 0; i < lis.length; i++) {
    (function (i) {
         
        lis.eq(i).click(function () {
            $('.bigimg>img').attr('src',`images/img1/${i + 1}-1.jpg`);
            $('.imgB>img').attr('src', `images/img1/${i + 1}-2.jpg`);
             a = i;
            getIndex(i);
            
        });
    })(i);
    
}
function getIndex(i) {

  if(i == undefined){
    
    $('.bigimg').click(function () {
        $('.carousel').fadeIn(500);
        $('.imglb>li').eq(a).fadeIn(350).siblings().fadeOut(350);
        $('.zhegai').show();
    });
    $('.carousel-l').click(function () {
        if (a < 0) {
            a = 4;
        } else {
            a--;
        }
        if (a < 0) {
            a = 4;
        }
        console.log(a)
        $('.imglb>li').eq(a).fadeIn(350).siblings().fadeOut(350);
    });
    $('.carousel-r').click(function () {
        
        if (a > 4) {
            a = 0;
        } else {
            a++;
        }
        if (a > 4) {
            a = 0;
        }
        console.log(a)
        $('.imglb>li').eq(a).fadeIn(350).siblings().fadeOut(350);
    });
   
  }else {
    a = i;
    $('.bigimg').click(function () {
        $('.carousel').fadeIn(500);
        $('.imglb>li').eq(i).fadeIn(350).siblings().fadeOut(350);
    });
    $('.carousel-l').click(function () {
        if (i < 0) {
            i = 4;
        } else {
            i--;
        }
        if (i < 0) {
            i = 4;
        }
        console.log(i)
        $('.imglb>li').eq(i).fadeIn(350).siblings().fadeOut(350);
    });
    $('.carousel-r').click(function () {
        if (i > 4) {
            i = 0;
        } else {
            i++;
        }
        if (i > 4) {
            i = 0;
        }
        console.log(i)
        $('.imglb>li').eq(i).fadeIn(350).siblings().fadeOut(350);
    });
  }
}
getIndex();

$('.gb-carousel').click(function () {
    $('.carousel').css('display', 'none');
    $('.zhegai').hide();
})



// 选择个数 类型
$('.img-1').mouseover(function () {
    $('.spec .p-1').css('display', 'block');
});
$('.img-1').mouseout(function () {
    $('.spec .p-1').css('display', 'none');
});
$('.img-2').mouseover(function () {
    $('.spec .p-2').css('display', 'block');
});
$('.img-2').mouseout(function () {
    $('.spec .p-2').css('display', 'none');
});


$('.img-1').click(function (e) {
    $(this).css('border', '2px solid #b4a078');
    $('.img-2').css('border', '1px solid #ddd');
    e.stopPropagation();
    $('.spec-p1 .xuanzhon').css('display', 'block');
    $('.spec-p2 .xuanzhon').css('display', 'none');
});
$('.img-2').click(function (e) {
    $(this).css('border', '2px solid #b4a078');
    $('.img-1').css('border', '1px solid #ddd');
    $('.spec-p1 .xuanzhon').css('display', 'none');
    $('.spec-p2 .xuanzhon').css('display', 'block');
    e.stopPropagation();
});
document.onclick = function (e) {
    $('.img-1').css('border', '1px solid #ddd');
    $('.img-2').css('border', '1px solid #ddd');
    $('.spec-p1 .xuanzhon').css('display', 'none');
    $('.spec-p2 .xuanzhon').css('display', 'none');
    e.stopPropagation();
}
// 倒计时
var end = new Date("2019/7/1 11:03:50");
var now = new Date();

function getDiff(start, end) {
    return (end.getTime() - start.getTime()) / 1000;
}
compute();

function compute() {
    var s = getDiff(now, end);
    if (s < 0) {
        $('.time-to').remove();
        clearInterval(timer);
        return;
    }
    var hours = s / 60 / 60;
    var d = parseInt(hours / 24);
    var h = parseInt((hours / 24 - d) * 24);
    var m = parseInt(((hours / 24 - d) * 24 - h) * 60);
    var t = parseInt((((hours / 24 - d) * 24 - h) * 60 - m) * 60);

    $('.time-h').html(h);
    $('.time-m').html(m);
    $('.time-t').html(t);
}
timer = setInterval(function () {
    now = new Date();
    compute();
}, 1000);

// 定义输入框只能输入数字  控制数量
var aVal = $(".amount").val();
var valReg = /^[1-9][0-9]?$/;
$(".amount").keyup(function () {
    console.log(valReg)
    if ($(".amount").val() > 99) {
        $(".amount").val(99);
        $('.minus').css('color', '#777');
        $('.add').css('color', '#ccc');
    }
    if (valReg.test($(".amount").val())) {} else {
        $(".amount").val('');
    }
});
var amount = document.getElementsByClassName('amount')[0];

$('.minus').click(function () {
    amount.value = amount.value - 1;
    if ($(".amount").val() <= 1) {
        $(".amount").val(1)
        layer.msg('本商品1件起售');
        $(this).css({
            'color': '#ccc',
            'cursor': 'not-allowed'
        });
    } else {
        $('.add').css({
            'color': '#777',
            'cursor': 'pointer'
        });
    }
})
$('.add').click(function () {
    amount.value = parseInt(amount.value) + 1;
    if ($(".amount").val() >= 99) {
        $(".amount").val(99)
        layer.msg('单品已达上限');
        $(this).css({
            'color': '#ccc',
            'cursor': 'not-allowed'
        });
    } else {
        $('.minus').css({
            'color': '#777',
            'cursor': 'pointer'
        });
    }
})
// 放大镜
$(function () {
    $(".bigimg").on("mouseover", function () {
        $(".mask").css("display", "block"); //鼠标移入，放大镜出现
        $(".imgB").css("display", "block")
    })
    $(".bigimg").on("mouseout", function () { //鼠标移出，放大镜消失
        $(".mask").css("display", "none");
        $(".imgB").css("display", "none")
    })
    $(".bigimg").on("mousemove", function (ev) {
        var disX = ev.pageX - $(".bigimg").offset().left - $(".mask").width() / 2;
        var disY = ev.pageY - $(".bigimg").offset().top - $(".mask").height() / 2; //此处最好不要用clientY

        if (disX < 0) {
            disX = 0
        } else if (disX > ($(".bigimg").width() - $(".mask").width())) {
            disX = $(".bigimg").width() - $(".mask").width()
        }

        if (disY < 0) {
            disY = 0
        } else if (disY > ($(".bigimg").height() - $(".mask").height())) {
            disY = $(".bigimg").height() - $(".mask").height()
        }

        $(".mask").css({
            left: disX + "px",
            top: disY + "px"
        })

        var l = disX / ($(".bigimg").width() - $(".mask").width())
        var t = disY / ($(".bigimg").height() - $(".mask").height())

        //右侧放大镜显示的逻辑
        $(".imgB>img").css({
            left: -l * ($(".imgB>img").width() - $(".imgB").width()) + "px",
            top: -t * ($(".imgB>img").height() - $(".imgB").height()) + "px"
        })
    })
})