// 设置开关
var accfa = false;
var pwdfa = false;
var repwdfa = false;
var phfa = false;
var autfa = false;

$('.account').on('blur', function () {
    var account = $('.account').val();
    if (account == '') {
        $(".account ").next().html("✗ 邮箱不能为空").css('color', 'red');
        return false
    }

});
//邮箱验证
$('.account').on('keyup', function () {
    var account = $('.account').val();
    var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
    if (reg.test(account)) {
        $(".account ").next().html("网络异常").css('color', 'red');
        $.post("./php/email.php", { account: account },
            function (data) {
                console.log(data);
                if (data.dig == 200) {
                    $(".account ").next().html('✓' + data.meassage).css('color', 'red');
                    return accfa = false;
                } else {
                    $(".account ").next().html('✓' + data.meassage).css('color', 'green');
                    return accfa = true
                }
            }, "json");

    } else {
        $(".account ").next().html("✗ 邮箱格式不正确").css('color', 'red');
        return accfa = false
    }

})






//密码验证

$('.pwd').on('blur', function () {
    var pwdaVl = $('.pwd').val();
    if (pwdaVl == '') {
        $(".pwd ").next().html("✗ 密码不能为空").css('color', 'red');
        return pwdfa = false;
    }
})
$('.pwd').on('keyup', function () {
    var pwdaVl = $('.pwd').val();
    var reg = /^[\w_-]{6,16}$/;
    var pattern = /^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]+$/;
    var expert = /^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)(?![a-zA-z\d]+$)(?![a-zA-z!@#$%^&*]+$)(?![\d!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]+$/;
    console.log(pwdaVl)
    if (pwdaVl.length < 6) {
        $(".pwd ").next().html("✗ 最短6位，最长16位").css('color', 'red');
        return pwdfa = false;
    } else if (pattern.test(pwdaVl)) {
        $(".pwd ").next().html("✓ 密码过于简单！建议更换！").css('color', 'orange');
        return pwdfa = true;
    } else if (pattern.test(pwdaVl) || pattern.test(pwdaVl)) {
        $(".pwd ").next().html("✓ 中级密码强度！可以使用！").css('color', 'green');
        return pwdfa = true;
    } else if (pattern.test(pwdaVl) || pattern.test(pwdaVl) || expert.test(pwdaVl)) {
        $(".pwd ").next().html("✓ 高级密码强度！没人会知道你的密码了！可以使用！").css('color', 'green');
        return pwdfa = true;
    }
});

//再次验证密码
$('.repwd').on('blur', function () {
    var pwdaVl = $('.pwd').val();
    var repwd = $('.repwd').val();
    if (repwd == '') {
        $(".repwd ").next().html("✗ 密码不一致，请重新输入！").css('color', 'red');
        return repwdfa = false;
    }
    if (repwd != pwdaVl) {
        $(".repwd ").next().html("✗ 密码不一致，请重新输入！").css('color', 'red');
        return repwdfa = false;
    } else {
        $(".repwd ").next().html("✓ 密码输入正确！").css('color', 'green');
        return repwdfa = true;
    }
});

//手机号码

$('.phone').on('blur', function () {
    var phone = $('.phone').val();
    if (phone == '') {
        $(".phone ").next().html("✗ 手机输入有误！").css('color', 'red');
        return phfa = false;
    }
});
$('.phone').on('keyup', function () {
    var phone = $('.phone').val();
    var reg = /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/;
    if (reg.test(phone)) {

        $.post("./php/phone.php", { phone: phone },
            function (data) {
                if (data.dig == 200) {
                    $(".phone ").next().html('✓' + data.meassage).css('color', 'red');
                    return accfa = false;
                } else {
                    $(".phone ").next().html('✓' + data.meassage).css('color', 'green');
                    return accfa = true
                }
            }, "json");
        $(".phone ").next().html("✓ 正确！可以使用！").css('color', 'green');
        return phfa = true;
    } else {
        $(".phone ").next().html("✗ 手机输入有误！").css('color', 'red');
        return phfa = false;
    }
});
//获取验证码
$(".zc_btn").on('click', function () {
    $(this).val(getYZM(4))
    $(".zc_btn").css('background', '#fff');
    // console.log(getYZM(4));
});
//随机获取验证码
function getRand(startNumber, endNumber) {
    return parseInt(Math.random() * (endNumber - startNumber + 1) + startNumber);
}
function getYZM(num) {
    var yum = "";
    for (var i = 0; i < num; i++) {
        var randAS = getRand(48, 122);
        if ((randAS >= 48 && randAS <= 57) || (randAS >= 65 && randAS <= 90) || (randAS >= 97 && randAS <= 122)) {
            var chr = String.fromCharCode(randAS);
            yum += chr;
        }
        else {
            i--;
        }
    }
    return yum;
}
$('.auth').on('blur', function () {
    var auth = $('.auth').val();
    if (auth == '') {
        $(".auth ").next().html("✗ 验证码输入有误").css('color', 'red');
        return autfa = false;
    }
});
$('.auth').on('keyup', function () {
    var auth = $('.auth').val();
    var yzm = $(".zc_btn").val();
    if (auth != yzm) {
        $(".auth ").next().html("✗ 验证码输入有误,区分大小写！").css('color', 'red');
        return autfa = false;
    } else {
        $(".auth ").next().html("✓ 验证码输入正确").css('color', 'green');
        return autfa = true;
    }
})
//注册
$('.zc_zc').on('click', function () {
    if (accfa == true && pwdfa == true && repwdfa == true && phfa == true && autfa == true) {
        var account = $('.account').val()//邮箱
        var pwd = $('.pwd').val()//密码
        var phone = $('.phone').val()//手机
        $.post("./php/login.php", { account: account, pwd: pwd, phone: phone },
            function (data) {
                console.log(data);
                if (data.dig == 200) {
                    $(".phone ").next().html('✓' + data.meassage).css('color', 'red');
                    // $('.account').val('')//邮箱
                    // $('.pwd').val('')//密码
                    // $('.phone').val('')//手机
                    // $('.repwd').val('')//
                    // $('.auth').val('')//
                    layer.confirm('您是已经注册成功！是否跳转？', {
                        btn: ['是', '否'] //按钮
                    }, function () {
                        layer.msg('首页设置接入', { icon: 1 });
                    }, function () {
                        layer.msg('本地网址', { icon: 1 });
                    });
                } else {
                    $(".phone ").next().html('✓' + data.meassage).css('color', 'green');
                }
            }, "json");
    }
});

