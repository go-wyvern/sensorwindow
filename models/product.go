package models

type Product struct {
	ID            uint       `gorm:"primary_key" json:"id,omitempty"`
	CreatedAt     *StampTime `json:"created_at,omitempty"`
	UpdatedAt     *StampTime `json:"updated_at,omitempty"`
	DeletedAt     *StampTime `sql:"index" json:"delted_at,omitempty"`
	ProductName   string
	Store         int
	StartQuantity int
	Description   string
	Amount        int
	CategoryID    uint
	SubCategoryID uint
}
