package controllers

import (
	"github.com/astaxie/beego"
	"github.com/go-wyvern/sensorwindow/errors"
	"github.com/go-wyvern/sensorwindow/models"
	"github.com/go-wyvern/sensorwindow/utils"
	"github.com/jinzhu/gorm"
	//"github.com/jinzhu/gorm"

	//"github.com/go-wyvern/sensorwindow/models"
	"fmt"
)

type LoginController struct {
	beego.Controller
}

type LoginReturn struct {
	Code     int    `json:"code"`
	Message  string `json:"message"`
	UserID   string `json:"user_id,omitempty"`
	UserName string `json:"user_name,omitempty"`
	Email    string `json:"email,omitempty"`
	Phone    string `json:"phone,emitempty"`
}

func (c *LoginController) Login() {
	if c.Ctx.Request.Method == "GET" {
		c.Data["title"] = "登陆"
		c.Layout = "layout_without_header.html"
		c.TplName = "sensor/login.html"
	} else {
		var loginResponse = new(LoginReturn)
		user := c.GetString("user")
		password := c.GetString("password")
		fmt.Println(user, password)
		if passtoken := c.Ctx.GetCookie("passtoken"); passtoken != "" {
			uid, ok, _ := models.GetPassToken(passtoken)
			if ok {
				u, err := models.FindUserByUserID(uid)
				if err != nil {
					if err != gorm.ErrRecordNotFound {
						loginResponse.Code = errors.ErrDB.Code
						loginResponse.Message = errors.ErrDB.Message
					} else {
						loginResponse.Code = errors.ErrNotExistUser.Code
						loginResponse.Message = errors.ErrNotExistUser.Message
					}
				}
				loginResponse.Code = 0
				loginResponse.Message = "登陆成功"
				loginResponse.UserName = u.UserName
				loginResponse.Phone = u.Phone
				loginResponse.Email = u.Email
				loginResponse.UserID = uid
				c.Data["json"] = loginResponse
				c.ServeJSON()
				return
			}
		}

		u, err := models.FindUser(user, user, user, "")
		if err != nil {
			if err != gorm.ErrRecordNotFound {
				loginResponse.Code = errors.ErrDB.Code
				loginResponse.Message = errors.ErrDB.Message
			} else {
				loginResponse.Code = errors.ErrNotExistUser.Code
				loginResponse.Message = errors.ErrNotExistUser.Message
			}
			c.Data["json"] = loginResponse
			c.ServeJSON()
			return
		}
		if u.Password != utils.Md5(password) {
			loginResponse.Code = errors.ErrPassword.Code
			loginResponse.Message = errors.ErrPassword.Message
			c.Data["json"] = loginResponse
			c.ServeJSON()
			return
		}
		loginResponse.Code = 0
		loginResponse.Message = "登陆成功"
		loginResponse.UserName = u.UserName
		loginResponse.Phone = u.Phone
		loginResponse.Email = u.Email
		loginResponse.UserID = u.UserID
		passtoken, err := models.NewPassToken(u.UserID, false)
		if err == nil {
			c.Ctx.SetCookie("passtoken", passtoken)
		}
		c.Data["json"] = loginResponse
		c.ServeJSON()
	}
}
