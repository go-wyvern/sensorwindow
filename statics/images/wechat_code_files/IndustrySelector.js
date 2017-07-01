/**
 * 行业数据
 */
var IndustryData = (function () {
    function IndustryData() {
        this.Data = [
            {
                "id": "0", "value": "制造业", "label": "制造业", "children": [
                    {
                        "id": "0-0", "value": "专用设备制造业", "label": "专用设备制造业", "children": [
                            { "id": "0-0-0", "value": "B001", "label": "电子和电工机械专用设备制造", "children": null },
                            { "id": "0-0-1", "value": "B002", "label": "医疗仪器设备及器械制造", "children": null },
                            { "id": "0-0-2", "value": "B003", "label": "印刷、制药、日化及日用品生产专用设备制造", "children": null },
                            { "id": "0-0-3", "value": "B004", "label": "化工、木材、非金属加工专用设备制造", "children": null },
                            { "id": "0-0-4", "value": "B005", "label": "采矿、冶金、建筑专用设备制造", "children": null },
                            { "id": "0-0-5", "value": "B006", "label": "食品、饮料、烟草及饲料生产专用设备制造", "children": null },
                            { "id": "0-0-6", "value": "B007", "label": "农、林、牧、渔专用机械制造", "children": null },
                            { "id": "0-0-7", "value": "B008", "label": "环保、社会公共服务及其他专用设备制造", "children": null },
                            { "id": "0-0-8", "value": "B009", "label": "纺织、服装和皮革加工专用设备制造", "children": null }
                        ]
                    },
                    {
                        "id": "0-1", "value": "通用设备制造业", "label": "通用设备制造业", "children": [
                            { "id": "0-1-0", "value": "B010", "label": "金属加工机械制造", "children": null },
                            { "id": "0-1-1", "value": "B011", "label": "其他通用设备制造业", "children": null },
                            { "id": "0-1-2", "value": "B012", "label": "通用零部件制造", "children": null },
                            { "id": "0-1-3", "value": "B013", "label": "物料搬运设备制造", "children": null },
                            { "id": "0-1-4", "value": "B014", "label": "文化、办公用机械制造", "children": null },
                            { "id": "0-1-5", "value": "B015", "label": "泵、阀门、压缩机及类似机械制造", "children": null },
                            { "id": "0-1-6", "value": "B016", "label": "烘炉、风机、衡器、包装等设备制造", "children": null },
                            { "id": "0-1-7", "value": "B017", "label": "轴承、齿轮和传动部件制造", "children": null },
                            { "id": "0-1-8", "value": "B018", "label": "锅炉及原动设备制造", "children": null }
                        ]
                    },
                    {
                        "id": "0-2", "value": "模具制造", "label": "模具制造", "children": [
                            { "id": "0-2-0", "value": "B085", "label": "钢板模", "children": null },
                            { "id": "0-2-1", "value": "B086", "label": "铸件模", "children": null },
                            { "id": "0-2-2", "value": "B087", "label": "冷锻模", "children": null },
                            { "id": "0-2-3", "value": "B088", "label": "塑胶模", "children": null },
                            { "id": "0-2-4", "value": "B089", "label": "压铸模", "children": null },
                            { "id": "0-2-5", "value": "B090", "label": "吹塑模", "children": null },
                            { "id": "0-2-6", "value": "B091", "label": "橡胶模", "children": null },
                            { "id": "0-2-7", "value": "B092", "label": "挤压模", "children": null },
                            { "id": "0-2-8", "value": "B093", "label": "粉末冶金模具", "children": null },
                            { "id": "0-2-9", "value": "B094", "label": "模压成型模具", "children": null },
                            { "id": "0-2-10", "value": "B095", "label": "真空成型模具", "children": null },
                            { "id": "0-2-11", "value": "B096", "label": "其他", "children": null }
                        ]
                    },
                    {
                        "id": "0-3", "value": "模具成形", "label": "模具成形", "children": [
                            { "id": "0-3-0", "value": "B097", "label": "钢板模", "children": null },
                            { "id": "0-3-1", "value": "B098", "label": "铸件模", "children": null },
                            { "id": "0-3-2", "value": "B099", "label": "冷锻模", "children": null },
                            { "id": "0-3-3", "value": "B100", "label": "塑胶模", "children": null },
                            { "id": "0-3-4", "value": "B101", "label": "压铸模", "children": null },
                            { "id": "0-3-5", "value": "B102", "label": "吹塑模", "children": null },
                            { "id": "0-3-6", "value": "B103", "label": "橡胶模", "children": null },
                            { "id": "0-3-7", "value": "B104", "label": "挤压模", "children": null },
                            { "id": "0-3-8", "value": "B105", "label": "粉末冶金模具", "children": null },
                            { "id": "0-3-9", "value": "B106", "label": "模压成型模具", "children": null },
                            { "id": "0-3-10", "value": "B107", "label": "真空成型模具", "children": null },
                            { "id": "0-3-11", "value": "B108", "label": "其他", "children": null }
                        ]
                    },
                    {
                        "id": "0-4", "value": "电气机械和器材制造业", "label": "电气机械和器材制造业", "children": [
                            { "id": "0-4-0", "value": "B019", "label": "家用电力器具制造", "children": null },
                            { "id": "0-4-1", "value": "B020", "label": "非电力家用器具制造", "children": null },
                            { "id": "0-4-2", "value": "B021", "label": "照明器具制造", "children": null },
                            { "id": "0-4-3", "value": "B022", "label": "电机制造", "children": null },
                            { "id": "0-4-4", "value": "B023", "label": "电池制造", "children": null },
                            { "id": "0-4-5", "value": "B024", "label": "电线、电缆、光缆及电工器材制造", "children": null },
                            { "id": "0-4-6", "value": "B025", "label": "输配电及控制设备制造", "children": null },
                            { "id": "0-4-7", "value": "B026", "label": "其他电气机械及器材制造", "children": null }
                        ]
                    },
                    {
                        "id": "0-5", "value": "计算机、通信和其他电子设备制造业", "label": "计算机、通信和其他电子设备制造业", "children": [
                            { "id": "0-5-0", "value": "B027", "label": "计算机制造", "children": null },
                            { "id": "0-5-1", "value": "B028", "label": "通信设备制造", "children": null },
                            { "id": "0-5-2", "value": "B029", "label": "雷达及配套设备制造", "children": null },
                            { "id": "0-5-3", "value": "B030", "label": "广播电视设备制造", "children": null },
                            { "id": "0-5-4", "value": "B031", "label": "电子器件制造", "children": null },
                            { "id": "0-5-5", "value": "B032", "label": "电子元件制造", "children": null },
                            { "id": "0-5-6", "value": "B033", "label": "视听设备制造", "children": null },
                            { "id": "0-5-7", "value": "B034", "label": "其他电子设备制造", "children": null }
                        ]
                    },
                    {
                        "id": "0-6", "value": "汽车制造业", "label": "汽车制造业", "children": [
                            { "id": "0-6-0", "value": "B035", "label": "汽车整车制造", "children": null },
                            { "id": "0-6-1", "value": "B036", "label": "汽车零部件及配件制造", "children": null },
                            { "id": "0-6-2", "value": "B037", "label": "汽车车身、挂车制造", "children": null },
                            { "id": "0-6-3", "value": "B038", "label": "改装汽车制造", "children": null },
                            { "id": "0-6-4", "value": "B039", "label": "低速载货汽车制造", "children": null },
                            { "id": "0-6-5", "value": "B040", "label": "电车制造", "children": null }
                        ]
                    },
                    {
                        "id": "0-7", "value": "铁路、船舶、航空航天和其他运输设备制造业", "label": "铁路、船舶、航空航天和其他运输设备制造业", "children": [
                            { "id": "0-7-0", "value": "B041", "label": "铁路运输设备制造", "children": null },
                            { "id": "0-7-1", "value": "B042", "label": "船舶及相关装置制造", "children": null },
                            { "id": "0-7-2", "value": "B043", "label": "航空、航天器及设备制造", "children": null },
                            { "id": "0-7-3", "value": "B044", "label": "城市轨道交通设备制造", "children": null },
                            { "id": "0-7-4", "value": "B045", "label": "非公路休闲车及零配件制造", "children": null },
                            { "id": "0-7-5", "value": "B046", "label": "潜水救捞及其他未列明运输设备制造", "children": null },
                            { "id": "0-7-6", "value": "B047", "label": "摩托车制造", "children": null },
                            { "id": "0-7-7", "value": "B048", "label": "自行车制造", "children": null }
                        ]
                    },
                    {
                        "id": "0-8", "value": "仪器仪表制造业", "label": "仪器仪表制造业", "children": [
                            { "id": "0-8-0", "value": "B049", "label": "光学仪器及眼镜制造", "children": null },
                            { "id": "0-8-1", "value": "B050", "label": "通用仪器仪表制造", "children": null },
                            { "id": "0-8-2", "value": "B051", "label": "钟表与计时仪器制造", "children": null },
                            { "id": "0-8-3", "value": "B052", "label": "专用仪器仪表制造", "children": null },
                            { "id": "0-8-4", "value": "B053", "label": "其他仪器仪表制造业", "children": null }
                        ]
                    },
                    {
                        "id": "0-9", "value": "印刷和记录媒介复制业", "label": "印刷和记录媒介复制业", "children": [
                            { "id": "0-9-0", "value": "B054", "label": "记录媒介复制", "children": null },
                            { "id": "0-9-1", "value": "B055", "label": "印刷", "children": null },
                            { "id": "0-9-2", "value": "B056", "label": "装订及印刷相关服务", "children": null }
                        ]
                    },
                    {
                        "id": "0-10", "value": "造纸和纸制品业", "label": "造纸和纸制品业", "children": [
                            { "id": "0-10-0", "value": "B057", "label": "造纸", "children": null },
                            { "id": "0-10-1", "value": "B058", "label": "纸浆制造", "children": null },
                            { "id": "0-10-2", "value": "B059", "label": "纸制品制造", "children": null }
                        ]
                    },
                    {
                        "id": "0-11", "value": "医药制造业", "label": "医药制造业", "children": [
                            { "id": "0-11-0", "value": "B060", "label": "化学药品原料药制造", "children": null },
                            { "id": "0-11-1", "value": "B061", "label": "化学药品制剂制造", "children": null },
                            { "id": "0-11-2", "value": "B062", "label": "生物药品制造", "children": null },
                            { "id": "0-11-3", "value": "B063", "label": "兽用药品制造", "children": null },
                            { "id": "0-11-4", "value": "B064", "label": "卫生材料及医药用品制造", "children": null },
                            { "id": "0-11-5", "value": "B065", "label": "中成药生产", "children": null },
                            { "id": "0-11-6", "value": "B066", "label": "中药饮片加工", "children": null }
                        ]
                    },
                    {
                        "id": "0-12", "value": "食品制造业", "label": "食品制造业", "children": [
                            { "id": "0-12-0", "value": "B067", "label": "焙烤食品制造", "children": null },
                            { "id": "0-12-1", "value": "B068", "label": "方便食品制造", "children": null },
                            { "id": "0-12-2", "value": "B069", "label": "罐头食品制造", "children": null },
                            { "id": "0-12-3", "value": "B070", "label": "乳制品制造", "children": null },
                            { "id": "0-12-4", "value": "B071", "label": "糖果、巧克力及蜜饯制造", "children": null },
                            { "id": "0-12-5", "value": "B072", "label": "调味品、发酵制品制造", "children": null },
                            { "id": "0-12-6", "value": "B073", "label": "其他食品制造", "children": null }
                        ]
                    },
                    {
                        "id": "0-13", "value": "农副食品加工业", "label": "农副食品加工业", "children": [
                            { "id": "0-13-0", "value": "B074", "label": "谷物磨制", "children": null },
                            { "id": "0-13-1", "value": "B075", "label": "蔬菜、水果和坚果加工", "children": null },
                            { "id": "0-13-2", "value": "B076", "label": "水产品加工", "children": null },
                            { "id": "0-13-3", "value": "B077", "label": "饲料加工", "children": null },
                            { "id": "0-13-4", "value": "B078", "label": "屠宰及肉类加工", "children": null },
                            { "id": "0-13-5", "value": "B079", "label": "植物油加工", "children": null },
                            { "id": "0-13-6", "value": "B080", "label": "制糖业", "children": null },
                            { "id": "0-13-7", "value": "B081", "label": "其他农副食品加工", "children": null }
                        ]
                    },
                    {
                        "id": "0-14", "value": "酒、饮料和精制茶制造业", "label": "酒、饮料和精制茶制造业", "children": [
                            { "id": "0-14-0", "value": "B082", "label": "酒的制造", "children": null },
                            { "id": "0-14-1", "value": "B083", "label": "饮料制造", "children": null },
                            { "id": "0-14-2", "value": "B084", "label": "精制茶加工", "children": null }
                        ]
                    },
                    {
                        "id": "0-15", "value": "零部件加工业", "label": "零部件加工业", "children": [
                            { "id": "0-15-0", "value": "B109", "label": "金属零件加工业", "children": null },
                            { "id": "0-15-1", "value": "B110", "label": "非金属零件加工业", "children": null },
                            { "id": "0-15-2", "value": "B111", "label": "其他零件加工业", "children": null }
                        ]
                    },
                    {
                        "id": "0-16", "value": "板金加工业", "label": "板金加工业", "children": [
                            { "id": "0-16-0", "value": "B112", "label": "板金加工业", "children": null }
                        ]
                    },
                    {
                        "id": "0-17", "value": "熔接业", "label": "熔接业", "children": [
                            { "id": "0-17-0", "value": "B113", "label": "熔接业", "children": null }
                        ]
                    },
                    {
                        "id": "0-18", "value": "金属制品业", "label": "金属制品业", "children": [
                            { "id": "0-18-0", "value": "B114", "label": "集装箱及金属包装容器制造", "children": null },
                            { "id": "0-18-1", "value": "B115", "label": "建筑、安全用金属制品制造", "children": null },
                            { "id": "0-18-2", "value": "B116", "label": "结构性金属制品制造", "children": null },
                            { "id": "0-18-3", "value": "B117", "label": "金属表面处理及热处理加工", "children": null },
                            { "id": "0-18-4", "value": "B118", "label": "金属工具制造", "children": null },
                            { "id": "0-18-5", "value": "B119", "label": "金属丝绳及其制品制造", "children": null },
                            { "id": "0-18-6", "value": "B120", "label": "金属制日用品制造", "children": null },
                            { "id": "0-18-7", "value": "B121", "label": "搪瓷制品制造", "children": null },
                            { "id": "0-18-8", "value": "B122", "label": "其他金属制品制造", "children": null }
                        ]
                    },
                    {
                        "id": "0-19", "value": "金属制品、机械和设备修理业", "label": "金属制品、机械和设备修理业", "children": [
                            { "id": "0-19-0", "value": "B123", "label": "电气设备修理", "children": null },
                            { "id": "0-19-1", "value": "B124", "label": "金属制品修理", "children": null },
                            { "id": "0-19-2", "value": "B125", "label": "铁路、船舶、航空航天等运输设备修理", "children": null },
                            { "id": "0-19-3", "value": "B126", "label": "通用设备修理", "children": null },
                            { "id": "0-19-4", "value": "B127", "label": "仪器仪表修理", "children": null },
                            { "id": "0-19-5", "value": "B128", "label": "专用设备修理", "children": null },
                            { "id": "0-19-6", "value": "B129", "label": "其他机械和设备修理", "children": null }
                        ]
                    },
                    {
                        "id": "0-20", "value": "黑色金属冶炼和压延加工业", "label": "黑色金属冶炼和压延加工业", "children": [
                            { "id": "0-20-0", "value": "B130", "label": "钢压延加工", "children": null },
                            { "id": "0-20-1", "value": "B131", "label": "黑色金属铸造", "children": null },
                            { "id": "0-20-2", "value": "B132", "label": "炼钢", "children": null },
                            { "id": "0-20-3", "value": "B133", "label": "炼铁", "children": null },
                            { "id": "0-20-4", "value": "B134", "label": "铁合金冶炼", "children": null }
                        ]
                    },
                    {
                        "id": "0-21", "value": "有色金属冶炼和压延加工业", "label": "有色金属冶炼和压延加工业", "children": [
                            { "id": "0-21-0", "value": "B135", "label": "常用有色金属冶炼", "children": null },
                            { "id": "0-21-1", "value": "B136", "label": "贵金属冶炼", "children": null },
                            { "id": "0-21-2", "value": "B137", "label": "稀有稀土金属冶炼", "children": null },
                            { "id": "0-21-3", "value": "B138", "label": "有色金属合金制造", "children": null },
                            { "id": "0-21-4", "value": "B139", "label": "有色金属压延加工", "children": null },
                            { "id": "0-21-5", "value": "B140", "label": "有色金属铸造", "children": null }
                        ]
                    },
                    {
                        "id": "0-22", "value": "非金属矿物制品业", "label": "非金属矿物制品业", "children": [
                            { "id": "0-22-0", "value": "B141", "label": "玻璃纤维和玻璃纤维增强塑料制品制造", "children": null },
                            { "id": "0-22-1", "value": "B142", "label": "玻璃制品制造", "children": null },
                            { "id": "0-22-2", "value": "B143", "label": "玻璃制造", "children": null },
                            { "id": "0-22-3", "value": "B144", "label": "耐火材料制品制造", "children": null },
                            { "id": "0-22-4", "value": "B145", "label": "石膏、水泥制品及类似制品制造", "children": null },
                            { "id": "0-22-5", "value": "B146", "label": "石墨及其他非金属矿物制品制造", "children": null },
                            { "id": "0-22-6", "value": "B147", "label": "水泥、石灰和石膏制造", "children": null },
                            { "id": "0-22-7", "value": "B148", "label": "陶瓷制品制造", "children": null },
                            { "id": "0-22-8", "value": "B149", "label": "砖瓦、石材等建筑材料制造", "children": null }
                        ]
                    },
                    {
                        "id": "0-23", "value": "化学原料和化学制品制造业", "label": "化学原料和化学制品制造业", "children": [
                            { "id": "0-23-0", "value": "B150", "label": "肥料制造", "children": null },
                            { "id": "0-23-1", "value": "B151", "label": "合成材料制造", "children": null },
                            { "id": "0-23-2", "value": "B152", "label": "基础化学原料制造", "children": null },
                            { "id": "0-23-3", "value": "B153", "label": "农药制造", "children": null },
                            { "id": "0-23-4", "value": "B154", "label": "日用化学产品制造", "children": null },
                            { "id": "0-23-5", "value": "B155", "label": "涂料、油墨、颜料及类似产品制造", "children": null },
                            { "id": "0-23-6", "value": "B156", "label": "炸药、火工及焰火产品制造", "children": null },
                            { "id": "0-23-7", "value": "B157", "label": "专用化学产品制造", "children": null }
                        ]
                    },
                    {
                        "id": "0-24", "value": "化学纤维制造业", "label": "化学纤维制造业", "children": [
                            { "id": "0-24-0", "value": "B158", "label": "合成纤维制造", "children": null },
                            { "id": "0-24-1", "value": "B159", "label": "纤维素纤维原料及纤维制造", "children": null }
                        ]
                    },
                    {
                        "id": "0-25", "value": "纺织服装、服饰业", "label": "纺织服装、服饰业", "children": [
                            { "id": "0-25-0", "value": "B160", "label": "服饰制造", "children": null },
                            { "id": "0-25-1", "value": "B161", "label": "机织服装制造", "children": null },
                            { "id": "0-25-2", "value": "B162", "label": "针织或钩针编织服装制造", "children": null }
                        ]
                    },
                    {
                        "id": "0-26", "value": "纺织业", "label": "纺织业", "children": [
                            { "id": "0-26-0", "value": "B163", "label": "化纤织造及印染精加工", "children": null },
                            { "id": "0-26-1", "value": "B164", "label": "家用纺织制成品制造", "children": null },
                            { "id": "0-26-2", "value": "B165", "label": "麻纺织及染整精加工", "children": null },
                            { "id": "0-26-3", "value": "B166", "label": "毛纺织及染整精加工", "children": null },
                            { "id": "0-26-4", "value": "B167", "label": "棉纺织及印染精加工", "children": null },
                            { "id": "0-26-5", "value": "B168", "label": "丝绢纺织及印染精加工", "children": null },
                            { "id": "0-26-6", "value": "B169", "label": "针织或钩针编织物及其制品制造", "children": null },
                            { "id": "0-26-7", "value": "B170", "label": "非家用纺织制成品制造", "children": null }
                        ]
                    },
                    {
                        "id": "0-27", "value": "石油加工、炼焦和核燃料加工业", "label": "石油加工、炼焦和核燃料加工业", "children": [
                            { "id": "0-27-0", "value": "B171", "label": "核燃料加工", "children": null },
                            { "id": "0-27-1", "value": "B172", "label": "精炼石油产品制造", "children": null },
                            { "id": "0-27-2", "value": "B173", "label": "炼焦", "children": null }
                        ]
                    },
                    {
                        "id": "0-28", "value": "橡胶和塑料制品业", "label": "橡胶和塑料制品业", "children": [
                            { "id": "0-28-0", "value": "B174", "label": "塑料制品业", "children": null },
                            { "id": "0-28-1", "value": "B175", "label": "橡胶制品业", "children": null }
                        ]
                    },
                    {
                        "id": "0-29", "value": "皮革、毛皮、羽毛及其制品和制鞋业", "label": "皮革、毛皮、羽毛及其制品和制鞋业", "children": [
                            { "id": "0-29-0", "value": "B176", "label": "毛皮鞣制及制品加工", "children": null },
                            { "id": "0-29-1", "value": "B177", "label": "皮革鞣制加工", "children": null },
                            { "id": "0-29-2", "value": "B178", "label": "皮革制品制造", "children": null },
                            { "id": "0-29-3", "value": "B179", "label": "羽毛(绒)加工及制品制造", "children": null },
                            { "id": "0-29-4", "value": "B180", "label": "制鞋业", "children": null }
                        ]
                    },
                    {
                        "id": "0-30", "value": "文教、工美、体育和娱乐用品制造业", "label": "文教、工美、体育和娱乐用品制造业", "children": [
                            { "id": "0-30-0", "value": "B181", "label": "文教办公用品制造", "children": null },
                            { "id": "0-30-1", "value": "B182", "label": "工艺美术品制造", "children": null },
                            { "id": "0-30-2", "value": "B183", "label": "体育用品制造", "children": null },
                            { "id": "0-30-3", "value": "B184", "label": "乐器制造", "children": null },
                            { "id": "0-30-4", "value": "B185", "label": "玩具制造", "children": null },
                            { "id": "0-30-5", "value": "B186", "label": "游艺器材及娱乐用品制造", "children": null }
                        ]
                    },
                    {
                        "id": "0-31", "value": "家具制造业", "label": "家具制造业", "children": [
                            { "id": "0-31-0", "value": "B187", "label": "金属家具制造", "children": null },
                            { "id": "0-31-1", "value": "B188", "label": "木质家具制造", "children": null },
                            { "id": "0-31-2", "value": "B189", "label": "塑料家具制造", "children": null },
                            { "id": "0-31-3", "value": "B190", "label": "竹、藤家具制造", "children": null },
                            { "id": "0-31-4", "value": "B191", "label": "其他家具制造", "children": null }
                        ]
                    },
                    {
                        "id": "0-32", "value": "木材加工和木、竹、藤、棕、草制品业", "label": "木材加工和木、竹、藤、棕、草制品业", "children": [
                            { "id": "0-32-0", "value": "B192", "label": "木材加工", "children": null },
                            { "id": "0-32-1", "value": "B193", "label": "木制品制造", "children": null },
                            { "id": "0-32-2", "value": "B194", "label": "人造板制造", "children": null },
                            { "id": "0-32-3", "value": "B195", "label": "竹、藤、棕、草等制品制造", "children": null }
                        ]
                    },
                    {
                        "id": "0-33", "value": "烟草制品业", "label": "烟草制品业", "children": [
                            { "id": "0-33-0", "value": "B196", "label": "卷烟制造", "children": null },
                            { "id": "0-33-1", "value": "B197", "label": "烟叶复烤", "children": null },
                            { "id": "0-33-2", "value": "B198", "label": "其他烟草制品制造", "children": null }
                        ]
                    },
                    {
                        "id": "0-34", "value": "废弃资源综合利用业", "label": "废弃资源综合利用业", "children": [
                            { "id": "0-34-0", "value": "B199", "label": "金属废料和碎屑加工处理", "children": null },
                            { "id": "0-34-1", "value": "B200", "label": "非金属废料和碎屑加工处理", "children": null }
                        ]
                    },
                    {
                        "id": "0-35", "value": "其他制造业", "label": "其他制造业", "children": [
                            { "id": "0-35-0", "value": "B201", "label": "日用杂品制造", "children": null },
                            { "id": "0-35-1", "value": "B202", "label": "煤制品制造", "children": null },
                            { "id": "0-35-2", "value": "B203", "label": "核辐射加工", "children": null },
                            { "id": "0-35-3", "value": "B204", "label": "其他未列明制造业", "children": null }
                        ]
                    }
                ]
            },
            {
                "id": "1", "value": "非制造业", "label": "非制造业", "children": [
                    {
                        "id": "1-0", "value": "贸易公司", "label": "贸易公司", "children": [
                            { "id": "1-0-0", "value": "B205", "label": "零售业", "children": null },
                            { "id": "1-0-1", "value": "B206", "label": "批发业", "children": null }
                        ]
                    },
                    {
                        "id": "1-1", "value": "设计公司", "label": "设计公司", "children": [
                            { "id": "1-1-0", "value": "B207", "label": "设备设计公司", "children": null },
                            { "id": "1-1-1", "value": "B208", "label": "模具设计公司", "children": null },
                            { "id": "1-1-2", "value": "B209", "label": "产品设计公司", "children": null }
                        ]
                    },
                    {
                        "id": "1-2", "value": "学校", "label": "学校", "children": [
                            { "id": "1-2-0", "value": "B210", "label": "学校", "children": null }
                        ]
                    },
                    {
                        "id": "1-3", "value": "科学研究和技术服务业", "label": "科学研究和技术服务业", "children": [
                            { "id": "1-3-0", "value": "B211", "label": "科技推广和应用服务业", "children": null },
                            { "id": "1-3-1", "value": "B212", "label": "研究和试验发展", "children": null },
                            { "id": "1-3-2", "value": "B213", "label": "专业技术服务业", "children": null }
                        ]
                    },
                    {
                        "id": "1-4", "value": "电力、热力、燃气及水生产和供应业", "label": "电力、热力、燃气及水生产和供应业", "children": [
                            { "id": "1-4-0", "value": "B215", "label": "电力、热力生产和供应业", "children": null },
                            { "id": "1-4-1", "value": "B216", "label": "燃气生产和供应业", "children": null },
                            { "id": "1-4-2", "value": "B217", "label": "水的生产和供应业", "children": null }
                        ]
                    },
                    {
                        "id": "1-5", "value": "水利、环境和公共设施管理业", "label": "水利、环境和公共设施管理业", "children": [
                            { "id": "1-5-0", "value": "B218", "label": "公共设施管理业", "children": null },
                            { "id": "1-5-1", "value": "B219", "label": "生态保护和环境治理业", "children": null },
                            { "id": "1-5-2", "value": "B220", "label": "水利管理业", "children": null }
                        ]
                    },
                    {
                        "id": "1-6", "value": "居民服务、修理和其他服务业", "label": "居民服务、修理和其他服务业", "children": [
                            { "id": "1-6-0", "value": "B221", "label": "机动车、电子产品和日用产品修理业", "children": null },
                            { "id": "1-6-1", "value": "B222", "label": "居民服务业", "children": null },
                            { "id": "1-6-2", "value": "B223", "label": "其他服务业", "children": null }
                        ]
                    },
                    {
                        "id": "1-7", "value": "信息传输、软件和信息技术服务业", "label": "信息传输、软件和信息技术服务业", "children": [
                            { "id": "1-7-0", "value": "B224", "label": "电信、广播电视和卫星传输服务", "children": null },
                            { "id": "1-7-1", "value": "B225", "label": "互联网和相关服务", "children": null },
                            { "id": "1-7-2", "value": "B226", "label": "软件和信息技术服务业", "children": null }
                        ]
                    },
                    {
                        "id": "1-8", "value": "采矿业", "label": "采矿业", "children": [
                            { "id": "1-8-0", "value": "B227", "label": "非金属矿采选业", "children": null },
                            { "id": "1-8-1", "value": "B228", "label": "黑色金属矿采选业", "children": null },
                            { "id": "1-8-2", "value": "B229", "label": "开采辅助活动", "children": null },
                            { "id": "1-8-3", "value": "B230", "label": "煤炭开采和洗选业", "children": null },
                            { "id": "1-8-4", "value": "B231", "label": "其他采矿业", "children": null },
                            { "id": "1-8-5", "value": "B232", "label": "石油和天然气开采业", "children": null },
                            { "id": "1-8-6", "value": "B233", "label": "有色金属矿采选业", "children": null }
                        ]
                    },
                    {
                        "id": "1-9", "value": "交通运输、仓储和邮政业", "label": "交通运输、仓储和邮政业", "children": [
                            { "id": "1-9-0", "value": "B234", "label": "仓储业", "children": null },
                            { "id": "1-9-1", "value": "B235", "label": "道路运输业", "children": null },
                            { "id": "1-9-2", "value": "B236", "label": "管道运输业", "children": null },
                            { "id": "1-9-3", "value": "B237", "label": "航空运输业", "children": null },
                            { "id": "1-9-4", "value": "B238", "label": "水上运输业", "children": null },
                            { "id": "1-9-5", "value": "B239", "label": "铁路运输业", "children": null },
                            { "id": "1-9-6", "value": "B240", "label": "邮政业", "children": null },
                            { "id": "1-9-7", "value": "B241", "label": "装卸搬运和运输代理业", "children": null }
                        ]
                    },
                    {
                        "id": "1-10", "value": "房地产业", "label": "房地产业", "children": [
                            { "id": "1-10-0", "value": "B242", "label": "房地产业", "children": null }
                        ]
                    },
                    {
                        "id": "1-11", "value": "建筑业", "label": "建筑业", "children": [
                            { "id": "1-11-0", "value": "B243", "label": "房屋建筑业", "children": null },
                            { "id": "1-11-1", "value": "B244", "label": "建筑安装业", "children": null },
                            { "id": "1-11-2", "value": "B245", "label": "建筑装饰和其他建筑业", "children": null },
                            { "id": "1-11-3", "value": "B246", "label": "土木工程建筑业", "children": null }
                        ]
                    },
                    {
                        "id": "1-12", "value": "金融业", "label": "金融业", "children": [
                            { "id": "1-12-0", "value": "B247", "label": "保险业", "children": null },
                            { "id": "1-12-1", "value": "B248", "label": "货币金融服务", "children": null },
                            { "id": "1-12-2", "value": "B249", "label": "其他金融业", "children": null },
                            { "id": "1-12-3", "value": "B250", "label": "资本市场服务", "children": null }
                        ]
                    },
                    {
                        "id": "1-13", "value": "农、林、牧、渔业", "label": "农、林、牧、渔业", "children": [
                            { "id": "1-13-0", "value": "B251", "label": "畜牧业", "children": null },
                            { "id": "1-13-1", "value": "B252", "label": "林业", "children": null },
                            { "id": "1-13-2", "value": "B253", "label": "农、林、牧、渔服务业", "children": null },
                            { "id": "1-13-3", "value": "B254", "label": "农业", "children": null },
                            { "id": "1-13-4", "value": "B255", "label": "渔业", "children": null }
                        ]
                    },
                    {
                        "id": "1-14", "value": "文化、体育和娱乐业", "label": "文化、体育和娱乐业", "children": [
                            { "id": "1-14-0", "value": "B256", "label": "广播、电视、电影和影视录音制作业", "children": null },
                            { "id": "1-14-1", "value": "B257", "label": "体育", "children": null },
                            { "id": "1-14-2", "value": "B258", "label": "文化艺术业", "children": null },
                            { "id": "1-14-3", "value": "B259", "label": "新闻和出版业", "children": null },
                            { "id": "1-14-4", "value": "B260", "label": "娱乐业", "children": null }
                        ]
                    },
                    {
                        "id": "1-15", "value": "住宿和餐饮业", "label": "住宿和餐饮业", "children": [
                            { "id": "1-15-0", "value": "B261", "label": "餐饮业", "children": null },
                            { "id": "1-15-1", "value": "B262", "label": "住宿业", "children": null }
                        ]
                    },
                    {
                        "id": "1-16", "value": "租赁和商务服务业", "label": "租赁和商务服务业", "children": [
                            { "id": "1-16-0", "value": "B263", "label": "商务服务业", "children": null },
                            { "id": "1-16-1", "value": "B264", "label": "租赁业", "children": null }
                        ]
                    },
                    {
                        "id": "1-17", "value": "卫生和社会工作", "label": "卫生和社会工作", "children": [
                            { "id": "1-17-0", "value": "B265", "label": "社会工作", "children": null },
                            { "id": "1-17-1", "value": "B266", "label": "卫生", "children": null }
                        ]
                    },
                    {
                        "id": "1-18", "value": "公共管理、社会保障和社会组织", "label": "公共管理、社会保障和社会组织", "children": [
                            { "id": "1-18-0", "value": "B267", "label": "国家机构", "children": null },
                            { "id": "1-18-1", "value": "B268", "label": "基层群众自治组织", "children": null },
                            { "id": "1-18-2", "value": "B269", "label": "群众团体、社会团体和其他成员组织", "children": null },
                            { "id": "1-18-3", "value": "B270", "label": "人民政协、民主党派", "children": null },
                            { "id": "1-18-4", "value": "B271", "label": "社会保障", "children": null },
                            { "id": "1-18-5", "value": "B272", "label": "中国共产党机关", "children": null }
                        ]
                    },
                    {
                        "id": "1-19", "value": "国际组织", "label": "国际组织", "children": [
                            { "id": "1-19-0", "value": "B273", "label": "国际组织", "children": null }
                        ]
                    },
                    {
                        "id": "1-20", "value": "其他非制造业", "label": "其他非制造业", "children": [
                            { "id": "1-20-0", "value": "B274", "label": "其他非制造业", "children": null }
                        ]
                    }
                ]
            }
        ];
    }
    IndustryData.prototype.GetLevel_2sByLevel_1 = function (level_1Id) {
        for (var _i = 0, _a = this.Data; _i < _a.length; _i++) {
            var level_1 = _a[_i];
            if (level_1.id == level_1Id) {
                return level_1.children;
            }
        }
    };
    IndustryData.prototype.GetLevel_3sByLevel_2 = function (level_2Id) {
        for (var _i = 0, _a = this.Data; _i < _a.length; _i++) {
            var level_1 = _a[_i];
            for (var _b = 0, _c = level_1.children; _b < _c.length; _b++) {
                var level_2 = _c[_b];
                if (level_2.id == level_2Id) {
                    return level_2.children;
                }
            }
        }
    };
    return IndustryData;
}());
IndustryData.Instance = new IndustryData();
/**
 * 行业选择器
 */
