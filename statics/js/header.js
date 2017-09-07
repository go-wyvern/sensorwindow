var in_munu=false
var in_content=false
var showNavContent = function(category){
	var nav_content_list = leaf_category
	//生成nav_content div
	$("#nav_content").html("");
	var nav_content = nav_content_list[category];
	var nav_content_ul = $("<ul id='nav_content_ul'></ul>");
	for (var i=0; i<nav_content.length; i++){
		var nav_content_item = nav_content[i];
		var nav_content_item_li = $("<li><a href='/search?category_id="+nav_content_item.id+"'>"+nav_content_item.name+"</a></li>");
		nav_content_ul.append(nav_content_item_li);
	}
	$("#nav_content").append(nav_content_ul);
	$("#nav_content").show();
};
var hideNavContent = function(){
	$("#nav_content").hide();
};
var initNavMenu = function(){
	$("#nav_content").hide();
	var nav_category_list = {};
	root_category.forEach(function(each_root){
		nav_category_list[each_root["id"]] = each_root["name"];
	});
	//新建一个ul
	var nav_ul = $("<ul class='nav_menu_ul'></ul>");
	for(category in nav_category_list){
		var category_name = nav_category_list[category];
		//生成每个category list
		var category_name_li = $("<li><a href='#' onmouseover='showNavContent("+'"'+category+'"'+")' onmouseout='hideNavContent()'>"+category_name+"</a></li>");
		//category list添加到category_ul中
		nav_ul.append(category_name_li);
	}
	$("#nav_menu").append(nav_ul);
	$("#nav_menu").hover(function(){
        in_munu=true
    },function(){
        in_munu=false
	});
	$("#nav_content").hover(function(){
		in_content=true
		$("#nav_content").show();
	},function(){
		in_content=false
		$("#nav_content").hide();
		setTimeout(function(){
			if(!in_munu){
				$(".nav_menu_ul li.active").removeClass("active");
			}
		},100)
	});
    $(".nav_menu_ul li").hover(function(){
		$(".nav_menu_ul li.active").removeClass("active");
        $(this).addClass("active");
    },function(){
		setTimeout(function(){
			if(!in_content){
				if(!in_munu){
					$(".nav_menu_ul li.active").removeClass("active");
				}
			}
		},100)   
    })
   
};
$(function(){
    initNavMenu();
});