package controllers

import (
	"github.com/astaxie/beego"
	"github.com/jinzhu/gorm"

	"github.com/go-wyvern/sensorwindow/models"
)

type LoginController struct {
	beego.Controller
}

type LoginReturn struct {
	Code    int
	Message string
}

func (c *LoginController) Login() {
	sess, _ := globalSessions.SessionStart(c.Ctx.ResponseWriter.ResponseWriter, c.Ctx.Request)
	defer sess.SessionRelease(c.Ctx.ResponseWriter.ResponseWriter)

	if c.Ctx.Request.Method == "GET" {
		c.TplName = "sensor/login.html"
	} else {
		var loginResponse = new(LoginReturn)
		user := c.GetString("username")
		password := c.GetString("password")
		token := sess.Get(user)
		if passtoken := c.Ctx.GetCookie("passtoken"); passtoken != "" {
			if token.(string) == passtoken {
				loginResponse.Code = 10000
				loginResponse.Message = "登陆成功"
				c.Data["json"] = loginResponse
				c.ServeJSON()
			}
		}

		u, err := models.FindUser(user)
		if err != nil {
			if err != gorm.ErrRecordNotFound {
				loginResponse.Code = 10001
				loginResponse.Message = "系统错误"
			} else {
				loginResponse.Code = 10002
				loginResponse.Message = "用户不存在"
			}
		}
		if u.Password != password {
			loginResponse.Code = 10003
			loginResponse.Message = "密码错误"
		}
		loginResponse.Code = 10000
		loginResponse.Message = "登陆成功"
		sess.Set("username", c.Ctx.Request.Form["username"])
		c.Data["json"] = loginResponse
		c.ServeJSON()
	}
}
