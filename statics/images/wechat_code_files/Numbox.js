/*!
 * Numbox
 * Code By Ahoo Wang
 * Date 2016-05-10
 * Demo: $('[data-numbox]').numbox();
 */
/// <reference path="../scripts/typings/jquery/jquery.d.ts" />
var Numbox = (function () {
    function Numbox(wrapper, option) {
        if (option === void 0) { option = { min: 1, max: 999999, step: 1 }; }
        this.wrapper = wrapper;
        option.step = option.step || 1;
        option.min = option.min || 1;
        option.max = option.max || 999999;
        this.option = option;
        this.OnMax = option.OnMax;
        this.OnMin = option.OnMin;
        this.Init();
    }
    /**
     * 初始化Numbox
     */
    Numbox.prototype.Init = function () {
        this.$input = $('[data-numbox-input]', this.wrapper);
        var inputVal = this.$input.val();
        if (inputVal == '') {
            this.$input.val(this.option.min);
        }
        this.$plus = $('[data-numbox-plus]', this.wrapper);
        this.$minus = $('[data-numbox-minus]', this.wrapper);
        this.BindEvent();
    };
    /**
     * 绑定事件
     */
    Numbox.prototype.BindEvent = function () {
        var that = this;
        that.$plus.on('click', function () {
            that.Plus();
        });
        that.$minus.on('click', function () {
            that.Minus();
        });
        that.$input.on('change', function () {
            var inputVal = parseInt(that.$input.val());
            if (isNaN(inputVal)) {
                that.$input.val(that.option.min);
            }
            if (isNaN(that.$input.val())) {
                that.$input.val(inputVal);
            }
            if (inputVal > that.option.max) {
                that.$input.val(that.option.max);
                if (that.OnMax) {
                    that.OnMax(that.option, this);
                }
            }
            if (inputVal < that.option.min) {
                that.$input.val(that.option.min);
                if (that.OnMin) {
                    that.OnMin(that.option, this);
                }
            }
        });
    };
    /**
     * 加
     */
    Numbox.prototype.Plus = function () {
        var that = this;
        var inputVal = that.$input.val();
        inputVal = parseInt(inputVal) + that.option.step;
        that.$input.val(inputVal);
        that.$input.val(inputVal).trigger('change');
    };
    /**
     * 减
     */
    Numbox.prototype.Minus = function () {
        var that = this;
        var inputVal = that.$input.val();
        inputVal = parseInt(inputVal) - that.option.step;
        that.$input.val(inputVal).trigger('change');
    };
    return Numbox;
}());
/**
* jQuery 扩展函数 numbox
*/
$.fn.numbox = function (option) {
    var defaultOption = { min: 1, max: 9999999, step: 1 };
    option = option || defaultOption;
    var instanceArray = [];
    //遍历选择的元素
    this.each(function (i, element) {
        var _option = $.extend({}, option);
        if (element.numbox) {
            return;
        }
        var eleOptionStr = $(element).attr('data-numbox-option');
        if (eleOptionStr) {
            var eleOption = JSON.parse(eleOptionStr);
            _option = $.extend(_option, eleOption);
        }
        element.numbox = new Numbox(element, _option);
    });
    return this;
};
//# sourceMappingURL=Numbox.js.map