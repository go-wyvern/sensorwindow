Swin = {};
Swin.imgPath = "/statics/images/"
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