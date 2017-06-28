var initBrandList = function(){
	var brand_list = [
		Swin.imgPath+'brand_balluff.gif',
		Swin.imgPath+'brand_banner.gif',
		Swin.imgPath+'brand_baumer.gif',
		Swin.imgPath+"barnd_bernstein.gif",
		Swin.imgPath+"brand_auely.png",
		Swin.imgPath+"brand_autonics.gif",
		Swin.imgPath+"brand_azbil.gif",
		Swin.imgPath+"brand_bedook.gif",
		Swin.imgPath+"brand_beisensor.png",
		Swin.imgPath+"brand_biduk.jpg",
		Swin.imgPath+"brand_datalogic.gif",
		Swin.imgPath+"brand_disoric.png",
		Swin.imgPath+"brand_ege.jpg",
		Swin.imgPath+"brand_elco.png",
		Swin.imgPath+"brand_festo.jpg",
		Swin.imgPath+"brand_fotek.jpg",
		Swin.imgPath+"brand_gsee.png",
		Swin.imgPath+"brand_heidenhain.jpg",
		Swin.imgPath+"brand_hengstler.gif",
		Swin.imgPath+"brand_hg.jpg",
		Swin.imgPath+"brand_honeywell.jpg",
		Swin.imgPath+"brand_hydac.gif",
		Swin.imgPath+"brand_ifm.gif",
		Swin.imgPath+"brand_ipf.jpg",
		Swin.imgPath+"brand_keyence.png",
		Swin.imgPath+"brand_kubler.gif",
		Swin.imgPath+"brand_lanbao.gif",
		Swin.imgPath+"brand_leuze.gif",
		Swin.imgPath+"brand_lion.gif",
		Swin.imgPath+"brand_micro.gif",
		Swin.imgPath+"brand_microepsilon.jpg",
		Swin.imgPath+"brand_mtl.png",
		Swin.imgPath+"brand_mydao.gif",
		Swin.imgPath+"brand_optex.gif",
		Swin.imgPath+"brand_other.jpg",
		Swin.imgPath+"brand_pilz.jpg",
		Swin.imgPath+"brand_reer.png",
		Swin.imgPath+"brand_schneider.gif",
		Swin.imgPath+"brand_sensopart.gif",
		Swin.imgPath+"brand_sunx.gif",
		Swin.imgPath+"brand_takex.gif",
		Swin.imgPath+"brand_turck.gif",
		Swin.imgPath+"brand_vaisala.gif",
		Swin.imgPath+"brand_wachendorff.png",
		Swin.imgPath+"brand_wenglor.gif",
		Swin.imgPath+"brand_wieland.png"
	];
	Swin.genBaseUl("brand_list_div",brand_list,2);
};
var showNavContent = function(category){
	var nav_content_list = {
		"sensor":[
			    "电感式接近开关",
			    "电感式测距传感器",
			    "电容式接近开关",
			    "电容式测距传感器",
			    "磁式接近开关",
			    "磁式角度传感器",
			    "磁敏开关",
			    "漫反射光电传感器",
			    "镜反射式光电传感器",
			    "对射式光电传感器",
			    "槽型光电传感器",
			    "色标传感器",
			    "颜色传感器",
			    "光纤感应头",
			    "识别传感器",
			    "光纤放大器",
			    "标准光电测距传感器",
			    "激光测距传感器",
			    "接近式超声波传感器",
			    "反射式超声波传感器",
			    "对射式超声波传感器",
			    "超声波测距传感器",
			    "接触式测距传感器",
			    "磁致伸缩传感器",
			    "反光板及反光胶贴",
			    "电缆及适配器",
			    "磁块"
			],
		"sportControl":[
			    "绝对值编码器",
			    "增量式编码器",
			    "倾角仪",
			    "测速发电机",
			    "计数器",
			    "夹紧环",
			    "力矩臂",
			    "接线盒模块",
			    "安装弹片",
			    "磁环及磁条",
			    "编码器电缆"
			],
		"processControllInstrument":[		
			    "压力表",
			    "压力传感器",
			    "压力开关",
			    "温度计",
			    "温度传感器",
			    "温度开关",
			    "物位计",
			    "记录仪",
			    "温控器"
		],
		"thermalCamera ":[
			    "智能相机",
			    "工业相机",
			    "光源",
			    "光源控制器",
			    "镜头",
			    "相机电缆",
		],
		"switch":[			
			    "限位开关",
			    "微动开关"
		],
		"safetyProd":[	
			    "光栅",
			    "安全控制器",
			    "安全继电器",
			    "隔离栅"
		],
		"RFIDSys":[		
			    "RFID控制设备",
			    "RFID读/写头和电子标签",
			    "RFID手持设备",
			    "RFID附件"
		],
		"relay":[	
			    "一般继电器",
			    "固态继电器",
			    "PCB用继电器"
		],
		"FBM":[	
			    "AS-Interface",
			    "IO-link"
		],
		"others":[	
			    "信号转换模块",
			    "通讯电缆",
			    "读码器",
			    "触摸屏",
			    "电源",
			    "变频器",
			    "断路器",
			    "插座",
			    "定时器",
			    "联轴器",
			    "接触器",
			    "指示灯",
			    "无线数据通讯",
			    "气压计",
			    "PLC",
			    "按钮",
			    "安装配件"
		]
	};
	//生成nav_content div
	$("#nav_content").html("");
	var nav_content = nav_content_list[category];
	console.log(nav_content);
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
	var nav_category_list =  {
		"sensor":"传感器",
		"sportControl":"运动控制",
		"processControllInstrument":"过程控制仪表",
		"thermalCamera ":"视觉相机",
		"switch":"开关",
		"safetyProd":"安全产品",
		"RFIDSys":"RFID系统",
		"relay":"继电器",
		"FBM":"现场总线组件",
		"others":"其他"
	};
	//新建一个ul
	var nav_ul = $("<ul class='nav_menu_ul'></ul>");
	for(category in nav_category_list){
		var category_name = nav_category_list[category];
		console.log(category,category_name);
		//生成每个category list
		var category_name_li = $("<li><a href='#' onmouseover='showNavContent("+'"'+category+'"'+")' onmouseout='hideNavContent()'>"+category_name+"</a></li>");
		//category list添加到category_ul中
		nav_ul.append(category_name_li);
	}
	$("#nav_menu").append(nav_ul);
};
$(function(){
	initNavMenu();
	initBrandList();
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