package controllers

import (
	"fmt"

	"github.com/go-wyvern/sensorwindow/models"
)

type SearchController struct {
	BaseController
}

type BreadCrumb struct {
	Url    string `json:"url"`
	Search string `json:"-"`
	Name   string `json:"name"`
}

func (c *SearchController) Search() {
	var bread_crumb []BreadCrumb
	bread_crumb = append(bread_crumb, BreadCrumb{
		Url:    "/search",
		Search: "/search",
		Name:   "所有产品",
	})
	brand_id, _ := c.GetInt("brand_id")
	category_id, _ := c.GetInt("category_id")
	page, _ := c.GetInt("page", 1)
	per_page, _ := c.GetInt("per_page", 10)

	category_ids, _ := models.GetCategoryIDs(category_id)

	root_category, _ := models.GetRootCategories(true, 1, 10, []string{})
	categories, _ := models.GetCategories()
	leaf_category := models.GetCategoriesGroup(categories)
	if len(category_ids) > 0 {
		for i := len(category_ids); i > 0; i-- {
			c, _ := models.GetCategory(int(category_ids[i-1]), []string{"id", "name"})
			bread_crumb = append(bread_crumb, BreadCrumb{
				Url:    bread_crumb[len(bread_crumb)-1].Search,
				Search: fmt.Sprintf("/search?category_id=%d", category_ids[i-1]),
				Name:   c.Name,
			})
		}
	}
	if brand_id > 0 {
		chech_brand, _ := models.GetBrand(brand_id, []string{"id", "brand_name"})
		bread_crumb = append(bread_crumb, BreadCrumb{
			Url:    bread_crumb[len(bread_crumb)-1].Search,
			Search: fmt.Sprintf("/search?brand_id=%d", chech_brand.ID),
			Name:   chech_brand.Name,
		})
		c.Data["chech_brand"] = chech_brand
	}
	pagination := models.NewPagination(page, per_page)
	product, _ := models.GetProducts(pagination, brand_id, category_ids, []string{"id", "product_name", "brand_id", "category_id", "image"})
	brands, _ := models.GetBrands(true, 1, 10, []string{"id", "brand_name"})
	c.Data["bread_crumb"] = bread_crumb
	c.Data["brands"] = brands
	c.Data["title"] = "传感器搜索"
	c.Data["pagination"] = pagination
	c.Data["product"] = product
	c.Data["root_category"] = root_category
	c.Data["leaf_category"] = leaf_category
	c.TplName = "search.html"
}
