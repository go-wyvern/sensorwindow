package controllers

import "github.com/astaxie/beego"

type RegisterController struct {
	beego.Controller
}

func (c *RegisterController) Regiter() {
	c.Data["title"] = "注册"
	c.Layout = "layout_without_header.html"
	c.TplName = "sensor/register.html"
}
