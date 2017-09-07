/**
 * Created by liqian on 2/7/17.
 */
var initSearchResultGrid = function(){
    var params = product;
    Swin.genPageGrid("search_result_list",params,"search");
};
//初始化brand list
var initHotBrandList = function(){
    var hot_brand_list = brands;
    var hot_checked_brand = chech_brand
    var hot_brand_title_div = $("<div class='col-sm-1' id='hb_introduction'>热销品牌:</div>");
    var hot_brand_content_div =$("<div class='col-sm-11' id='hb_content_div'></div>");
    var hot_brand_content_ul = $("<ul class='hot_brand_list'></ul>");
    for(var i=0; i<hot_brand_list.length; i++){
        var hot_brand = hot_brand_list[i];
        if(hot_checked_brand.id==hot_brand.id){
            var hot_brand_li = $("<li><a class='brand_checked' href=/search?brand_id="+hot_brand.id+" data-bid='"+hot_brand.id+"'>"+hot_brand.brand_name+"</a></li>");
        }else{
            var hot_brand_li = $("<li><a href=/search?brand_id="+hot_brand.id+" data-bid='"+hot_brand.id+"'>"+hot_brand.brand_name+"</a></li>");
        }
        hot_brand_content_ul.append(hot_brand_li);
    }
    hot_brand_content_div.append(hot_brand_content_ul);
    $("#hot_brand_list").append(hot_brand_title_div);
    $("#hot_brand_list").append(hot_brand_content_div);
};
var initBreadcrumb= function(){
    var hot_checked_brand = chech_brand
    if(hot_checked_brand.id>0){
        var hot_breadcrumb = $("<ol class='breadcrumb'><li><a href='/search'>所有产品</a></li><li><a class='active' href='/search'>"+hot_checked_brand.brand_name+"<i>x</i></a></li></ol>'")
    }else{
        var hot_breadcrumb = $("<ol class='breadcrumb'><li><a href='/search'>所有产品</a></li></ol>'")
    }
    var hot_breadcrumb_div = $("<div class='col-sm-12'></div>");
    hot_breadcrumb_div.append(hot_breadcrumb);
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
        $("#nav_menu").hide()
    });
    $("#nav_content").hover(function(){
		$("#nav_menu").show()
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