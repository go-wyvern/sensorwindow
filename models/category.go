/*
Category: 分类
*/
package models

import "github.com/jinzhu/gorm"

type Category struct {
	gorm.Model
	CategoryName string `gorm:"column:category_name"`
}
