package models

import (
	"github.com/jinzhu/gorm"
)

type Brand struct {
	gorm.Model
	Object string `gorm:"column:object"`
	Name   string `gorm:"column:brand_name"`
	Status int    `gorm:"column:brand_status"`
	Image  string `gorm:"column:image"`
}

func GetBrands(is_all bool) ([]Brand, error) {
	var brands []Brand
	var err error
	if is_all {
		err = Db.Model(Brand{}).Find(&brands).Error
	} else {
		err = Db.Model(Brand{}).Limit(16).Find(&brands).Error
	}
	return brands, err
}
