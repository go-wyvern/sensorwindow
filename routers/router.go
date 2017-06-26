package routers

import (
	"github.com/astaxie/beego"
	"github.com/go-wyvern/sensorwindow/controllers"
)

func init() {
	beego.Router("/", &controllers.IndexController{}, "get:Index")
}
