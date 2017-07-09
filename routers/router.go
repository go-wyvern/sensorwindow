package routers

import (
	"github.com/astaxie/beego"
	"github.com/go-wyvern/sensorwindow/controllers"
)

func init() {
	beego.Router("/", &controllers.IndexController{}, "get:Index")
	beego.Router("/login", &controllers.LoginController{}, "get,post:Login")
	beego.Router("/logout", &controllers.LogoutController{}, "get,post:Logout")
	beego.Router("/brands", &controllers.BrandsController{}, "get:GetList")
	beego.Router("/search", &controllers.SearchController{}, "get:Search")
}
