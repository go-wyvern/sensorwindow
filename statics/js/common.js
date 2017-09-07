Swin = {};
Swin.imgPath = "/statics/images/"
Swin.imgPathHot = Swin.imgPath + "hot/"
Swin.imgPathPrompt = Swin.imgPath + "prompt/"
Swin.imgPathSensor = Swin.imgPath + "sensor/"
Swin.genBaseUl = function(parent_id,content_list,content_type){
	var ul = $("<ul></ul>");
	for(var i=0; i< content_list.length; i++){
		var each_content = content_list[i];
		if (content_type == 1){
			//文字链接
			var each_li = $('<li><a href="#">'+each_content+'</a></li>');
		}else if(content_type == 2){
			//图片链接
			var each_li = $('<li><a href="#"><img src="'+each_content+'"></a></li>');
		}else if (content_type == 3){
            //图标文字
            var each_li = $('<li><span class="'+each_content.icon+'"></span><a href="#">'+each_content.title+'</a></li>');
        }
		ul.append(each_li);
	}
	$("#"+parent_id).append(ul);
};

/*
*  生成包含图片和说明的div list
*  parent_id:最后生成的div list要放入的div id
*  params:对象类型，包含显示的图像地址，图像标题等
*  type:hot表示热销商品 prompt表示现货商品
* */
Swin.genBaseThumbnail = function (parent_id,params,type) {
        var img_list = params.img_list;
        for (var i = 0; i < img_list.length; i++) {
            var each_div = $("<div class='" + type + "'></div>");
            var each_thumbnail = $("<div class='thumbnail'></div>");
            //设置图片src
            var each_img = $("<a href='#'><img src='" + img_list[i] + "' alt=''></a>");
            //设置标题
            var each_caption = $("<div class='caption'></div>");
            //给标题div添加标题
            var caption_list = params.caption_list;
            for (var each_key in caption_list){
                each_list = caption_list[each_key];
                each_caption.append("<p><a href='#' class='"+each_key+"'>"+each_list[i]+"</a></p>")
            }
            //img和caption添加到thumbnail div中
            each_thumbnail.append(each_img);
            each_thumbnail.append(each_caption);
            each_div.append(each_thumbnail);
            //将每个图片和caption组成的thumbnail放入parent div
            $("#"+parent_id).append(each_div);
        }
};
Swin.genPageGrid = function(parent_id,params,type) {
    params.forEach(function(each_param){
        var image_src = each_param.image;
        var each_div = $("<div class='" + type + "'></div>");
        var each_thumbnail = $("<div class='thumbnail'></div>");
        //设置图片src
        var each_img = $("<a href='#'><img src='" + image_src + "' alt=''></a>");
        //设置标题
        var each_caption = $("<div class='caption'></div>");
        //给标题div添加标题
        var caption_list = each_param.caption_list;
        for (var each_key in caption_list){
            each_caption.append("<p><a href='#' class='"+each_key+"'>"+caption_list[each_key]+"</a></p>")
        }
        //img和caption添加到thumbnail div中
        each_thumbnail.append(each_img);
        each_thumbnail.append(each_caption);
        each_div.append(each_thumbnail);
        //将每个图片和caption组成的thumbnail放入parent div
        $("#"+parent_id).append(each_div);
    });
    var page_nav_div = $("<div class='page_nav'></div>");
    var page_nav = $('<nav aria-label="Page navigation"></nav>');
    var page_nav_ul = $('<ul class="pagination"></ul>');
    var previous_li = $('<li><a href="#" aria-label="Previous"> <span aria-hidden="true">&laquo;</span></a></li>');
    var next_li = $('<li><a href="#" aria-label="Next"><span aria-hidden="true">&raquo;</span></a></li>');
    page_nav_ul.append(previous_li);
    for (var i=1; i<= params.length/20+1; i++){
        page_nav_ul.append('<li><a href="#" class="page_num">'+i+'</a></li>');
    }
    page_nav_ul.append(next_li);
    page_nav_div.append(page_nav_ul);
    $("#"+parent_id).append(page_nav_div);
};
/*
 *  生成包含图片和说明的div list
 *  parent_id:最后生成的div list要放入的div id
 *  params:对象类型，包含显示的图像地址，图像标题等
 *  type:hot表示热销商品 prompt表示现货商品
 * */
Swin.genProductGrid = function (parent_id,params,type){
    params.forEach(function(each_param){
        var image_src = each_param.image;
        var each_div = $("<div class='" + type + "'></div>");
        var each_thumbnail = $("<div class='thumbnail'></div>");
        //设置图片src
        var each_img = $("<a href='#'><img src='" + image_src + "' alt=''></a>");
        //设置标题
        var each_caption = $("<div class='caption'></div>");
        //给标题div添加标题
        var caption_list = params.caption_list;
        for (var each_key in caption_list){
            console.log(each_key,caption_list)
            each_caption.append("<p><a href='#' class='"+each_key+"'>"+caption_list[each_key]+"</a></p>")
        }
        //img和caption添加到thumbnail div中
        each_thumbnail.append(each_img);
        each_thumbnail.append(each_caption);
        each_div.append(each_thumbnail);
        //将每个图片和caption组成的thumbnail放入parent div
        $("#"+parent_id).append(each_div);
    });
};
//
Swin.genBaseGrid = function (parent_id,params) {
    //生成brand列表
    for(var each_col_key in params){
        var  each_col_params = params[each_col_key];
        //渲染column
        var  each_col = $("<div class='"+each_col_params.width+"'></div>");
        var show_list = each_col_params.show_list;
        for(var i = 0; i< show_list.length; i++){
            var each_show_div = $("<div class='"+each_col_key+"'></div>")
            var each_show_param = show_list[i];
            for(var key in each_show_param){
                if (key == "image"){
                    each_show_div.append($("<a href='#' class='"+key+"'><img src='"+each_show_param[key]+"'></a>"));
                }else{
                    each_show_div.append($("<a href='#' class='"+key+"'>"+each_show_param[key]+"</a>"));
                }
            }
            each_col.append(each_show_div);
        }
        $("#"+parent_id).append(each_col);
    }
}