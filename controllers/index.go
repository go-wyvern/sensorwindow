package controllers

import "github.com/go-wyvern/sensorwindow/models"

type IndexController struct {
	BaseController
}

func (c *IndexController) Index() {
	brands, _ := models.GetBrands(true, 1, 10, []string{"brand_name", "image"})
	root_category, _ := models.GetRootCategories(true, 1, 10, []string{})
	categories, _ := models.GetCategories()
	leaf_category := models.GetCategoriesGroup(categories)
	c.Data["brands"] = brands
	c.Data["title"] = "传感器之窗"
	c.Data["root_category"] = root_category
	c.Data["leaf_category"] = leaf_category
	c.TplName = "index.html"
}
