package models

import "github.com/jinzhu/gorm"

type User struct {
	gorm.Model
	UserID   string `gorm:"column:user_id"`
	UserName string `gorm:"column:user_name"`
	Phone    string `gorm:"column:phone"`
	Password string `gorm:"column:password"`
	Email    string `gorm:"column:email"`
	Company  string `gorm:"column:company"`
	// Balance  Balance `sql:"-"`
}

func FindUser(username, email, phone, company string) (*User, error) {
	var db *gorm.DB
	var user = new(User)
	db = Db.Model(User{}).Where("user_name = ?", username)
	if email != "" {
		db = db.Or("email = ?", email)
	}
	if phone != "" {
		db = db.Or("phone = ?", phone)
	}
	if company != "" {
		db = db.Or("company = ?", company)
	}
	err := db.First(user).Error
	return user, err
}

func FindUserByUserID(user_id string) (*User, error) {
	var user = new(User)
	err := Db.Model(User{}).Where("user_id = ?", user_id).First(user).Error
	return user, err
}

func (c *User) Create() error {
	return Db.Model(User{}).Create(c).Error
}
