package routers

import (
	"github.com/astaxie/beego"
	"github.com/go-wyvern/sensor-window/controllers"
)

func init() {
	beego.Router("/", &controllers.IndexController{}, "get:Index")
}
