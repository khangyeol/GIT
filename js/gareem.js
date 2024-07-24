$(document).ready(function(){


    //자동 슬라이드
    let count = 0
    setInterval(function(){
        count++
        if(count>2){count=0}
        $(".train").css("transform",`translateX(${-33.333*count}%)`)
    },2500)


      // // PC 서브 메뉴
    $(".gnb>li").mouseover(function() {
        $(".h_hover").stop().slideDown(400);
    });
    $(".h_hover").mouseleave(function() {
        $(".h_hover").stop().slideUp(400);
    });
    
    // $('.lnb > li').mouseover(function() {
    //     var activeLnb = $(this).attr('class');
    //     var lnbNum = activeLnb.substring(3, 5);
    //     $('.gnb > li').removeClass('active');
    //     $('.gnb' + lnbNum).addClass('active');
    // });

})