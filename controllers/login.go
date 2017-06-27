package controllers

import (
	"github.com/astaxie/beego"
	//"github.com/jinzhu/gorm"

	//"github.com/go-wyvern/sensorwindow/models"
	"fmt"
)

type LoginController struct {
	beego.Controller
}

type LoginReturn struct {
	Code     int
	Message  string
	UserID   string
	UserName string
	Email    string
	Phone    string
}

func (c *LoginController) Login() {
	if c.Ctx.Request.Method == "GET" {
		c.TplName = "sensor/login.html"
	} else {
		fmt.Println("post~~~!!!!!!!!")
		var loginResponse = new(LoginReturn)
		user := c.GetString("username")
		password := c.GetString("password")
		fmt.Println(user, password)
		//if passtoken := c.Ctx.GetCookie("passtoken"); passtoken != "" {
		//	uid, ok, _ := models.GetPassToken(passtoken)
		//	if ok {
		//		u, err := models.FindUserByUserID(uid)
		//		if err != nil {
		//			if err != gorm.ErrRecordNotFound {
		//				loginResponse.Code = 10001
		//				loginResponse.Message = "系统错误"
		//			} else {
		//				loginResponse.Code = 10002
		//				loginResponse.Message = "用户不存在"
		//			}
		//		}
		//		loginResponse.Code = 10000
		//		loginResponse.Message = "登陆成功"
		//		loginResponse.UserName = u.UserName
		//		loginResponse.UserID = uid
		//		c.Data["json"] = loginResponse
		//		c.ServeJSON()
		//	}
		//}
		//
		//u, err := models.FindUser(user)
		//if err != nil {
		//	if err != gorm.ErrRecordNotFound {
		//		loginResponse.Code = 10001
		//		loginResponse.Message = "系统错误"
		//	} else {
		//		loginResponse.Code = 10002
		//		loginResponse.Message = "用户不存在"
		//	}
		//}
		//if u.Password != password {
		//	loginResponse.Code = 10003
		//	loginResponse.Message = "密码错误"
		//}
		loginResponse.Code = 10000
		loginResponse.Message = "登陆成功"
		loginResponse.UserName = "llllll"
		loginResponse.UserID = "kkkkkkkkk"
		c.Data["json"] = loginResponse
		c.ServeJSON()
	}
}
