/*
Category: 分类
*/
package models

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
	var categorys []Category
	var err error
	if is_all {
		if len(fields) != 0 {
			Db = Db.Select(fields)
		}
		err = Db.Model(Category{}).Where("parent_category IS NULL").Find(&categorys).Error
	} else {
		p := NewPagination(page, per_page)
		db, err := p.Paginate(Db.Model(Category{}))
		if err != nil {
			return categorys, err
		}
		if len(fields) != 0 {
			db = db.Select(fields)
		}
		err = db.Model(Category{}).Where("parent_category IS NULL").Find(&categorys).Error
	}
	return categorys, err
}
