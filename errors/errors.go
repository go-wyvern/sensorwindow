package errors

import "fmt"

type SensorError struct {
	Code    int    `json:"code"`
	Message string `json:"message"`
	Err     error  `json:"error,omitempty"`
}

func (c *SensorError) Error() string {
	return fmt.Sprintf("%s,%v", c.Message, c.Err)
}

var Success = &SensorError{
	Code:    0,
	Message: "操作成功",
}

var ErrDB = &SensorError{
	Code:    10001,
	Message: "系统异常",
}

var ErrPassword = &SensorError{
	Code:    10002,
	Message: "用户密码错误",
}

var ErrExistUser = &SensorError{
	Code:    10003,
	Message: "用户名已存在",
}

var ErrExistEmail = &SensorError{
	Code:    10004,
	Message: "该邮箱已被注册",
}

var ErrExistPhone = &SensorError{
	Code:    10005,
	Message: "该手机号已被注册",
}

var ErrComfirmPassword = &SensorError{
	Code:    10006,
	Message: "两次密码输入不一致",
}

var ErrNotExistUser = &SensorError{
	Code:    10007,
	Message: "用户不存在",
}
