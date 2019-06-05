// 更换大图
var lis = $('.commodity-left>ul').children();
for (var i = 0; i < lis.length; i++) {
    (function (i) {
        lis.eq(i).click(function () {
            $('.bigimg>img').attr('src', `images/img1/${i + 1}-1.jpg`);
            $('.imgB>img').attr('src', `images/img1/${i + 1}-2.jpg`);
            var carousel1 = new Carousel(i);
            carousel1.cop();
        });
    })(i);
}
var carousel1;

function Carousel(i) {
    this.i = i;
}
Carousel.prototype.cop = function(){
        $('.zoom-t').click(function () {
            $('.carousel').fadeIn(500);
            $('.imglb>li').eq(i).fadeIn(350).siblings().fadeOut(350);
        });
        $('.carousel-l').click(function () {
            if (i < 0) {
                i = 4;
            } else {
                i--;
            }
            $('.imglb>li').eq(i).fadeIn(350).siblings().fadeOut(350);
        });
        $('.carousel-r').click(function () {
            if (i > 4) {
                i = 0;
            } else {
                i++;
            }
            $('.imglb>li').eq(i).fadeIn(350).siblings().fadeOut(350);
        });
}
function Carousel2(jo) {
}
Carousel.prototype.copl = function(){
        $('.zoom-t').click(function () {
            $('.carousel').fadeIn(500);
            $('.imglb>li').eq(jo).fadeIn(350).siblings().fadeOut(350);
        });
        $('.carousel-l').click(function () {
            console.log(jo)
           
            if (jo < 0) {
                jo = 4;
            } else {
                jo--;
            }
            $('.imglb>li').eq(jo).fadeIn(350).siblings().fadeOut(350);
           
        });
        $('.carousel-r').click(function () {
            console.log(jo)
            
            if (jo > 4) {
                jo = 0;
            } else {
                jo++;
            }
            $('.imglb>li').eq(jo).fadeIn(350).siblings().fadeOut(350);
          
        });
}





$('.gb-carousel').click(function () {
    $('.carousel').css('display', 'none');
})














//更换大图
var a =0;
var lis = $('.commodity-left>ul').children();
for (var i = 0; i < lis.length; i++) {
    (function (i) {
         
        lis.eq(i).click(function () {
            ac = i;
            $('.bigimg>img').attr('src',`images/img1/${i + 1}-1.jpg`);
            $('.imgB>img').attr('src', `images/img1/${i + 1}-2.jpg`);
           
            i=a;
            getIndex(i);
        });
    })(i);
    
}



function getIndex(i) {

  if(i == undefined){
    $('.zoom-t').click(function () {
        $('.carousel').fadeIn(500);
        $('.imglb>li').eq(a).fadeIn(350).siblings().fadeOut(350);
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
    $('.zoom-t').click(function () {
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