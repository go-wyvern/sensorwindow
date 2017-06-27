package controllers

import (
	"github.com/astaxie/beego"
	"github.com/go-wyvern/sensorwindow/models"
)

type LogoutController struct {
	beego.Controller
}

func (c *LogoutController) Logout() {
	if passtoken := c.Ctx.GetCookie("passtoken"); passtoken != "" {
		models.DelPassToken(passtoken)
	}

}
