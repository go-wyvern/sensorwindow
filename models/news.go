package models

import "github.com/jinzhu/gorm"

type News struct {
	gorm.Model
	Title   string `gorm:"column:title"`
	Content string `gorm:"column:content"`
}
