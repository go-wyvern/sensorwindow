/*
Category: 分类
*/
package models

import "github.com/jinzhu/gorm"

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

func GetCategoriesGroup(categories []Category) map[uint][]Category {
	var group = make(map[uint][]Category)

	for _, c := range categories {
		group[*c.ParentCategory] = append(group[*c.ParentCategory], c)
	}
	return group
}

func GetCategory(id int, fields []string) (*Category, error) {
	var c = new(Category)
	var tempDb *gorm.DB = Db
	if len(fields) != 0 {
		tempDb = tempDb.Select(fields)
	}
	err := tempDb.Model(Category{}).Where("id = ?", id).First(c).Error
	return c, err
}

func GetCategoryIDs(id int) ([]uint, error) {
	var ids []uint
	if id == 0 {
		return ids, nil
	}
	ids = append(ids, uint(id))
	c, err := GetCategory(id, []string{"id", "parent_category"})
	if err != nil {
		return nil, err
	}
	if c.ParentCategory == nil {
		return ids, nil
	} else {
		new_ids, err := GetCategoryIDs(int(*c.ParentCategory))
		if err != nil {
			return nil, err
		}
		return append(ids, new_ids...), nil
	}

}
