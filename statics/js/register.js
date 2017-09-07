/**
 *
 * Created by liqian on 9/7/17.
 */
//重置注册form
var resetRegisterForm = function(){
    $("#register_form .form-group input").val("");
};
//提交注册数据
var submitRegisterForm = function(){
    var username = $("#username").val();
    var email = $("#email").val();
    var phonenum = $("#phonenum").val();
    var verifycode = $("#verifycode").val();
    var password = $("#password").val();
    var confirm_password = $("#confirm_password").val();
    var firm_name = $("#firm_name").val();
    var post_url = "/register";
    if(password != confirm_password){
        $("#confirm_password_fg").addClass("has-error");
    }else{
        var submit_params = {};
        submit_params["username"] = username;
        submit_params["email"] = email;
        submit_params["phone"] = phonenum;
        submit_params["verifycode"] = verifycode;
        submit_params["password"] = password;
        submit_params["confirm_password"] = confirm_password;
        submit_params["company"] = firm_name;
        $.post(post_url,submit_params,function(data){
            if(data.code==0){
                alert("注册成功，点击确定跳转到登陆页面")
                window.location.href="/login"
            }else{
                alert(data.message)
            }
        })
    }
};
//
$(function(){
    $("#register_btn").on("click", submitRegisterForm);
    $("#reset_btn").on("click", resetRegisterForm);
});