var IndustrySelector = (function () {
    function IndustrySelector(level_1, level_2, level_3) {
        this.$level_1 = $(level_1);
        this.$level_2 = $(level_2);
        this.$level_3 = $(level_3);
        this.Init();
    }
    /**
 * 初始化
 */
    IndustrySelector.prototype.Init = function () {
        this.BindEvent();
        this.InitLevel_1();
    };
    /**
 * 绑定事件
 */
    IndustrySelector.prototype.BindEvent = function () {
        var _this = this;
        this.$level_1.on('change', function () {
            _this.Level_1Changed();
        });
        this.$level_2.on('change', function () {
            _this.Level_2Changed();
        });
    };
    IndustrySelector.prototype.Level_1Changed = function () {
        var level_1Id = this.$level_1.val();
        this.InitLevel_2(level_1Id);
        this.$level_2.trigger('change');
    };
    IndustrySelector.prototype.Level_2Changed = function () {
        var level_2Id = this.$level_2.val();
        this.InitLevel_3(level_2Id);
    };
    IndustrySelector.prototype.InitLevel_1 = function () {
        this.$level_1.append('<option value=""> 请选择行业！</option>');
        for (var _i = 0, _a = IndustryData.Instance.Data; _i < _a.length; _i++) {
            var level_1 = _a[_i];
            var optionStr = "<option value=\"" + level_1.id + "\">" + level_1.label + "</option>";
            this.$level_1.append(optionStr);
        }
    };
    IndustrySelector.prototype.InitLevel_2 = function (level_1Id) {
        var level_2s = IndustryData.Instance.GetLevel_2sByLevel_1(level_1Id);
        this.$level_2.empty();
        this.$level_2.append('<option value=""> 请选择行业！</option>');
        if (!level_2s) {
            return;
        }
        for (var _i = 0, level_2s_1 = level_2s; _i < level_2s_1.length; _i++) {
            var level_2 = level_2s_1[_i];
            var optionStr = "<option value=\"" + level_2.id + "\">" + level_2.label + "</option>";
            this.$level_2.append(optionStr);
        }
    };
    IndustrySelector.prototype.InitLevel_3 = function (level_2Id) {
        var level_3s = IndustryData.Instance.GetLevel_3sByLevel_2(level_2Id);
        this.$level_3.empty();
        this.$level_3.append('<option value=""> 请选择行业！</option>');
        if (!level_3s) {
            return;
        }
        for (var _i = 0, level_3s_1 = level_3s; _i < level_3s_1.length; _i++) {
            var level_3 = level_3s_1[_i];
            var optionStr = "<option value=\"" + level_3.id + "\">" + level_3.label + "</option>";
            this.$level_3.append(optionStr);
        }
    };
    IndustrySelector.prototype.InitValues = function (Industry) {
        var industryarr = Industry.split("-");
        if (industryarr.length != 3) {
            console.log(industryarr);
            return false;
        }
        this.$level_1.val("" + industryarr[0]).trigger('change');
        this.$level_2.val(industryarr[0] + "-" + industryarr[1]).trigger('change');
        this.$level_3.val(industryarr[0] + "-" + industryarr[1] + "-" + industryarr[2]).trigger('change');
    };
    IndustrySelector.prototype.GetIndustryFullName = function (Industry) {
        var industryarr = Industry.split("-");
        if (industryarr.length != 3) {
            console.log(industryarr);
            return Industry;
        }
        else {
            for (var _i = 0, _a = IndustryData.Instance.Data; _i < _a.length; _i++) {
                var level_1 = _a[_i];
                for (var _b = 0, _c = level_1.children; _b < _c.length; _b++) {
                    var level_2 = _c[_b];
                    for (var _d = 0, _e = level_2.children; _d < _e.length; _d++) {
                        var level_3 = _e[_d];
                        if (level_3.id == Industry) {
                            return level_1.label + '-' + level_2.label + '-' + level_3.label;
                        }
                    }
                }
            }
        }
    };
    IndustrySelector.prototype.InitIndustryName = function () {
        var _this = this;
        $('industry').each(function (index, elem) {
            var $this = $(elem);
            var industryval = $this.attr("data-industry");
            if (industryval) {
                $this.replaceWith(_this.GetIndustryFullName(industryval));
            }
        });
    };
    return IndustrySelector;
}());
//# sourceMappingURL=IndustrySelector.js.map