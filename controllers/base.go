package controllers

import (
	"github.com/astaxie/beego"
	"github.com/beego/i18n"
	"github.com/go-wyvern/sensorwindow/models"
)

type BaseController struct {
	beego.Controller
	i18n.Locale
	user    models.User
	isLogin bool
}

func (c *BaseController) Prepare() {
	// fmt.Println("-----------")
}
