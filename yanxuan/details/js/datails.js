var aVal = $(".amount").val();
var url = self.location.href;




// 定义输入框只能输入数字  控制数量
var aVal = $(".amount").val();

var valReg = /^[1-9][0-9]?$/;
$(".amount").keyup(function () {
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
    if ($(".amount").val() <= 0) {
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
    aVal = $(".amount").val();
     console.log(aVal)
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
     aVal = $(".amount").val();
     console.log(aVal)
})







var car = new Car();
var idA = url.split('?')[1].split('=')[1];
$.get('./det.json', function (res) {
    $('.txt-1').html(res[idA-1].tit_1);
    $('.txt-2').html(res[idA-1].tit_2);
    $('.txt-3').html(res[idA-1].tit_3);
    $('.txt-4').html(res[idA-1].tit_4);
    $('.txt-5').html(res[idA-1].tit_5);
    $('.txt-6').html(res[idA-1].tit_6);
    $('.txt-7').html(res[idA-1].tit_7);



    //本地存储存储购物车商品的形式： [{id,title,price,number},{}]
    
    //加入商品到购物车逻辑
    $('.shopcar2').click(function(){
        //获取子元素
        //构建商品对象，用于存进localStorage
        console.log(aVal)
        var product = {
            id: idA,
            title: res[idA-1].tit_3,
            title_t: res[idA-1].tit_4,
            money: res[idA-1].tit_5,
            src: `../details/images/img${idA}/1-1.jpg`,
            number: parseInt($(".amount").val())
            
        };
        //加入本地存储中去
        car.addToCar(product);
        console.log(aVal)
if(abFlag == 0){
    $('.shopcar .adddet').slideDown(500);
    setTimeout(function () {
        $('.shopcar .adddet').slideUp(300);
    }, 1600)
    initA();
}else {
    $('.shopcar1 .adddet').slideDown(500);
    setTimeout(function () {
        $('.shopcar1 .adddet').slideUp(300);
    }, 1600)
    initA();
}
          
}) 
        
}, 'json')
$('.bigimg img').attr('src',`images/img${idA}/1-1.jpg`);
$('.imglb').html(`
<li style="z-index: 10"><img src="images/img${idA}/1-2.jpg" alt="" class="carousel-img"
                        style="background: #f4f4f4"> </li>
                <li style="z-index: 9"> <img src="images/img${idA}/2-2.jpg" alt="" class="carousel-img"> </li>
                <li style="z-index: 8"><img src="images/img${idA}/3-2.jpg" alt="" class="carousel-img"> </li>
                <li style="z-index: 7"><img src="images/img${idA}/4-2.jpg" alt="" class="carousel-img"> </li>
                <li style="z-index: 6"><img src="images/img${idA}/5-2.jpg" alt="" class="carousel-img"> </li>

`);
$('.ul1').html(`
<li><img src="images/img${idA}/1.jpg" alt=""></li>
            <li><img src="images/img${idA}/2.jpg" alt=""></li>
            <li><img src="images/img${idA}/3.jpg" alt=""></li>
            <li><img src="images/img${idA}/4.jpg" alt=""></li>
            <li><img src="images/img${idA}/5.jpg" alt=""></li>`);
$('.imgB').html(` <img src="images/img${idA}/1-2.jpg" alt="">`);
$('.spec-p1 img').attr('src',`images/img${idA}/guige1.jpg`);
$('.spec-p2 img').attr('src',`images/img${idA}/guige2.jpg`);


//更换大图
var a =0;
var lis = $('.commodity-left>ul').children();
for (var i = 0; i < lis.length; i++) {
    (function (i) {
         
        lis.eq(i).click(function () {
            $('.bigimg>img').attr('src',`images/img${idA}/${i + 1}-1.jpg`);
            $('.imgB>img').attr('src', `images/img${idA}/${i + 1}-2.jpg`);
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

// toshopcar

$('.shopcar').mouseover(function () {
   
        $('.shopcar .adddet').show();
 
});
$('.shopcar').mouseout(function () {
    $('.shopcar .adddet').hide();
});

$('.shopcar1').mouseover(function () {
   
    $('.shopcar1 .adddet').show();

});
$('.shopcar1').mouseout(function () {
$('.shopcar1 .adddet').hide();
});


initA();
function initA() {
   
    var carS = new CarS();
    function CarS() {}
    // //获取购物车商品
    CarS.prototype.getCar = function () {
        //     //没有数据默认返回一个空数组
        return JSON.parse(localStorage.getItem('cartlist')) || [];
    }
    var cartlistA = carS.getCar();
    var strA = ``;
    var numA = 0;
    var price_unmA = 0;
    var det_num = 0;
    for (var i = 0; i < cartlistA.length; i++) {
        var itemPrice = parseFloat(cartlistA[i].money) * parseInt(cartlistA[i].number);
        numA += cartlistA[i].number;
        price_unmA += itemPrice;
        det_num = cartlistA[i].number
        strA += ` <div class="detlist">
                <div class="detlist-left ">
                    <img src="./images/img${cartlistA[i].id}/1.jpg" alt=""><span></span>
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
       
    }
    // 所有商品
    $(".pop").html(strA);
    $('.i-1').html(numA);
    $('.i1').html(numA);
    // 已选商品数量
    // 所有商品总价格
    $('.total-prices i').html(price_unmA.toFixed(2));
}
//删除购物车指定的商品
Car.prototype.delGoods = function (id) {
    var cartlist = this.getCar();
    for(var i = 0 ;i<cartlist.length ;i++){
        if (cartlist[i].id == id) {
            //删除当前商品
            cartlist.splice(i, 1);
            //需要在存入本地存储
            localStorage.setItem('cartlist', JSON.stringify(cartlist));
            initA();
            return true;
        }
    }
        
    initA();
    return false;
}

// 登陆
$('.loging').on('click', function (){
    $('.login_box_body').show();
})

$(".login_title_left").on('click', function () {
    $(".login_title_left").removeClass("login_t_result");
    $(".login_title_right").addClass("login_t_result");
    $(".phone_acc").removeClass("input_change");
    $(".mail_acc").addClass("input_change");
})


//邮箱登陆
$(".login_title_right").on('click', function () {
    $(".login_title_right").removeClass("login_t_result");
    $(".login_title_left").addClass("login_t_result");
    $(".mail_acc").removeClass("input_change");
    $(".phone_acc").addClass("input_change");
})

//input 里的删除删除输入的信息，并消除自身
$(".title_span").on('click', function () {
    $('.login_box_body').css('display', 'none')
})
$('.login_account_input').on('keyup', function () {
    $('.login_tishi_t').html(" ");
    var accounr_login = $('.login_account_input').val();

    if (accounr_login.length > 0) {
        $('.input_del_account').css('display', 'inline-block')
    } else {
        $('.input_del_account').css('display', 'none')
    }
})
$('.login_pwd_input').on('keyup', function () {
    $('.login_tishi_t').html(" ");
    var pwd_login = $('.login_pwd_input ').val()

    if (pwd_login.length > 0) {
        $('.input_del_pwd').css('display', 'inline-block')
    } else {
        $('.input_del_pwd').css('display', 'none')
    }
})
$('.input_del_pwd').on('click', function () {
    $('.login_pwd_input ').val("")
    $('.input_del_pwd').css('display', 'none')
})
$('.input_del_account').on('click', function () {
    $('.login_account_input ').val("")
    $('.input_del_account').css('display', 'none')
})

//登陆按钮
$('#login_input_btn').on('click', function () {
    var mail = $('.mail_acc_input').val();
    var phone = $('.phone_acc_input').val();
    var pwd_login = $('.login_pwd_input').val();
    // var accounr_login = $('.login_account_input').val()
    // var pwd_login = $('.login_pwd_input ').val()
    // if (accounr_login == '' || pwd_login == '') {
    //     $('.login_tishi_t').html(" ✗ 账号或密码不能为空").css('color', 'red');
    // }
    if ( mail == '') {
        $.post(
            "./php/loginphone.php",
            { phone: phone, pwd_login: pwd_login },
            function (data) {
                if (data.dig == 200) {
                    $('.login_tishi_t').html(data.mas).css('color', 'green');
                    $('.login_box_body').css('display', 'none')
                    layer.msg('恭喜您！登陆成功');
                } else {
                    $('.login_tishi_t').html(data.mas).css('color', 'red');
                }
            }, "json");
    } else if ( phone == '') {
        $.post(
            "./php/loginmail.php",
            { mail: mail, pwd_login: pwd_login },
            function (data) {
                if (data.dig == 200) {
                    $('.login_tishi_t').html(data.mas).css('color', 'green');
                    $('.login_box_body').css('display', 'none')
                    layer.msg('恭喜您！登陆成功');

                } else {
                    $('.login_tishi_t').html(data.mas).css('color', 'red');
                }
            }, "json");
    }

    //     $('.login_tishi_t').html(" ✗ 账号或密码不能为空").css('color', 'red');
    // }

    // $.post(
    //     "./php/loginmail.php",
    //     {  mail : mail , pwd_login: pwd_login },
    //     function (data) {
    //         if (data.dig == 200) {      
    //             $('.login_box_body').css('display', 'none')

    //         } else {
    //             $('.login_tishi_t').html(data.mas).css('color', 'red');
    //         }
    //         console.log(data);
    //     }, "json");

    // $('.input_del_account').css('display', 'none')
    // $('.input_del_pwd').css('display', 'none')
    // $('.login_account_input').val("");
    // $('.login_pwd_input ').val("");
});




