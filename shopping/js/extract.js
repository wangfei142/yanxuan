//获取本地存储中的购物车商品
var car = new Car();
function Car() { };
//获取购物车商品
Car.prototype.getCar = function () {
    //没有数据默认返回一个空数组
    return JSON.parse(localStorage.getItem('cartlist')) || [];
};
var cartlist = car.getCar();
//循环购物车商品，构建tr标签
var str = ``;
var total = 0;
for (var i = 0; i < cartlist.length; i++) {

    total = parseFloat(cartlist[i].money) * parseInt(cartlist[i].number);




    str += `        
        <div class="product-box align">
            <div class="PerItem">
                <div class="cart-item ">
                    <div class="Per-img-c">
                        <div class="hnkuai">
                            <input type="checkbox" class="inpUt_s " checked="true" index="${cartlist[i].id}">
                        </div>
                        <div class="hnkuai">
                            <a href="#">
                                <img src="${cartlist[i].src}" alt="" class="Per-img">
                            </a>
                        </div>
                    </div>
                    <div class="hnkuai pe-title ">
                        <a href="#">${cartlist[i].title}</a>
                        <div class=" pe-title-a">
                            <a href="#">${cartlist[i].title_t}
                                <i class="iconfont icon-arrow-down"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="per-price rgb">
                    ¥
                    <!--单个商品的价格-->
                    <span class="particular_commodity" >${cartlist[i].money}</span>
                </div>
                <!-- 加减组件 -->
                <div class="button_btn">
                    <button class="fl  btn_tt" style="border-right: 1px solid #ddd;"  onclick="minus(this,${cartlist[i].id})">
                        <i class="iconfont icon-jian"></i>
                    </button>
                    <input type="text" value="${cartlist[i].number}"class="inPut_p" index="${cartlist[i].id}" >
                    <button class="fr btn_tt" style="border-left: 1px solid #ddd;" onclick="plus(this,${cartlist[i].id})">
                        <i class=" iconfont icon-jia"></i>
                    </button>
                </div>
                <!-- 加减组件end -->
                
                <div class="per-price red">
                    ¥
                    <!--单个商品的总价-->
                    <span class="per_price_commodity" >${total}</span>   
                   
                </div>
                <div class="per-opr">
                    <div>
                        <a href="#">移入收藏夹
                        </a>
                    </div>
                    <div>
                        <a href="#" onclick="del(${cartlist[i].id})" >
                            删除</a>
                    </div>
                </div>
            </div>
        </div>        
        `
};
// 所有商品  页面中的所有商品
$(".mani_box").html(str);
// 全选 全不选
$('.inpUt_s').on('click', function () {
    var fal = true;
    var sal = false;
    var inpUt_i_money = 0;
    var unme_i_extra = 0;
    for (var i = 0; i < $('.inpUt_s').length; i++) {
        if ($('.inpUt_s')[i].checked == true) {
            var inpUt_s_i_money = $('.inpUt_s').eq(i).parents('.cart-item ').siblings(".per-price").children('.per_price_commodity').html()
            inpUt_i_money += parseFloat(inpUt_s_i_money)
            // console.log(inpUt_i_money)
            var unme_extra = $('.inpUt_s').eq(i).parents('.cart-item ').siblings(".button_btn").children('.inPut_p').val()
            unme_i_extra += parseInt(unme_extra)
            // console.log(unme_i_extra)
            $('.price_unme').html(inpUt_i_money);
            $("#quantity_m").html(unme_i_extra);
        }
        // else {
        //     $('.price_unme').html("0");
        //     $("#quantity_m").html("0");
        // };
    };

    if (this.checked == true) {
        $('.inpUt')[1].checked = true;
        // par_unme();
    };
    for (var i = 0; i < $('.inpUt_s').length; i++) {
        if (!$('.inpUt_s')[i].checked) {
            fal = false;
        }
        if ($('.inpUt_s')[i].checked) {
            sal = true;
        };
    };

    if (sal == false) {
        $(".inpUt")[1].checked = false;

    } else {
        $(".inpUt")[1].checked = true;

    };
    if (fal == true) {
        $(".inpUt")[0].checked = true;

    } else {
        $(".inpUt")[0].checked = false;
    };
});
$('.inpUt').eq(0).on('click', function () {
    for (var i = 0; i < $('.inpUt_s').length; i++) {
        if ($(".inpUt")[0].checked == true) {

            $(".inpUt_s")[i].checked = true;
            $(".inpUt")[1].checked = true
        } else {
            $(".inpUt_s")[i].checked = false;
            $(".inpUt")[1].checked = false
        };
    };
    var inpUt_i_money = 0;
    var unme_i_extra = 0
    for (var i = 0; i < $('.inpUt_s').length; i++) {
        if ($('.inpUt_s')[i].checked == true) {
            var inpUt_s_i_money = $('.inpUt_s').eq(i).parents('.cart-item ').siblings(".per-price").children('.per_price_commodity').html()
            inpUt_i_money += parseFloat(inpUt_s_i_money)
            // console.log(inpUt_i_money)
            var unme_extra = $('.inpUt_s').eq(i).parents('.cart-item ').siblings(".button_btn").children('.inPut_p').val()
            unme_i_extra += parseInt(unme_extra)
            // console.log(unme_i_extra)
            $('.price_unme').html(inpUt_i_money);
            $("#quantity_m").html(unme_i_extra)
        } else {
            $('.price_unme').html("0");
            $("#quantity_m").html("0");
        };
    };
});
$('.inpUt').eq(1).on('click', function () {
    for (var i = 0; i < $('.inpUt_s').length; i++) {
        if ($(".inpUt")[1].checked == true) {

            $(".inpUt_s")[i].checked = true;
            $(".inpUt")[0].checked = true;

        } else {

            $(".inpUt_s")[i].checked = false;

            $(".inpUt")[0].checked = false;

        };
    };
    var inpUt_i_money = 0;
    var unme_i_extra = 0;
    for (var i = 0; i < $('.inpUt_s').length; i++) {
        if ($('.inpUt_s')[i].checked == true) {
            var inpUt_s_i_money = $('.inpUt_s').eq(i).parents('.cart-item ').siblings(".per-price").children('.per_price_commodity').html()
            inpUt_i_money += parseFloat(inpUt_s_i_money)
            // console.log(inpUt_i_money)
            var unme_extra = $('.inpUt_s').eq(i).parents('.cart-item ').siblings(".button_btn").children('.inPut_p').val()
            unme_i_extra += parseInt(unme_extra)
            // console.log(unme_i_extra)
            $('.price_unme').html(inpUt_i_money);
            $("#quantity_m").html(unme_i_extra)
        } else {
            $('.price_unme').html("0");
            $("#quantity_m").html("0");
        };
    };
});

