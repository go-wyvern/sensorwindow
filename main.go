package main

import (
	"github.com/astaxie/beego"
	"github.com/go-wyvern/sensorwindow/models"
	_ "github.com/go-wyvern/sensorwindow/routers"
)

func main() {
	beego.SetStaticPath("/statics", "statics")
	beego.Run()
}

func init() {
	err := models.InitMysql()
	if err != nil {
		panic(err)
	}

	err = models.InitReids()
	if err != nil {
		panic(err)
	}
}
