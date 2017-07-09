/**
 * Created by Administrator on 2017/6/27.
 */
//提交登录输入框内容
var submitLoginInput = function () {
    alert("111");
    var login_username = $("#login_username").val();
    var login_password = $("#login_password").val();
    var submit_params = {};
    submit_params["username"] = login_username;
    submit_params["password"] = login_password;
    var post_url = "/login";
    $.post(post_url,submit_params,function (data) {
        alert(data.Code);
        if(data.Code){
            window.location.href = "/login?username="+login_username;
        }
    });
};
//重置登录输入框
var resetLoginInput = function () {

};
//初始化登陆页面
var initLoginPage = function () {
    $("#login_btn").on("click",submitLoginInput);
    $("#reset_btn").on("click",resetLoginInput)
};
$(function () {
    initLoginPage();
});