/// <reference path="../scripts/typings/jquery/jquery.d.ts" />
/// <reference path="../scripts/typings/typeahead/typeahead.d.ts" />
/// <reference path="enquirypopover.ts" />
/// <reference path="../scripts/typings/jquery/jquerystatic.d.ts" />
var MaiDaoApi = (function () {
    function MaiDaoApi() {
    }
    MaiDaoApi.Api = function (fullCode, reqMsg, successCallBack, errorCallBack) {
        var reqMsgStr = JSON.stringify(reqMsg);
        var agentUrl = '/Agent/Api';
        $.post(agentUrl, { fullCode: fullCode, reqMsg: reqMsgStr }, function (resp) {
            if (resp.IsSuccess || resp.isSuccess) {
                successCallBack(resp);
            }
            else {
                errorCallBack(resp);
            }
        });
    };
    /**
     * 重新加载右侧马车徽标
     */
    MaiDaoApi.LoadCart = function () {
        this.Api('T.Enquiry.GetCartCount', {}, function (resp) {
            var $list = $('ul[data-role=newestEnquiryList]');
            $list.empty();
            if (resp.Body.EnquiryNotices.length == 0) {
                var noneLi = '<li><a class="text-black">您暂未询价!</a></li>';
                $list.append(noneLi);
            }
            else {
                for (var _i = 0, _a = resp.Body.EnquiryNotices; _i < _a.length; _i++) {
                    var item = _a[_i];
                    var enquiryLi = "<li><i class=\"icon\"></i><a class=\"text-black\" href=\"/Enquiry?EnquiryNo=" + item.EnquiryNo + "\">" + item.EnquiryNo + "</a></li>";
                    $list.append(enquiryLi);
                }
            }
            $('[data-role=enquirycartbox]').html(resp.Body.Enquiry);
            $('[data-role=bargaincartbox]').html(resp.Body.Bargain);
            $('[data-role=ordercartbox]').html(resp.Body.Order);
            $('[data-role=framecontractcartbox]').html(resp.Body.FrameContract);
            $('[data-role=quickbuycartbox]').html(resp.Body.QuickBuyCount);
        }, function (resp) {
        });
    };
    MaiDaoApi.FlyToCart = function ($end, event) {
        var offset = $end.offset();
        var $flyer = $('<img style="display:block;with:100px;height:100px;position: fixed;z-index:999999999;" src="http://img.51mydao.com/image/icon-fly20170104.png"/>');
        $flyer.fly({
            start: {
                left: event.clientX,
                top: event.clientY
            },
            end: {
                left: offset.left,
                top: offset.top - $(document).scrollTop(),
                width: 50,
                height: 50
            },
            speed: 1.2,
            onEnd: function () { $flyer.remove(); }
        });
    };
    MaiDaoApi.IsNeedPerfectInfo = function () {
        var currentMember = window.CurrentMember;
        if (currentMember.EMail && currentMember.TrueName && currentMember.EnterpriseName) {
            return false;
        }
        return true;
    };
    MaiDaoApi.PerfectInfo = function () {
        var currentMember = window.CurrentMember;
        var showEMail = "display:none;";
        if (!currentMember.EMail) {
            showEMail = "display:block;";
        }
        var perfectInfoStr = "\n            <div class=\"infoBox\" style=\"width:400px; padding:20px;\">\n\t            <form id=\"perfectinfo_form\">\n\t\t            <div class=\"form-group\">\n\t\t\t            <label for=\"info_TrueName\">\u60A8\u7684\u59D3\u540D</label>\n\t\t\t            <span>\n\t\t\t\t            <input name=\"info_TrueName\" id=\"info_TrueName\" type=\"text\" placeholder=\"\u8BF7\u8F93\u5165\u59D3\u540D\" value=\"" + currentMember.TrueName + "\">\n\t\t\t\t            <i class=\"icon\"></i>\n\t\t\t\t            <b class=\"icon\"></b>\n\t\t\t            </span>\n\t\t            </div>\n\t\t            <div class=\"form-group\">\n\t\t\t            <label for=\"info_EnterpriseName\">\u4F01\u4E1A\u540D\u79F0</label>\n\t\t\t            <span>\n\t\t\t\t            <input name=\"info_EnterpriseName\" id=\"info_EnterpriseName\" type=\"text\" placeholder=\"\u8BF7\u8F93\u5165\u4F01\u4E1A\u540D\u79F0\" value=\"" + currentMember.EnterpriseName + "\">\n\t\t\t\t            <i class=\"icon\"></i>\n\t\t\t\t            <b class=\"icon\"></b>\n\t\t\t            </span>\n\t\t            </div>\n\t\t            <div class=\"form-group\" style=\"" + showEMail + "\">\n\t\t\t            <label for=\"info_EMail\">\u7ED1\u5B9A\u90AE\u7BB1</label>\n\t\t\t            <span>\n\t\t\t\t            <input name=\"info_EMail\" id=\"info_EMail\" type=\"text\" placeholder=\"\u8BF7\u8F93\u5165\u90AE\u7BB1\" value=\"" + currentMember.EMail + "\">\n\t\t\t\t            <i class=\"icon\"></i>\n\t\t\t\t            <b class=\"icon\"></b>\n\t\t\t            </span>\n\t\t            </div>\n\t\t            <div class=\"form-group\" style=\"" + showEMail + "\">\n\t\t\t            <label for=\"registerEMail\">\u9A8C\u8BC1\u7801</label>\n\t\t\t            <span>\n\t\t\t\t            <input class=\"register-mail required\" name=\"info_Captcha\" id=\"info_Captcha\" type=\"text\" placeholder=\"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801\">\n\t\t\t\t            <i class=\"icon\"></i>\n\t\t\t\t            <b class=\"icon\"></b>\n\t\t\t            </span>\n\t\t\t            <input class=\"register-mail-verification\" type=\"button\"  value=\"\u53D1\u9001\u9A8C\u8BC1\u7801\" data-role=\"btn_send_email\" data-target=\"#info_EMail\">\n\t\t            </div>\n\t\t            <div class=\"form-group\">\n\t\t\t            <label></label>\n\t\t\t            <span style=\"height: 30px;\">\n\t\t\t\t            <a class=\"btn-submitInfo\" data-role=\"btn_perfectinfo\">\u5B8C\u5584\u4FE1\u606F\u5E76\u63D0\u4EA4</a>\n\t\t\t\t            <a class=\"btn-quit\" href=\"javascript:layer.closeAll();\">\u6682\u4E0D\u5B8C\u5584\u4FE1\u606F</a>\n\t\t\t            </span>\n\t\t            </div>\n\t            </form>\n\t            <div style=\"margin-top:25px;\">\n\t\t            <p>\u5982\u6682\u4E0D\u5B8C\u5584\u4FE1\u606F\uFF0C\u7A0D\u540E\u53EF\u5728\u3010\u6211\u7684\u4E70\u9053\u3011&gt; \u8D26\u6237\u7BA1\u7406 &gt; <span class=\"text-red\">\u8D26\u6237\u4FE1\u606F</span> \u81EA\u884C\u5B8C\u5584\u4FE1\u606F\u54E6\u3002</p>\n\t            </div>\n\t            <ul class=\"info_footer\">\n\t\t            <li class=\"text-bold\">\u7ED1\u5B9A\u90AE\u7BB1\u540E\u60A8\u53EF\u4EE5\uFF1A</li>\n\t\t            <li>1. \u901A\u8FC7\u90AE\u7BB1\u627E\u56DE\u5BC6\u7801</li>\n\t\t            <li>2. \u901A\u8FC7\u90AE\u7BB1\u767B\u5F55</li>\n\t\t            <li>3. \u901A\u8FC7\u90AE\u7BB1\u53EF\u83B7\u5F97\u53CA\u65F6\u63A8\u9001\u7684\u8BE2\uFF0C\u8BAE\u4EF7\u53CA\u8BA2\u5355\u7269\u6D41\u4FE1\u606F\u3002</li>\n\t            </ul>\n            </div>\n            ";
        layer.open({
            type: 1,
            area: ['600', '400'],
            title: '完善信息',
            shadeClose: true,
            content: perfectInfoStr
        });
        return false;
    };
    /**
     * 添加到询价车
     * @param ProductId
     * @param Quantity
     */
    MaiDaoApi.AddToEnquiryCart = function (productId, productModel, brandName, categoryName, quantity, event) {
        var currentMember = window.CurrentMember;
        if (!(currentMember && currentMember.Id)) {
            layer.msg('请先登录!');
            return;
        }
        brandName = brandName || '';
        categoryName = categoryName || '';
        quantity = quantity || 1;
        var eq_deadlineId = Date.now().toString();
        var quickEnquiryStr = "\n                <div class=\"eqBox\">\n\t                <form>\n\t\t                <div class=\"form-group\">\n\t\t\t                <label>\u4EA7\u54C1\u578B\u53F7</label>\n\t\t\t                <div class=\"product_info\">\n\t\t\t\t                <p>" + productModel + "</p>\n\t\t\t\t                <p>" + brandName + " " + categoryName + "</p>\n\t\t\t                </div>\n\t\t                </div>\n\t\t                <div class=\"form-group\">\n\t\t\t                <label>\u8BE2\u4EF7\u6570\u91CF</label>\n\t\t\t                <span class=\"data-numbox\" data-numbox=\"\">\n                                <span class=\"data-numbox-minus pull-left\" data-numbox-minus=\"\">-</span>\n\t\t\t                <input class=\"data-numbox-input pull-left\" data-numbox-input=\"\" style=\"width: 110px;\" data-role=\"quantity\" value=\"" + quantity + "\">\n\t\t\t                <span class=\"data-numbox-plus pull-left\" data-numbox-plus=\"\">+</span>\n\t\t\t                </span>\n\t\t                </div>\n\t\t                <div class=\"form-group\">\n\t\t\t                <label>\u622A\u6B62\u65E5\u671F</label>\n\t\t\t                <span>\n\t\t\t\t                <input type=\"text\" data-role=\"deadline\" id=\"" + eq_deadlineId + "\" value='" + laydate.now(10, "YYYY-MM-DD hh:mm:ss") + "' onclick=\"laydate({istime:true,format: 'YYYY-MM-DD hh:mm:ss', min: laydate.now(10,'YYYY-MM-DD hh:mm:ss')})\">\n\t\t\t                </span>\n\t\t                </div>\n\t\t                <a class=\"form-group\">\n                            <input type=\"hidden\"  data-role=\"productid\" value=\"" + productId + "\">\n\t\t\t                </a><a class=\"eqBox_btn btn_cart\" data-role=\"btn_submit_eq\" data-from=\"1\">\u52A0\u5165\u5FEB\u901F\u8BE2\u4EF7\u8F66<br>\u5408\u5E76\u53D1\u9001\u8BE2\u4EF7</a>\n\t\t\t                <a class=\"eqBox_btn btn_eq\" data-role=\"btn_submit_eq\" data-from=\"2\">\u7ACB\u5373\u8BE2\u4EF7</a>\n\t\t                </form></div>\n            ";
        layer.open({
            type: 1,
            area: ['600', '400'],
            title: '询价',
            shadeClose: true,
            content: quickEnquiryStr,
            success: function (layero, index) {
                $('.eqBox [data-numbox]').numbox();
                laydate.skin('dahong');
            }
        });
    };
    /**
     * 加入快速询价
     * @param ProductId
     * @param Quantity
     * @param event
     */
    MaiDaoApi.AddToQuickEnquiryCart = function (ProductId, Quantity, event) {
        var _this = this;
        this.Api("T.Enquiry.AddToEnquiryCart", { ProductId: ProductId, Quantity: Quantity }, function (resp) {
            if (event) {
                event();
            }
            _this.LoadCart();
        }, function (resp) {
            layer.msg(resp.Message);
        });
    };
    /**
 * 添加到议价车
 * @param ProductId
 * @param EnquiryId
 * @param EnquiryProductId
 * @param Quantity
 */
    MaiDaoApi.AddToBargainCart = function (ProductId, EnquiryId, EnquiryProductId, Quantity, event) {
        var _this = this;
        this.Api("T.Enquiry.AddToBargainCart", { ProductId: ProductId, EnquiryId: EnquiryId, EnquiryProductId: EnquiryProductId, Quantity: Quantity }, function (resp) {
            if (event) {
                var $end = $('[data-role=bargaincartbox]').parent();
                _this.FlyToCart($end, event);
            }
            _this.LoadCart();
        }, function (resp) {
            if (resp.ErrorCode == '00102') {
                var content = "<div class=\"uploadLicense\">\n                                    <h6>\u8BF7\u5148\u4E0A\u4F20\u8425\u4E1A\u6267\u7167\uFF01</h6>\n                                    <a class=\"btn btn-red\" href=\"/Member/UploadCer\">\u7ACB\u5373\u4E0A\u4F20</a>\n                                  </div>";
                layer.open({
                    type: 1,
                    title: '信息',
                    content: content
                });
            }
            else if (resp.ErrorCode == '00103') {
                var content = "<div class=\"enquiryTips\"\">\n    <h6>\u60A8\u7684\u8BAE\u4EF7\u529F\u80FD\u5C1A\u672A\u5F00\u901A\uFF0C\u8BE5\u529F\u80FD\u5F00\u901A\u524D\uFF0C\u8BF7\u4ED4\u7EC6\u9605\u8BFB\u8BAE\u4EF7\u8BF4\u660E</h6>\n    <div class=\"enquiryTipsBody\">\n      <h6>\u201C\u8BAE\u4EF7\u201D\u6709\u98CE\u9669\uFF0C\u201C\u63D0\u4EA4\u201D\u9700\u8C28\u614E\uFF01</h6>\n      <p>\u4E3A\u786E\u4FDD\u4F9B\u9700\u53CC\u65B9\u9AD8\u6548\u6C9F\u901A\u3001\u8BDA\u4FE1\u4EA4\u6613\uFF0C\u4E70\u9053\u4F20\u611F\u5E73\u53F0\u7279\u8BBE\u201C\u8BAE\u4EF7\u201D\u670D\u52A1\uFF0C\u5E76\u5236\u5B9A\u672C\u89C4\u5219\uFF0C\u60A8\u7684\u786E\u8BA4\u5C06\u88AB\u89C6\u4E3A\u5BF9\u672C\u89C4\u5219\u7684\u8BA4\u53EF\u53CA\u613F\u610F\u9075\u7167\u6267\u884C\u3002</p>\n      <p>1\u3001\u76EE\u6807\u578B\u53F7\u201C\u52A0\u5165\u8BAE\u4EF7\u8F66\u201D\u540E\uFF0C\u60A8\u53EF\u5168\u9009\u6216\u90E8\u5206\u9009\u62E9\u4F9B\u65B9\uFF0C\u4F5C\u4E3A\u60A8\u7684\u8BAE\u4EF7\u76EE\u6807\u4F9B\u65B9\uFF1B</p>\n      <p>2\u3001\u60A8\u5728\u201C\u8BAE\u4EF7\u8F66\u201D\u4E2D\u586B\u5199\u7684\u201C\u76EE\u6807\u8D27\u671F\u201D\u3001\u201C\u76EE\u6807\u4EF7\u683C\u201D\u3001\u201C\u8D2D\u4E70\u6570\u91CF\u201D\u3001\u201C\u6EE1\u8DB3\u8981\u6C42\u7684\u4E0B\u5355\u65F6\u95F4\u201D\uFF0C\u5747\u89C6\u8D2D\u4E70\u8981\u7EA6\uFF1B</p>\n      <p>3\u3001\u5982\u6709\u4F9B\u65B9\u62A5\u4EF7\u5B8C\u5168\u6EE1\u8DB3\u60A8\u7684\u8981\u6C42\uFF0C \u60A8\u6700\u7EC8\u672A\u5C65\u884C\u8981\u7EA6\uFF1A\u60A8\u9664\u6309\u5F53\u65F6\u6240\u7B7E\u5408\u540C\u8FDD\u7EA6\u6761\u6B3E\u6267\u884C\u5916\uFF0C\u5E74\u5185\u9996\u6B21\u8FDD\u7EA6\u8FD8\u9700\u6309\u6EE1\u8DB3\u60A8\u8981\u7EA6\u603B\u989D\u76844\uFF05\u6570\u503C\u79EF\u5206\u652F\u4ED8\u8FDD\u7EA6\u8865\u507F\uFF1B\u4E4B\u540E\u6BCF\u6B21\u8FDD\u7EA6\uFF0C\u8FDD\u7EA6\u79EF\u5206\u500D\u589E\uFF08\u5373\u7B2C\u4E8C\u6B21\u8FDD\u7EA6\u6263\u51CF\u8FDD\u7EA6\u603B\u989D8%\u6570\u503C\u7684\u79EF\u5206\uFF0C\u7B2C\u4E09\u6B21\u6263\u51CF\u8FDD\u7EA6\u603B\u989D\u768416%\u6570\u503C\u79EF\u5206\u2026\uFF09\uFF0C\u65E0\u4E0A\u9650\uFF1B</p>\n      <p>4\u3001\u8865\u507F\u79EF\u5206\u672A\u4ED8\u6E05\u4EE5\u524D\u4E0D\u80FD\u518D\u6B21\u53D1\u8D77\u8BAE\u4EF7\uFF1B</p>\n      <p>5\u3001\u60A8\u7684\u8FDD\u7EA6\u5C06\u88AB\u8BA1\u5165\u201C\u8FDD\u7EA6\u6B21\u6570\u201D\uFF0C\u5E76\u5F71\u54CD\u60A8\u5728\u4E70\u9053\u7AD9\u5185\u7684\u9700\u65B9\u8BC4\u7EA7\uFF08\u4F9B\u65B9\u53EF\u67E5\u770B\uFF09\u3002</p>\n      <p>6\u3001\u4ED8\u6B3E\u65B9\u5F0F\uFF1A</p>\n      <p class=\"textIndent\">6.1    \u73B0\u8D27\uFF1A\u6B3E\u5230\u53D1\u8D27</p>\n      <p class=\"textIndent\">6.2    \u671F\u8D27\uFF1A\u5B9A\u91D1+\u6B3E\u5230\u53D1\u8D27</p>\n      <p>7\u3001\u4E3A\u4FDD\u969C\u9700\u65B9\u5404\u9879\u6743\u76CA\uFF0C\u9700\u65B9\u5C06\u4E0E\u4E70\u9053\u7B7E\u8BA2\u6700\u7EC8\u91C7\u8D2D\u5408\u540C\uFF1A</p>\n      <p class=\"textIndent\">7.1    \u60A8\u7684\u8D2D\u4E70\u4EF7\u683C\u4E0D\u53D8\uFF08\u53CA\u6240\u89C1\u7684\u62A5\u4EF7\u7AEF\u4EF7\u683C\uFF09\uFF1B</p>\n      <p class=\"textIndent\">7.2    \u4E70\u9053\u4E3A\u60A8\u96C6\u8D27\u3001\u9A8C\u8D27\u3001\u53D1\u8D27\u4EE5\u53CA\u627F\u62C5\u552E\u540E\u5DE5\u4F5C\uFF1B</p>\n      <p class=\"textIndent\">7.3    \u4E70\u9053\u89C6\u60A8\u7684\u9700\u6C42\u63D0\u4F9B\u5404\u9879\u5FC5\u8981\u7684\u6280\u672F\u652F\u6301\uFF1B</p>\n      <p class=\"text-right\">\n        <span>\u4E70\u9053\u4F20\u611F\u7F51</span>\n      </p>\n    </div>\n    <div class=\"enquiryTipsFoot\">\n      <a class=\"pull-right btn btn-red\" data-role=\"btn_agree\">\u540C\u610F</a>\n    </div>\n  </div>";
                layer.open({
                    type: 1,
                    area: '660px',
                    title: '提示',
                    content: content
                });
            }
            else {
                layer.msg(resp.Message);
            }
        });
    };
    /**
     * 添加到订单车
     * @param ProductId
     * @param QuotedPriceProductDeliveryId
     */
    MaiDaoApi.AddToOrderCart = function (ProductId, QuotedPriceProductDeliveryId, event) {
        var _this = this;
        this.Api("T.Order.AddToOrderCart", { ProductId: ProductId, QuotedPriceProductDeliveryId: QuotedPriceProductDeliveryId }, function (resp) {
            if (event) {
                var $end = $('[data-role=ordercartbox]').parent();
                _this.FlyToCart($end, event);
            }
            _this.LoadCart();
        }, function (resp) {
            layer.msg(resp.Message);
        });
    };
    MaiDaoApi.AddToQuickBuyCart = function (ProductId, Quantity, event) {
        var _this = this;
        this.Api("T.Cart.AddToQuickBuyCart", { ProductId: ProductId, Quantity: Quantity }, function (resp) {
            if (event) {
                var $end = $('[data-role=quickbuycartbox]').parent();
                _this.FlyToCart($end, event);
            }
            _this.LoadCart();
        }, function (resp) {
            layer.msg(resp.Message);
        });
    };
    /**
     * 添加到框架合同
     * @param ProductId
     */
    MaiDaoApi.AddToFrameContractCart = function (ProductId, event, success) {
        var _this = this;
        this.Api("T.FrameContract.AddToFrameContractCart", { ProductId: ProductId }, function (resp) {
            if (event) {
                var $end = $('[data-role=framecontractcartbox]').parent();
                _this.FlyToCart($end, event);
            }
            _this.LoadCart();
            if (success) {
                success();
            }
        }, function (resp) {
            layer.msg(resp.Message);
        });
    };
    MaiDaoApi.Init = function () {
        this.LoadCart();
        this.InitSearchKey();
        this.BindEvent();
        var winWidth = window.innerWidth;
        if (winWidth <= 1366) {
            var $rightFrame = $('.floating-frame');
            var $rightTop = $('.backToTop');
            $rightFrame.css('margin-left', '0');
            $rightFrame.css('right', '0');
            $rightTop.css('margin-left', '0');
            $rightTop.css('right', '0');
        }
    };
    MaiDaoApi.BindEvent = function () {
        var _this = this;
        //btn_perfectinfo
        $(document).on('click', '.infoBox [data-role=btn_perfectinfo]', function (event) {
            var trueName = $('.infoBox #info_TrueName').val();
            var enterpriseName = $('.infoBox #info_EnterpriseName').val();
            var eMail = $('.infoBox #info_EMail').val();
            var captcha = $('.infoBox #info_Captcha').val();
            var submitData = { TrueName: trueName, EnterpriseName: enterpriseName, EMail: eMail, Captcha: captcha };
            $.post('/Member/Perfect', submitData, function (resp) {
                if (resp.IsSuccess) {
                    layer.closeAll();
                    layer.msg("信息完善成功!");
                    location.reload();
                }
                else {
                    layer.msg(resp.Message);
                }
            });
            //MaiDaoApi.Api('T.M.PerfectInfoForEnquiry', submitData, (resp) => {
            //    layer.closeAll();
            //    layer.msg("信息完善成功!");
            //}, (resp) => {
            //    layer.msg(resp.Message);
            //});
        });
        $(document).on('click', '.eqBox [data-role=btn_submit_eq]', function (event) {
            var pid = $('.eqBox [data-role="productid"]').val();
            var quantity = $('.eqBox [data-role=quantity]').val();
            var deadline = $('.eqBox [data-role=deadline]').val();
            var from = $(event.currentTarget).attr('data-from');
            var submitData = { Deadline: deadline, Items: [], From: from };
            submitData.Items.push({
                ProductId: pid,
                Quantity: quantity
            });
            if (!submitData.Deadline) {
                layer.msg('询价截止日期不能为空......');
                return false;
            }
            if (submitData.Items.length == 0) {
                layer.msg('询价产品不能为空......');
                return false;
            }
            if (from == "2") {
                MaiDaoApi.Api('T.Enquiry.SendEnquiry', submitData, function (resp) {
                    layer.closeAll();
                    if (_this.IsNeedPerfectInfo()) {
                        layer.confirm('询价已发送成功,建议您完善信息!', {
                            icon: 1, btn: ['好的', '暂不完善']
                        }, function () {
                            layer.closeAll();
                            MaiDaoApi.PerfectInfo();
                        });
                    }
                    else {
                        location.href = '/Enquiry/Success?EnquiryId=' + resp.Body.EnquiryId + '&EnquiryNo=' + resp.Body.EnquiryNo;
                    }
                }, function (resp) {
                    if (resp.ErrorCode == '00101') {
                        layer.msg("请先完善企业信息！");
                    }
                    else {
                        layer.msg(resp.Message);
                    }
                });
            }
            else {
                _this.Api("T.Enquiry.AddToEnquiryCart", { ProductId: pid, Quantity: quantity }, function (resp) {
                    if (event) {
                        var $end = $('[data-role=enquirycartbox]').parent();
                        _this.FlyToCart($end, event);
                    }
                    _this.LoadCart();
                }, function (resp) {
                    layer.msg(resp.Message);
                });
            }
        });
        $(document).on('click', '[data-role=btn_show_supplierinfo]', function (event) {
            var $this = $(event.currentTarget);
            var supplierId = $this.attr('data-sid');
            _this.Api('T.Report.GetSupplierInfo', { SupplierId: supplierId }, function (resp) {
                var report = resp.Body;
                var tempHtml = "<div class=\"demanderInfo\"><h6>\u4EE3\u7406\u5546\u8BE6\u60C5</h6><div>\u4E0A\u7EBF\u65F6\u95F4\uFF1A<span>" + report.OnlineTime.substr(0, 10) + "</span></div><div>\u8BA2\u5355\u6570\uFF1A<span>" + report.OrderCount + "</span></div></div>";
                layer.tips(tempHtml, $this, {
                    tips: [2, '#333']
                });
            }, function (resp) {
                layer.msg(resp.Message);
            });
        });
        $(document).on('click', '[data-role=btn_fav]', function (event) {
            var url = window.location;
            var title = document.title;
            try {
                window.external.addFavorite(url, title);
            }
            catch (e) {
                try {
                    window.sidebar.addPanel(url, title, "");
                }
                catch (e) {
                    layer.msg("加入收藏失败，请使用Ctrl+D进行添加");
                }
            }
        });
        $(document).on('click', '[data-role=btn_send_phone]', function (event) {
            var $that = $(event.currentTarget);
            var targetPhone = $that.attr('data-target');
            if ($that.attr('disabled')) {
                return;
            }
            var sendType = $that.attr('data-type');
            if (!sendType) {
                sendType = '1';
            }
            $that.prop('disabled', true);
            if ($that.is('a')) {
                $that.html('正在发送...');
            }
            else {
                $that.val('正在发送...');
            }
            var phoneVal = $(targetPhone).val();
            ;
            $.post('/Member/SendCaptcha', { Phone: phoneVal, Type: sendType }, function (resp) {
                if (resp.IsSuccess) {
                    var waitTime = 60;
                    var timer = setInterval(function () {
                        --waitTime;
                        var tempStr = '重新发送(' + waitTime + ')';
                        if ($that.is('a')) {
                            $that.html(tempStr);
                        }
                        else {
                            $that.val(tempStr);
                        }
                        if (waitTime == 0) {
                            tempStr = '发送验证码';
                            if ($that.is('a')) {
                                $that.html(tempStr);
                            }
                            else {
                                $that.val(tempStr);
                            }
                            $that.removeAttr('disabled');
                            clearInterval(timer);
                        }
                    }, 1000);
                }
                else {
                    layer.msg(resp.Message);
                    var tempStr = '发送验证码';
                    $that.val(tempStr);
                    $that.removeAttr('disabled');
                }
            });
        });
        $(document).on('click', '[data-role=btn_send_email]', function (event) {
            var $that = $(event.currentTarget);
            var targetEMail = $that.attr('data-target');
            if ($that.attr('disabled')) {
                return;
            }
            $that.prop('disabled', true);
            if ($that.is('a')) {
                $that.html('正在发送...');
            }
            else {
                $that.val('正在发送...');
            }
            var mailVal = $(targetEMail).val();
            ;
            $.post('/Member/SendEMailCaptcha', { EMail: mailVal }, function (resp) {
                if (resp.IsSuccess) {
                    var waitTime = 60;
                    var timer = setInterval(function () {
                        --waitTime;
                        var tempStr = '重新发送(' + waitTime + ')';
                        if ($that.is('a')) {
                            $that.html(tempStr);
                        }
                        else {
                            $that.val(tempStr);
                        }
                        if (waitTime == 0) {
                            tempStr = '发送验证码';
                            if ($that.is('a')) {
                                $that.html(tempStr);
                            }
                            else {
                                $that.val(tempStr);
                            }
                            $that.removeAttr('disabled');
                            clearInterval(timer);
                        }
                    }, 1000);
                }
                else {
                    layer.msg(resp.Message);
                    var tempStr = '发送验证码';
                    $that.val(tempStr);
                    $that.removeAttr('disabled');
                }
            });
        });
        $(document).on('click', '[data-role=btn_add_enquiry]', function (event) {
            var $this = $(event.currentTarget);
            var productId = $this.attr('data-pid');
            var productModel = $this.attr('data-pmodel');
            var brandName = $this.attr('data-bname');
            var categoryName = $this.attr('data-cname');
            var quantity = $this.attr('data-quantity');
            if (!quantity) {
                quantity = 1;
            }
            MaiDaoApi.AddToEnquiryCart(productId, productModel, brandName, categoryName, quantity, event);
        });
    };
    MaiDaoApi.InitSearchKey = function () {
        var remoteProdcuts = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace('SearchKey'),
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            remote: {
                url: '/Agent/ProductTip?SearchKey=%SearchKey', wildcard: '%SearchKey'
            }
        });
        remoteProdcuts.initialize();
        $('#SearchKey').typeahead({
            hint: false,
            highlight: true,
            minLength: 1
        }, {
            name: 'Products',
            displayKey: 'ProductModel',
            source: remoteProdcuts.ttAdapter()
        })
            .bind('typeahead:select', function (ev) {
            var suggestion = arguments[1];
            location.href = '/Product/Search?SearchKey=' + suggestion.ProductModel;
        });
    };
    return MaiDaoApi;
}());
;
//# sourceMappingURL=maidaoapi.js.map