/**
 * Created by Administrator on 2017/6/27.
 */
//提交登录输入框内容
var submitLoginInput = function () {
    var login_username = $("#login_username").val();
    var login_password = $("#login_password").val();
    var submit_params = {};
    submit_params["user"] = login_username;
    submit_params["password"] = login_password;
    var post_url = "/login";
    $.post(post_url,submit_params,function (data) {
        console.log("post.............")
        if(data.code!=0){
            alert(data.message)
        }else{
            window.location.href="/"
        }
    });
};
//重置登录输入框
var resetLoginInput = function () {
    $("#login_form .form-group input").val("");
};
//初始化登陆页面
var initLoginPage = function () {
    $("#login_btn").on("click",submitLoginInput);
    $("#reset_btn").on("click",resetLoginInput)
};
$(function () {
    initLoginPage();
});