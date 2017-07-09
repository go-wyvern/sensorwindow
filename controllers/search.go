package controllers

import (
	"github.com/astaxie/beego"
)

type SearchController struct {
	beego.Controller
}

func (c *SearchController) Search() {
	c.Layout = "layout.html"
	c.TplName = "search.html"
}