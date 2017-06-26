package models

import "github.com/jinzhu/gorm"

type Product struct {
	gorm.Model
	ProductName   string
	Store         int
	StartQuantity int
	Description   string
	Amount        int
	CategoryID    uint
	SubCategoryID uint
}