// input 商品数量输入
$('.inPut_p').on('keyup', function () {
    //不可输入除数字以外的东西
    this.value = this.value.replace(/\D/g, "");
    if (this.value == -1) {
        layer.msg('商品一件起售');
        this.value = 1;
        $('.btn_tt').eq(0).css("color", "#cdcdcd");
        $('.btn_tt').eq(0).css("cursor", "not-allowed");
    } else if (this.value > 99) {
        $('.btn_tt').eq(0).css("color", "#666")
        $('.btn_tt').eq(0).css("cursor", "pointer")
        this.value = 99;
    };

});
$('.inPut_p').on('blur', function () {

    if (this.value == 0 || this.value == "") {
        $('.btn_tt').eq(0).css("color", "#cdcdcd");
        $('.btn_tt').eq(0).css("cursor", "not-allowed");
        this.value = 1;

    } else if (this.value > 1) {

        $('.btn_tt').eq(0).css("color", "#666");
        $('.btn_tt').eq(0).css("cursor", "pointer");
    };

    quantity_m();
    par_unme();
    var id = $(this).attr("index");
    plus(this, id);
    // console.log($(this).val());
    // console.log(id)
    // parent.location.reload();
});
// 减数量
// $(".per_price_commodity")   一个商品的总价
function minus(ele, id) {

    var nameVal = $(ele).parent().children("input").val();
    nameVal = parseInt(nameVal) - 1;
    if (nameVal <= 0) {
        layer.msg('商品一件起售');
        nameVal = 1;
        $(ele).css("color", "#cdcdcd")
        $(ele).css("cursor", "not-allowed")
        return;
    }
    $(ele).parent().children("input").val(nameVal);

    var name_extrct = $(ele).parent().children("input").val()
    // console.log(name_extrct)
    //父级的上一个
    var name_prev = $(ele).parent().prev().children("span ").html();
    // console.log(name_prev)
    //父级的下一个
    var name_next = $(ele).parent().next().children("span ").html();
    // console.log(name_next)
    //一件商品的总价格
    name_next = name_extrct * name_prev
    //一件商品的总价格赋值
    // console.log(name_next)
    $(ele).parent().next().children("span ").html(name_next)

    var exrt_tune = $(ele).parents('.PerItem').children(".cart-item").children(".Per-img-c").children(".hnkuai").children(".inpUt_s ");
    // console.log((exrt_tune)[0].checked)

    if ((exrt_tune)[0].checked == true) {

        par_unme();
        quantity_m();
    }

};
// 加数量
function plus(ele, id) {

    var nameVal = $(ele).parent().children("input").val();
    nameVal = parseInt(nameVal) + 1;
    if (nameVal > 99) {
        nameVal = 99
        layer.msg('商品最高99');
    }
    $(ele).parent().children("input").val(nameVal)
    $(ele).parent().children().eq(0).css("color", "#666");
    $(ele).parent().children().eq(0).css("cursor", "pointer");
    var name_extrct = $(ele).parent().children("input").val()
    // console.log(name_extrct)
    //父级的上一个
    var name_prev = $(ele).parent().prev().children("span ").html();
    // console.log(name_prev)
    //父级的下一个
    var name_next = $(ele).parent().next().children("span ").html();
    // console.log(name_next)
    //一件商品的总价格
    name_next = name_extrct * name_prev
    //一件商品的总价格赋值
    // console.log(name_next)
    $(ele).parent().next().children("span ").html(name_next);
    var exrt_tune = $(ele).parents('.PerItem').children(".cart-item").children(".Per-img-c").children(".hnkuai").children(".inpUt_s ");
    // console.log((exrt_tune)[0].checked)
    if ((exrt_tune)[0].checked == true) {
        par_unme();
        quantity_m();

    }
};
//下单组件里的总价格
// $('.price_unme')
par_unme();
function par_unme(ele) {
    var par_unme = 0;
    var ele = ele || 0;
    for (var i = 0; i < $('.inpUt_s').length; i++) {
        if ($('.inpUt_s')[i].checked == true) {

            var pa_me = $('.inpUt_s').eq(i).parents('.cart-item ').siblings(".per-price").children('.per_price_commodity').html()
            par_unme += parseFloat(pa_me)
            // console.log(par_unme)
        }
    }
    par_unme = parseInt(par_unme) + parseInt(ele);
    $('.price_unme').html(par_unme);

};
//下单组件里的总数量
// $("#quantity_m")
// 所有数量的class
// $(".inPut_p")
quantity_m();
function quantity_m(ele) {
    var quantity_unme = 0;
    var ele = ele || 0;
    for (var i = 0; i < $('.inpUt_s').length; i++) {
        if ($('.inpUt_s')[i].checked == true) {
            var pa_me_m = $('.inpUt_s').eq(i).parents('.cart-item ').siblings(".button_btn").children('input').val()
            // console.log(pa_me_m)
            quantity_unme += parseFloat(pa_me_m)
        }
    }
    quantity_unme = parseInt(quantity_unme) + parseInt(ele);
    $("#quantity_m").html(quantity_unme);
};
// 重新编辑本地信息
Car.prototype.refresh = function (id, ele) {
    var cartlist = this.getCar();
    // console.log(ele)
    for (var i = 0; i < cartlist.length; i++) {
        if (cartlist[i].id == id) {
            // 重新添加数量
            // console.log(id)
            // console.log(cartlist[i].number)
            cartlist[i].number = ele
            //需要在存入本地存储
            localStorage.setItem('cartlist', JSON.stringify(cartlist))

            return true;
        }
    }
    return false;
};
// 删除购物车商品
function del(id) {
    if (!confirm('确认删除？')) {
        return;
    }

    if (car.delGoods(id)) {
        location.reload();
    } else {
        alert('删除失败');
    }
};
//删除购物车指定的商品
Car.prototype.delGoods = function (id) {
    var cartlist = this.getCar();
    for (var i = 0; i < cartlist.length; i++) {
        if (cartlist[i].id == id) {
            //删除当前商品
            cartlist.splice(i, 1);
            //需要在存入本地存储
            localStorage.setItem('cartlist', JSON.stringify(cartlist))
            return true;
        }
    }

    return false;
};
// 猜你喜欢
$('.left_btn').on('click', function () {
    clearTimeout(timer)
    $('.box_b').animate({ left: -960 }, 1000)
    console.log(1)
    setInterval(function () {
        $('.box_b').animate({ left: 0 }, 1000)
    }, 5000);
});
var timer = setInterval(function () {
    $('.box_b').animate({ left: 0 }, 1000)
}, 5000);
$('.right_btn').on('click', function () {
    $('.box_b').animate({ left: 0 }, 1000)
});

