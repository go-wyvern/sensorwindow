package controllers

//"github.com/jinzhu/gorm"
import (
	"github.com/go-wyvern/sensorwindow/models"
)

type BrandsController struct {
	BaseController
}

func (c *BrandsController) GetList() {
	baseResponse := new(models.BaseResponse)
	is_all, _ := c.GetBool("is_all", false)
	brands, err := models.GetBrands(is_all)
	if err != nil {
		baseResponse.Code = 1001
		baseResponse.Error = err.Error()
		baseResponse.Message = "获取品牌失败"
	} else {
		baseResponse.Code = 0
		baseResponse.Message = "获取品牌成功"
		baseResponse.Data = brands
	}
	c.Data["json"] = baseResponse
	c.ServeJSON()
}
