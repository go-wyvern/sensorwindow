/**
 * Created by liqian on 2/7/17.
 */

var initSearchResultGrid = function(){
    var params = product;
    var page = pagination
    Swin.genPageGrid("search_result_list",params,"search",page);
};
//初始化brand list
var initHotBrandList = function(){
    var category_id = getUrlParam("category_id")
    var hot_brand_list = brands;
    var hot_checked_brand = chech_brand
    var hot_brand_title_div = $("<div class='col-sm-1' id='hb_introduction'>热销品牌:</div>");
    var hot_brand_content_div =$("<div class='col-sm-11' id='hb_content_div'></div>");
    var hot_brand_content_ul = $("<ul class='hot_brand_list'></ul>");
    for(var i=0; i<hot_brand_list.length; i++){
        var hot_brand = hot_brand_list[i];
        if(hot_checked_brand.id==hot_brand.id){
            var hot_brand_li = $("<li><a class='brand_checked' href=/search?category_id="+category_id+"&brand_id="+hot_brand.id+" data-bid='"+hot_brand.id+"'>"+hot_brand.brand_name+"</a></li>");
        }else{
            var hot_brand_li = $("<li><a href=/search?category_id="+category_id+"&brand_id="+hot_brand.id+" data-bid='"+hot_brand.id+"'>"+hot_brand.brand_name+"</a></li>");
        }
        hot_brand_content_ul.append(hot_brand_li);
    }
    hot_brand_content_div.append(hot_brand_content_ul);
    $("#hot_brand_list").append(hot_brand_title_div);
    $("#hot_brand_list").append(hot_brand_content_div);
};
var initBreadcrumb= function(){
    var checked_bread_crumb = bread_crumb
    var hot_breadcrumb_div = $("<div class='col-sm-12'></div>");
    var hot_breadcrumb_ol = $("<ol class='breadcrumb'></ol>");
    for(var i=0; i<checked_bread_crumb.length; i++){
        var bread_crumb_li = checked_bread_crumb[i];
        if(i==0){
            hot_breadcrumb_li = $("<li><a href='"+bread_crumb_li.url+"'>"+bread_crumb_li.name+"</a></li>")
        }else{
            hot_breadcrumb_li = $("<li><a class='active' href='"+bread_crumb_li.url+"'>"+bread_crumb_li.name+"<i>x</i></a></li>")
        }
        hot_breadcrumb_ol.append(hot_breadcrumb_li);
    }
    hot_breadcrumb_div.append(hot_breadcrumb_ol);
    $("#hot_breadcrumb").append(hot_breadcrumb_div);
}
var initNav =function(){
    $(".all_item_list").hover(function(){
        $("#nav_menu").show()
    },function(){
        $("#nav_menu").hide()
    });
    $("#nav_menu").hover(function(){
        $("#nav_menu").show()
    },function(){
        setTimeout(function(){
            if(!in_content){
                $("#nav_menu").hide()
            }
        },100)
    });
    $("#nav_content").hover(function(){
	},function(){
		$("#nav_menu").hide()
	});
}
$(function(){
    initBreadcrumb();
    initHotBrandList();
    initSearchResultGrid();
    initNav();
});