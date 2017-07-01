/// <reference path="../scripts/typings/jquery/jquery.d.ts" />
/**
 * Form表单转话成Object对象
 */
var FormToObject = (function () {
    function FormToObject() {
    }
    /**
     * 序列化 Form 表单转话成 Object 对象
     * @param form
     */
    FormToObject.Serialize = function (form) {
        var resultObj;
        var $form = $(form);
        resultObj = {};
        var formArray = $form.serializeArray();
        for (var _i = 0, formArray_1 = formArray; _i < formArray_1.length; _i++) {
            var formField = formArray_1[_i];
            resultObj[formField.name] = formField.value;
        }
        return resultObj;
    };
    return FormToObject;
}());
//# sourceMappingURL=FormToObject.js.map