package controllers

import "github.com/go-wyvern/sensorwindow/models"

type SearchController struct {
	BaseController
}

func (c *SearchController) Search() {
	brand_id, _ := c.GetInt("brand_id")
	category_id, _ := c.GetInt("category_id")
	page, _ := c.GetInt("page", 1)
	per_page, _ := c.GetInt("per_page", 10)

	category_ids, _ := models.GetCategoryIDs(category_id)

	root_category, _ := models.GetRootCategories(true, 1, 10, []string{})
	categories, _ := models.GetCategories()
	leaf_category := models.GetCategoriesGroup(categories)
	if brand_id > 0 {
		chech_brand, _ := models.GetBrand(brand_id, []string{"id", "brand_name"})
		c.Data["chech_brand"] = chech_brand
	}
	pagination := models.NewPagination(page, per_page)
	product, _ := models.GetProducts(pagination, brand_id, category_ids, []string{"id", "product_name", "brand_id", "category_id", "image"})
	brands, _ := models.GetBrands(true, 1, 10, []string{"id", "brand_name"})
	c.Data["brands"] = brands
	c.Data["title"] = "传感器搜索"
	c.Data["pagination"] = pagination
	c.Data["product"] = product
	c.Data["root_category"] = root_category
	c.Data["leaf_category"] = leaf_category
	c.TplName = "search.html"
}
