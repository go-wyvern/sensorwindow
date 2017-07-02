/*
Category: 分类
*/
package models

import (
	"fmt"

	"github.com/jinzhu/gorm"
)

type Category struct {
	ID             uint       `gorm:"primary_key" json:"id,omitempty"`
	CreatedAt      *StampTime `json:"created_at,omitempty"`
	UpdatedAt      *StampTime `json:"updated_at,omitempty"`
	DeletedAt      *StampTime `sql:"index" json:"delted_at,omitempty"`
	ParentCategory *uint      `json:"parent_category,omitempty"`
	Name           string     `json:"name,omitempty"`
	EnglishName    string     `json:"english_name,omitempty"`
}

func GetRootCategories(is_all bool, page, per_page int, fields []string) ([]Category, error) {
	var categories []Category
	var err error
	var tempDb *gorm.DB = Db
	if is_all {
		if len(fields) != 0 {
			tempDb = tempDb.Select(fields)
		}
		err = tempDb.Model(Category{}).Where("parent_category IS NULL").Find(&categories).Error
	} else {
		p := NewPagination(page, per_page)
		tempDb, err := p.Paginate(tempDb.Model(Category{}))
		if err != nil {
			return categories, err
		}
		if len(fields) != 0 {
			tempDb = tempDb.Select(fields)
		}
		err = tempDb.Model(Category{}).Where("parent_category IS NULL").Find(&categories).Error
	}
	return categories, err
}

func GetCategories() ([]Category, error) {
	var categories []Category
	var err error
	err = Db.Model(Category{}).Where("parent_category IS NOT NULL").Find(&categories).Error
	return categories, err
}

func GetCategoriesGroup(root_categories, categories []Category) map[string][]string {
	var group = make(map[string][]string)
	var root = make(map[uint]string)
	for _, r := range root_categories {
		root[r.ID] = r.EnglishName
	}
	fmt.Println(root)
	for _, c := range categories {
		group[root[*c.ParentCategory]] = append(group[root[*c.ParentCategory]], c.Name)
	}
	return group
}
