/**
 * Created by liqian on 9/7/17.
 */
//初始化footer样式

var initFooterMenu = function(){

    var service_headline = [

        {

            "icon":"glyphicon glyphicon-shopping-cart",

            "title":"购物指南"

        },

        {

            "icon":"glyphicon glyphicon-phone-alt",

            "title":"售后服务"

        },{

            "icon":"glyphicon glyphicon-home",

            "title":"关于买道"

        }

    ];

    Swin.genBaseUl("service_headline",service_headline,3);

    var service_list = [

        "询价说明", "议价说明", "订单说明", "交易规则", "积分说明",

        "发票说明", "运费承担", "购物保障", "退\换货服务", "信息安全",

        "买道简介", "橙色阳光基金", "买道服务", "聚义买道", "联系我们"

    ];

    Swin.genBaseUl("service_list",service_list,1);

};
$(function(){
    initFooterMenu();
})