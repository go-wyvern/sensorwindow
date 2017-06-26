package controllers

import "github.com/astaxie/beego"

type LogoutController struct {
	beego.Controller
}

func (c *LogoutController) Logout() {
	sess, _ := globalSessions.SessionStart(c.Ctx.ResponseWriter.ResponseWriter, c.Ctx.Request)
	sess.Delete("")
}
