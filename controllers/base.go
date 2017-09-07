package controllers

import (
	"github.com/astaxie/beego"
	"github.com/beego/i18n"
	"github.com/go-wyvern/sensorwindow/models"
)

type BaseController struct {
	beego.Controller
	i18n.Locale
	user    *models.User
	isLogin bool
}

func (c *BaseController) Prepare() {
	if passtoken := c.Ctx.GetCookie("passtoken"); passtoken != "" {
		uid, ok, _ := models.GetPassToken(passtoken)
		if ok {
			u, err := models.FindUserByUserID(uid)
			if err == nil {
				c.Data["user"] = u
				c.user = u
				c.isLogin = true
			}
		}
	}
	c.Layout = "layout.html"
}
