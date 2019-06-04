//获取本地存储中的购物车商品
var car = new Car();
function Car() { }
//获取购物车商品
Car.prototype.getCar = function () {
    //没有数据默认返回一个空数组
    return JSON.parse(localStorage.getItem('cartlist')) || [];
}

var cartlist = car.getCar();
//循环购物车商品，构建tr标签
var str = ``;
//下单组件中的总数量
var nume = 0;
// 所有商品总价格 下单组件中的总金额
var price_unme = 0;
var name_e = 0;
var arrAy = [];
for (var i = 0; i < cartlist.length; i++) {
    var itemPrice = parseFloat(cartlist[i].money) * parseInt(cartlist[i].number);
    nume += parseInt(cartlist[i].number);
    price_unme += itemPrice;
    str += `        
        <div class="product-box align">
            <div class="PerItem">
                <div class="cart-item ">
                    <div class="Per-img-c">
                        <div class="hnkuai">
                            <input type="checkbox" class="inpUt_s " title="" checked="true" index="${cartlist[i].id}">
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
                    <span class="per_price_commodity" >${itemPrice}</span>
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
}



// 所有商品  页面中的所有商品
$(".mani_box").html(str);
// 已选商品数量


//下单组件中的总数量
$('#quantity_m').html(parseInt(nume))

// 所有商品总价格 下单组件中的总金额
$('.price_unme').html(price_unme)


// 所有商品的单价集合
for (var i = 0; i < $('.particular_commodity').length; i++) {
    console.log($('.particular_commodity').eq(i).html())
}

// 所有商品的数量集合
for (var i = 0; i < $('.inPut_p').length; i++) {
    console.log($('.inPut_p').eq(i).val())
}

//所有商品单个商品总价
for (var i = 0; i < $('.per_price_commodity').length; i++) {
    console.log($('.per_price_commodity').eq(i).html())
}


// 全选 全不选

$('.inpUt_s').on('click', function () {
    var fal = true;
    var sal = false
    if (this.checked == true) {
        $('.inpUt')[1].checked = true;
    }
    for (var i = 0; i < $('.inpUt_s').length; i++) {
        if (!$('.inpUt_s')[i].checked) {
            fal = false
        }
        if ($('.inpUt_s')[i].checked) {
            sal = true
        }
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

    // console.log(this)

    // var id = this.getAttribute('index')

    // console.log(id)

    // car.extract(id);
});



$('.inpUt').eq(0).on('click', function () {

    // // if () {
    // //     $('.inpUt').css("color", "#666")
    // //     $('.inpUt').css("cursor", "pointer")
    // // } else {
    //     $('.btn_tt').eq(0).css("color", "#cdcdcd")
    //     $('.btn_tt').eq(0).css("cursor", "not-allowed")  

    // // }



    for (var i = 0; i < $('.inpUt_s').length; i++) {
        if ($(".inpUt")[0].checked == true) {

            $(".inpUt_s")[i].checked = true;
            $(".inpUt")[1].checked = true
        } else {
            $(".inpUt_s")[i].checked = false;
            $(".inpUt")[1].checked = false
        };
    };
});

$('.inpUt').eq(1).on('click', function () {

    for (var i = 0; i < $('.inpUt_s').length; i++) {
        if ($(".inpUt")[1].checked == true) {

            $(".inpUt_s")[i].checked = true;
            $(".inpUt")[0].checked = true

        } else {

            $(".inpUt_s")[i].checked = false;

            $(".inpUt")[0].checked = false

        };
    };
});



// input 商品数量输入
$('.inPut_p').on('keyup', function () {
    //不可输入除数字以外的东西
    this.value = this.value.replace(/\D/g, "");
    if (this.value == 0) {
        layer.msg('商品一件起售');
        $('.btn_tt').eq(0).css("color", "#cdcdcd")
        $('.btn_tt').eq(0).css("cursor", "not-allowed")


    } else if (this.value > 99) {
        this.value = 99
    }

});

$('.inPut_p').on('blur', function () {
    if (this.value == 0) {
        layer.msg('商品一件起售');
        this.value = 1
        $('.btn_tt').eq(0).css("color", "#cdcdcd")
        $('.btn_tt').eq(0).css("cursor", "not-allowed")

        console.log($('.inpUt').eq(0))
    }
    var id = this.getAttribute('index')
    var datas = $(this).val()
    car.refresh(id, datas);
    for (var i = 0; i < $('.inPut_p').length; i++) {
        name_e += parseInt($('.inPut_p').eq(i).val())
        console.log(name_e)
    }
    // parent.location.reload();
})



// 减数量
function minus(ele, id) {
    // console.log($(ele).parent().children("input").val())
    var nameVal = $(ele).parent().children("input").val();
    nameVal = parseInt(nameVal) - 1
    if (nameVal <= 0) {
        layer.msg('商品一件起售');
        nameVal = 1;
        return
    }
    $(ele).parent().children("input").val(nameVal)
    nume = nume - 1
    // $('#quantity_m').html(nume);
    car.refresh(id, nameVal);
    // localStorage.setItem( 'cartlist',JSON.stringify(cartlist) )
    // parent.location.reload();

};


// 加数量
function plus(ele, id) {

    var nameVal = $(ele).parent().children("input").val();
    nameVal = parseInt(nameVal) + 1
    $(ele).parent().children("input").val(nameVal)
    nume = nume + 1
    // $('#quantity_m').html(nume);
    car.refresh(id, nameVal);
    // parent.location.reload();
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
}

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
}


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
}

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