$(".a_dele_extra").on('click', function () {
    layer.confirm('是否清空购物车？', {
        btn: ['是', '否'] //按钮
    }, function () {
        localStorage.clear()
        location.reload();
    }, function () {
        layer.msg('明智的选择！');
    });

});



// 登陆注册
//手机登陆
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
});
$('.login_account_input').on('keyup', function () {
    $('.login_tishi_t').html(" ");
    var accounr_login = $('.login_account_input').val();

    if (accounr_login.length > 0) {
        $('.input_del_account').css('display', 'inline-block')
    } else {
        $('.input_del_account').css('display', 'none')
    }
});
$('.login_pwd_input').on('keyup', function () {
    $('.login_tishi_t').html(" ");
    var pwd_login = $('.login_pwd_input ').val()

    if (pwd_login.length > 0) {
        $('.input_del_pwd').css('display', 'inline-block')
    } else {
        $('.input_del_pwd').css('display', 'none')
    }
});
$('.input_del_pwd').on('click', function () {
    $('.login_pwd_input ').val("")
    $('.input_del_pwd').css('display', 'none')
});
$('.input_del_account').on('click', function () {
    $('.login_account_input ').val("")
    $('.input_del_account').css('display', 'none')
});
//注册按钮
$('#login_input_btn').on('click', function () {
    var mail = $('.mail_acc_input').val();
    console.log(mail);
    var phone = $('.phone_acc_input').val();
    var pwd_login = $('.login_pwd_input').val();
    console.log(phone);
    console.log(pwd_login);

    if (mail == '') {
        $.post(
            "./php/loginphone.php",
            { phone: phone, pwd_login: pwd_login },
            function (data) {
                if (data.dig == 200) {
                    // $('.login_tishi_t').html(data.mas).css('color', 'green');
                    // $('.login_box_body').css('display', 'none')
                    console.log(data);

                } else {
                    $('.login_tishi_t').html(data.mas).css('color', 'red');
                }
                console.log(data);
            }, "json");
    } else if (phone == '') {
        $.post(
            "./php/loginmail.php",
            { mail: mail, pwd_login: pwd_login },
            function (data) {
                if (data.dig == 200) {
                    // $('.login_tishi_t').html(data.mas).css('color', 'green');
                    // $('.login_box_body').css('display', 'none')
                    console.log(data);

                } else {
                    $('.login_tishi_t').html(data.mas).css('color', 'red');
                }
                console.log(data);
            }, "json");
    };
});


$("#shopp_denlu").on('click',function(){
    $('.login_box_body').css('display','inline-block')
})