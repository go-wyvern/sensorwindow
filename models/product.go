package models

import (
	"fmt"

	"github.com/jinzhu/gorm"
)

type Product struct {
	ID           uint       `gorm:"primary_key" json:"id,omitempty"`
	CreatedAt    *StampTime `json:"created_at,omitempty"`
	UpdatedAt    *StampTime `json:"updated_at,omitempty"`
	DeletedAt    *StampTime `sql:"index" json:"delted_at,omitempty"`
	ProductName  string     `json:"-"`
	Description  string     `json:"-"`
	BrandID      uint       `json:"-"`
	CategoryID   uint       `json:"-"`
	Image        string     `json:"image,omitempty"`
	BrandName    string     `sql:"-" json:"-"`
	CategoryName string     `sql:"-" json:"-"`
	SwinCaption  Caption    `sql:"-" json:"caption_list"`
	// Store         int
	// StartQuantity int
	// Amount        int
	// CategoryID    uint
	// SubCategoryID uint
}

type Caption struct {
	ProductName  string `json:"product_name"`
	Description  string `json:"description,omitempty"`
	BrandName    string `json:"brand_name"`
	CategoryName string `json:"category_name"`
}

func GetProducts(p *Pagination, brand_id int, category_id []uint, fields []string) ([]Product, error) {
	var products []Product
	var err error
	var tempDb *gorm.DB = Db.Model(Product{})

	if len(fields) != 0 {
		tempDb = tempDb.Select(fields)
	}
	if brand_id != 0 {
		tempDb = tempDb.Where("brand_id = ?", brand_id)
	}
	if len(category_id) != 0 {
		tempDb = tempDb.Where("category_id in (?)", category_id)
	}
	tempDb, err = p.Paginate(tempDb)
	if err != nil {
		return nil, err
	}
	err = tempDb.Find(&products).Error
	if err == nil {
		for i, p := range products {
			brand, err := GetBrand(int(p.BrandID), []string{"brand_name"})
			if err == nil {
				p.BrandName = brand.Name
			}
			category, err := GetCategory(int(p.CategoryID), []string{"name"})
			if err == nil {
				p.CategoryName = category.Name
			}
			products[i].SwinCaption = Caption{
				ProductName:  p.ProductName,
				Description:  p.Description,
				CategoryName: p.CategoryName,
				BrandName:    p.BrandName,
			}
			fmt.Println(p.SwinCaption)
		}
	}
	return products, err
}
