package main

import (
	"github.com/astaxie/beego"
	_ "github.com/go-wyvern/sensorwindow/routers"
)

func main() {
	beego.Run()
}
