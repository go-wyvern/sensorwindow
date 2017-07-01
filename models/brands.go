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

func GetBrands(is_all bool, page, per_page int) ([]Brand, error) {
	var brands []Brand
	var err error
	if is_all {
		err = Db.Model(Brand{}).Find(&brands).Error
	} else {
		p := NewPagination(page, per_page)
		db, err := p.Paginate(Db.Model(Brand{}))
		if err != nil {
			return brands, err
		}
		err = db.Model(Brand{}).Find(&brands).Error
	}
	return brands, err
}
