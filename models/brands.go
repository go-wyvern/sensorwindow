package models

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
	if is_all {
		if len(fields) != 0 {
			Db = Db.Select(fields)
		}
		err = Db.Model(Brand{}).Find(&brands).Error
	} else {
		p := NewPagination(page, per_page)
		db, err := p.Paginate(Db.Model(Brand{}))
		if err != nil {
			return brands, err
		}
		if len(fields) != 0 {
			db = db.Select(fields)
		}
		err = db.Model(Brand{}).Find(&brands).Error
	}
	return brands, err
}
