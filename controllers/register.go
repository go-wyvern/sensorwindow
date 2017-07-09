package controllers

import "github.com/astaxie/beego"

type RegisterController struct {
	beego.Controller
}

func (c *RegisterController) Regiter() {
	c.Layout = "layout_without_header.html"
	c.TplName = "sensor/register.html"
}
