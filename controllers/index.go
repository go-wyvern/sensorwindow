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
	root_category, _ := models.GetRootCategories(true, 1, 10, []string{"name", "english_name"})
	c.Data["brands"] = brands
	c.Data["root_category"] = root_category
	// c.Data["leaf_category"] = leaf_category
	c.TplName = "index.html"
}
