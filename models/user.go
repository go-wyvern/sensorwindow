package models

import "github.com/jinzhu/gorm"

type User struct {
	gorm.Model
	UserName string
	Phone    string
	Password string
	Email    string
}

func FindUser(username string) (*User, error) {
	var user = new(User)
	err := Db.Table("user").Where("user_name = ?", username).First(user).Error
	return user, err
}
