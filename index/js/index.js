// 图片结束小移动
$('.img-box').hover(function(){
    $(this).animate({
        width:'105%',
        height:'105%',
        left:'-5%',
        top:'-5%',
    })
},function(){
    $(this).animate({
        width:'100%',
        height:'100%',
        left:'0',
        top:'0',
    })
})

//倒计时
// countTime  countMinute  countSecond
//获取当前时间  获取当前年月日 自定义6点档
//当超过6点时停止等于0
window.onload = showTime()

function showTime(){
    var today = new Date(),
    y=today.getFullYear(),
    m=today.getMonth()+1,
    d=today.getDate();
    var now = today.getTime();
    var str=y+'/'+m+'/'+d+' 18:00:00'//结束时间
    var endDate = new Date(str)
    var end = endDate.getTime();
    var leftTime = end-now;
    var h,l,s; 
    if(leftTime>=0){
        h = Math.floor(leftTime/1000/60/60%24)>10?Math.floor(leftTime/1000/60/60%24):"0"+Math.floor(leftTime/1000/60/60%24);  
        l = Math.floor(leftTime/1000/60%60)>10?Math.floor(leftTime/1000/60%60):'0'+Math.floor(leftTime/1000/60%60);  
        s = Math.floor(leftTime/1000%60)>10?Math.floor(leftTime/1000%60):'0'+Math.floor(leftTime/1000%60);   
    }
    if(leftTime<=0){
        h = '00';  
        l = '00';  
        s = '00';  
    }
    $('#countTime').html(h);
    $('#countMinute').html(l);
    $('#countSecond').html(s);
    setTimeout(showTime,1000)
}
//新品轮播图
//点击时左右移动当left 和right到一定值则return
// newBtnLeft newBtnRight
    var newitemListWidth = 1090,
    newleft = 0;
$('#newBtnLeft').click(function() { 
   if(newleft==0){
        return;
    }
    newleft+=newitemListWidth
    $('#newitemList').animate({
        left: newleft + 'px'
    })
});
$('#newBtnRight').click(function () { 
     if(newleft<=-1090){
        return;
    }
    newleft-=newitemListWidth
    $('#newitemList').animate({
        left: newleft+'px',
    })
});
//福利社轮播
// indexCarousel item  indexCarouselBtnl indexCarouselBtnr indexCarouselOl
var smallBIndex = 0
function smallBanner(){
    if(smallBIndex>=2){
        smallBIndex = -1
    }
    smallBIndex ++;
    $('.indexCarousel>.item').fadeOut().eq(smallBIndex).fadeIn()
    $('.indexCarousel>ol>li').removeClass('carousel-list').eq(smallBIndex).addClass('carousel-list');
}
var smallTimer = setInterval(smallBanner,1000)
    $('.indexCarousel').hover(function(){
        $('.indexCarouselBtnl').css('display','block')
        $('.indexCarouselBtnr').css('display','block')
        clearInterval(smallTimer)
    },function(){
        $('.indexCarouselBtnl').css('display','none')
        $('.indexCarouselBtnr').css('display','none')
        smallTimer = setInterval(smallBanner,1000)
    })
    $('.indexCarousel>ol>li').hover(
        function() {
            $(this).addClass('carousel-list').siblings().removeClass('carousel-list')
            smallBIndex = $(this).index() - 1
            smallBanner()
        }
    )
    $('.indexCarouselBtnl').click(function() {
        smallBIndex -= 2
        if (smallBIndex < -1) {
            smallBIndex = 1
        }
        smallBanner()

    })
    $('.indexCarouselBtnr').click(function() {
        smallBanner()
    })
    //大家都在说轮播
    var  slickLeft = 0;
    $('.slick-btnLeft').click(function() { 
    if(slickLeft==0){
            return;
        }
        slickLeft+=newitemListWidth
        $('.slick-track').animate({
            left: slickLeft + 'px'
        })
    });
    $('.slick-btnRight').click(function () { 
        if(slickLeft<=-3270){
            return;
        }
        slickLeft-=newitemListWidth
        $('.slick-track').animate({
            left: slickLeft+'px',
        })
    });
    // 登录弹窗
    $('#loginshow').click(function(){
        $('.login_box_body').css('display','block')
    })
    $('#loginshow2').click(function(){
        $('.login_box_body').css('display','block')
    })
    $('#registershow').click(function(){
        location.href='./register/index.html'
    })
    $('#registershow2').click(function(){
        location.href='./register/index.html'
    })
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

    //注册按钮
    $('#login_input_btn').on('click', function () {
        var mail = $('.mail_acc_input').val();
        console.log(mail)
        var phone = $('.phone_acc_input').val();
        var pwd_login = $('.login_pwd_input').val();
        console.log(phone)
        console.log(pwd_login)
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
                        // $('.login_tishi_t').html(data.mas).css('color', 'green');
                        // $('.login_box_body').css('display', 'none')
                        console.log(data);

                    } else {
                        $('.login_tishi_t').html(data.mas).css('color', 'red');
                    }
                    console.log(data);
                }, "json");
        } else if ( phone == '') {
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


    //购物车
    $('.shopcar').mousemove(function () {
        $('.shopcar .adddet').show();
    });
    $('.shopcar').mouseout(function () {
        $('.shopcar .adddet').hide();
    });


  
    // 小轮播
    var banner1Index=0
    function focusBannerl(){  
        if(banner1Index == $('#banner1>img').length-1){
            banner1Index =-1
        }
        banner1Index++
       $('#banner1>img').eq(banner1Index).fadeIn().siblings().fadeOut();
       $('#ol1>ol>li').removeClass('focus-liH').eq(banner1Index).addClass('focus-liH');
    }
    function focusBannerr(){  
        if(banner1Index == 0){
            banner1Index = 2
        }
        banner1Index--
       $('#banner1>img').eq(banner1Index).fadeIn().siblings().fadeOut();
       $('#ol1>ol>li').removeClass('focus-liH').eq(banner1Index).addClass('focus-liH');
    }
    $('#ol1>ol>li').hover(
        function(){
            banner1Index = $(this).index()-1
            focusBannerl()
        }
    )