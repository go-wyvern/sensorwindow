Swin = {};
Swin.imgPath = "/statics/images/"
Swin.imgPathHot = Swin.imgPath + "hot/"
Swin.imgPathPrompt = Swin.imgPath + "prompt/"
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
            for (each_key in caption_list){
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