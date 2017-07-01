$(document).ready(function () {
    $(".brandRankingTitle>div").eq(0).click(function () {
        $(this).siblings().removeClass("brActive");
        $(this).addClass("brActive");
        $(".brandBox").hide();
        $(".sales").show();
    });

    $(".brandRankingTitle>div").eq(1).click(function () {
        $(this).siblings().removeClass("brActive");
        $(this).addClass("brActive");
        $(".brandBox").hide();
        $(".focus").show();
    });

    //新功能轮播
    var isShowNewV = localStorage.getItem('BuyerisShowNewV');
    if (isShowNewV != 'yes') {
        $('.newFea-carousel').owlCarousel({
            loop: true,
            navigation: true,
            slideSpeed: 300,
            stopOnHover: true,
            paginationSpeed: 400,
            singleItem: true,
            autoPlay: 5000,
            navigationText: ['<', '>']
        });
    };

    //首页大图轮播
    $('.indexBanner').owlCarousel({
        loop: true,
        navigation: true,
        slideSpeed: 300,
        stopOnHover: true,
        paginationSpeed: 400,
        singleItem: true,
        autoPlay: 5000,
        navigationText: ['<i data-role="nav-owl" style="display:none" class="iconfont icon-youjiantou1">', '<i style="display:none" data-role="nav-owl" class="iconfont icon-youjiantou">']
    });

    $(".indexBanner").hover(function () {
        $("i[data-role=nav-owl]").css("display", "block");
    }, function () {
        $("i[data-role=nav-owl]").css("display", "none");
    });

    //楼层
    $('#nav').onePageNav();
    $(window).scroll(function () {
        if ($(this).scrollTop() > $('#item1').offset().top - 300) {
            $('.scrollNav').show();
        } else {
            $('.scrollNav').hide();
        }
    });
    $('.btn-mBrand').on('click', function () {
        $('.hotBrand-list').toggleClass('mBrand');
    })
});


