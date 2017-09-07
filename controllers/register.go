package controllers

import (
	"fmt"

	"github.com/astaxie/beego"
	"github.com/go-wyvern/sensorwindow/errors"
	"github.com/go-wyvern/sensorwindow/models"
	"github.com/go-wyvern/sensorwindow/utils"

	"github.com/jinzhu/gorm"
	"github.com/rs/xid"
)

type RegisterController struct {
	beego.Controller
}

func (c *RegisterController) Regiter() {
	if c.Ctx.Request.Method == "GET" {
		c.Data["title"] = "注册"
		c.Layout = "layout_without_header.html"
		c.TplName = "sensor/register.html"
	} else {
		username := c.GetString("username")
		email := c.GetString("email")
		phone := c.GetString("phone")
		password := c.GetString("password")
		confirm_password := c.GetString("confirm_password")
		fmt.Println(username, email, phone, password, confirm_password)
		if password != confirm_password {
			c.Data["json"] = errors.ErrComfirmPassword
			c.ServeJSON()
			return
		}
		company := c.GetString("company")
		user, err := models.FindUser(username, email, phone, company)
		if err != nil {
			if err == gorm.ErrRecordNotFound {
				// 注册
				u := new(models.User)
				u.UserID = xid.New().String()
				u.UserName = username
				u.Email = email
				u.Phone = phone
				u.Password = utils.Md5(password)
				err = u.Create()
				if err != nil {
					c.Data["json"] = errors.ErrDB
					c.ServeJSON()
					return
				}
				resp := map[string]interface{}{
					"code":    0,
					"message": "注册成功",
					"data":    u,
				}
				c.Data["json"] = resp
				c.ServeJSON()
				return
			} else {
				c.Data["json"] = errors.ErrDB
				c.ServeJSON()
				return
			}
		} else {
			if user.UserName == username {
				c.Data["json"] = errors.ErrExistUser
				c.ServeJSON()
				return
			}
			if user.Email == email {
				c.Data["json"] = errors.ErrExistEmail
				c.ServeJSON()
				return
			}
			if user.Phone == phone {
				c.Data["json"] = errors.ErrExistPhone
				c.ServeJSON()
				return
			}
		}

	}
}
