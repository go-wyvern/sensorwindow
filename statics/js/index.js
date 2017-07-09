var initBrandList = function(){
	// var submit_params = "";
	// submit_params += "page=1";
	// submit_params += "&is_all=true";
	var brand_list = [];
	// $.get("/brands?"+submit_params,function(res){
		var data = brands;
		data.forEach(function(each_data){
				brand_list.push(each_data["image"]);
			});
	// });
		Swin.genBaseUl("brand_list_div",brand_list,2);
};
var initSensorNewMediaGrid = function(){
	var params = {};
	params["evalution"]={
		"width":"col-sm-3",
		"show_list":[
			{
				"image":Swin.imgPath+"evalution_01.jpg",
				"title":"阳明FOTEK固态继电器真假辨别小Tips 【视频版】"
			}, {
				"image":Swin.imgPath+"evalution_02.png ",
				"title":"真假对比|欧姆龙MY系列继电器正品VS仿品【买道测评】"
			},{
				"image":Swin.imgPath+"evalution_03.jpg",
				"title":"现场应用||实测电机对接近开关的干扰【买道测评】"
			}
		]
	};
	params["circle"]={
		"width":"col-sm-3",
		"show_list":[
			{
				"title":"色标传感器的选型 | 光源"
			},{
				"title":"色标传感器的选型 | 光源"
			},{
				"title":"色标传感器的选型 | 光源"
			},
			{
				"title":"色标传感器的选型 | 光源"
			},
			{
				"title":"色标传感器的选型 | 光源"
			},
			{
				"title":"色标传感器的选型 | 光源"
			},
			{
				"title":"色标传感器的选型 | 光源"
			},
			{
				"title":"色标传感器的选型 | 光源"
			},
			{
				"title":"色标传感器的选型 | 光源"
			},
			{
				"title":"色标传感器的选型 | 光源"
			},
			{
				"title":"色标传感器的选型 | 光源"
			},
			{
				"title":"色标传感器的选型 | 光源"
			},

		]
	};
	params["knowledge"] = {
		"width":"col-sm-6",
		"show_list":[
			{
				"image":Swin.imgPath+"evalution_01.jpg",
				"title":"阳明FOTEK固态继电器真假辨别小Tips 【视频版】"
			}, {
				"image":Swin.imgPath+"evalution_02.png",
				"title":"真假对比|欧姆龙MY系列继电器正品VS仿品【买道测评】"
			},{
				"image":Swin.imgPath+"evalution_03.jpg",
				"title":"现场应用||实测电机对接近开关的干扰【买道测评】"
			}
		]
	};
	Swin.genBaseGrid("sensor_new_media",params);
};
var showNavContent = function(category){
	var nav_content_list = leaf_category
	//生成nav_content div
	$("#nav_content").html("");
	var nav_content = nav_content_list[category];
	var nav_content_ul = $("<ul id='nav_content_ul'></ul>");
	for (var i=0; i<nav_content.length; i++){
		var nav_content_item = nav_content[i];
		var nav_content_item_li = $("<li><a href='#'>"+nav_content_item+"</a></li>");
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
		nav_category_list[each_root["english_name"]] = each_root["name"];
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
	$("#nav_content").hover(function(){
		$("#nav_content").show()
	},function(){
		$("#nav_content").hide();
	});
};
var initHotProductList = function () {
	var params = {};
	params["img_list"] = [
        Swin.imgPathHot +"hot_01.jpg",
        Swin.imgPathHot +"hot_02.gif",
        Swin.imgPathHot +"hot_03.jpg",
        Swin.imgPathHot +"hot_04.png",
        Swin.imgPathHot +"hot_05.png",
        Swin.imgPathHot +"hot_06.png"
	];
	params["caption_list"] = {
        "product_code":[
            "IFRM 12P1701/S14L",
            "EE-SX672",
            "BES M12MI-PSC40B-S04G",
            "ATM60-P4H13X13",
            "EX-14A",
            "QS18VN6D"
        ],
        "product_name":[
            "Baumer 堡盟",
            "Omron 欧姆龙",
            "Balluff 巴鲁夫",
            "Sick 西克",
            "Panasonic 松下",
            "Banner 邦纳"

        ],
        "product_category":[
            "电感式接近开关",
            "槽型光电传感器",
            "电感式接近开关",
            "绝对值编码器",
            "漫反射式光电传感器",
            "漫反射式光电传感器"
        ]
	};
    Swin.genBaseThumbnail("hot_product_div",params,"hot");
};
//初始化现货速购模块
var initPromptList = function () {
	var params = {};
	params["img_list"]=[
        Swin.imgPathPrompt +"prompt_01.jpg",
        Swin.imgPathPrompt +"prompt_02.jpg",
        Swin.imgPathPrompt +"prompt_03.png",
        Swin.imgPathPrompt +"prompt_04.png",
        Swin.imgPathPrompt +"prompt_05.jpg"
	];
	params["caption_list"]={
        "product_code":[
            "IGYX 12N17B3/L",
            "BEN5M-MFR",
            "SP-04N",
            "PYF08A-E",
            "IME08-02BPSZT0S"
        ],
        "product_name":[
            "Baumer 堡盟",
            "Autonics 奥托尼克斯",
            "FOTEK 阳明",
            "Omron 欧姆龙",
            "Sick 西克"
        ],
        "product_category":[
            "电感式接近开关",
            "镜反射式光电传感器",
            "电感式接近开关",
            "继电器",
            "电感式接近开关"
        ]
	};
    Swin.genBaseThumbnail("prompt_product_div",params,"prompt");
};
//生成传感器grid
var initSensorProductGrid = function () {
	var params = {};
    params["brand"]={
        "width":"col-sm-2",
		"show_list":[
				{
					"image": Swin.imgPathSensor +"brand_balluff.gif",
					"code":"",
					"category":""
				}, {
					"image": Swin.imgPathSensor +"brand_baumer.gif",
					"code":"",
					"category":""
				}, {
					"image":Swin.imgPathSensor +"brand_omron.gif",
					"code":"",
					"category":""
				},{
        			"image":Swin.imgPathSensor +"brand_sick.gif",
					"code":"",
					"category":""
				},{
        			"image":Swin.imgPathSensor +"brand_pepperl_fuchs.gif",
					"code":"",
					"category":""
    			}
		]
    };
    params["banner"] = {
        "width":"col-sm-4",
        "show_list":[
            {
                "image":Swin.imgPathSensor +"banner_sensor.jpg",
                "code":"",
                "category":""
            }
        ]
    };
    params["product_detail_lg"] = {
        "width":"col-sm-2",
        "show_list":[
            {
                "image": Swin.imgPathSensor +"product_detail_01.jpg",
                "code": "IFRM 08P17A1/S35L",
                "category": "Baumer 堡盟"
            }
		]
	};
    params["product_detail_1"]={
        "width":"col-sm-2",
        "show_list":[
			{
                "image": Swin.imgPathSensor +"product_detail_02.jpg",
                "code":"IFRM 12P1701/S14L",
                "category":"Baumer 堡盟"
            }, {
                "image":Swin.imgPathSensor +"product_detail_03.jpg",
                "code":"FHDK 10P5101/S35A",
                "category":"Baumer 堡盟"
            }
        ]
    };
    params["product_detail_2"]={
        "width":"col-sm-2",
        "show_list":[
			{
                "image":Swin.imgPathSensor +"product_detail_04.jpg",
                "code":"FHDK 10P5101/S35A",
                "category":"Baumer 堡盟"
            },{
                "image":Swin.imgPathSensor +"product_detail_05.jpg",
                "code":"FHDK 10P5101/S35A",
                "category":"Baumer 堡盟"
            }
        ]
    };
    Swin.genBaseGrid("sensor_product_div",params);
};
//
$(function(){
	console.log("index")
	initNavMenu();
	initBrandList();
	initSensorNewMediaGrid();
	initPromptList();
	initHotProductList();
	initSensorProductGrid();
	var flag = 0;
	$("#more_brand_link").on("click",function(){
		if(flag==0){
			$("#brand_list_div").css("height","480px");
			flag = 1;
		}else{
			$("#brand_list_div").css("height","180px");
			flag = 0;
		}
		return false;
	})
});