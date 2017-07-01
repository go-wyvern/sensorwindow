package controllers

import (
	"github.com/astaxie/beego"
	"github.com/go-wyvern/sensorwindow/models"
)

type IndexController struct {
	beego.Controller
}

func (c *IndexController) Index() {
	brands, _ := models.GetBrands(true, 1, 10, []string{"brand_name", "image"})
	c.Data["brands"] = brands
	c.TplName = "index.html"
}
