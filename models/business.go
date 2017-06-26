package models

import (
	"time"

	"github.com/jinzhu/gorm"
)

type Business struct {
	gorm.Model
	User     string
	DealTime time.Time
	Amount   int
	Product  string
	Count    int
}
