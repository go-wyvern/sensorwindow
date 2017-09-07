package models

import "github.com/jinzhu/gorm"

type Brand struct {
	ID        uint       `gorm:"primary_key" json:"id,omitempty"`
	CreatedAt *StampTime `json:"created_at,omitempty"`
	UpdatedAt *StampTime `json:"updated_at,omitempty"`
	DeletedAt *StampTime `sql:"index" json:"delted_at,omitempty"`
	Object    string     `gorm:"column:object" json:"object,omitempty"`
	Name      string     `gorm:"column:brand_name" json:"brand_name,omitempty"`
	Status    int        `gorm:"column:brand_status" json:"brand_status,omitempty"`
	Image     string     `gorm:"column:image" json:"image,omitempty"`
}

func GetBrands(is_all bool, page, per_page int, fields []string) ([]Brand, error) {
	var brands []Brand
	var err error
	var tempDb *gorm.DB = Db
	if is_all {
		if len(fields) != 0 {
			tempDb = tempDb.Select(fields)
		}
		err = tempDb.Model(Brand{}).Find(&brands).Error
	} else {
		p := NewPagination(page, per_page)
		tempDb, err := p.Paginate(tempDb.Model(Brand{}))
		if err != nil {
			return brands, err
		}
		if len(fields) != 0 {
			tempDb = tempDb.Select(fields)
		}
		err = tempDb.Model(Brand{}).Find(&brands).Error
	}
	return brands, err
}

func GetBrand(id int, fields []string) (*Brand, error) {
	var brand = new(Brand)
	var tempDb *gorm.DB = Db
	if len(fields) != 0 {
		tempDb = tempDb.Select(fields)
	}
	err := tempDb.Model(Brand{}).Where("id = ?", id).First(brand).Error
	return brand, err
}
