package models

import (
	"database/sql/driver"
	"errors"
	"fmt"
	"math"
	"time"

	"github.com/astaxie/beego"
	"github.com/garyburd/redigo/redis"
	_ "github.com/go-sql-driver/mysql"
	"github.com/jinzhu/gorm"
)

var Db *gorm.DB
var RedisPool *redis.Pool

func InitMysql() error {
	var err error
	Db, err = gorm.Open("mysql", beego.AppConfig.String("mysql::address"))
	if err != nil {
		return err
	}
	// 设定连接池最大连接
	err = Db.DB().Ping()
	if err != nil {
		return err
	}
	// 设置数据库是否开启debug信息
	log_mode, _ := beego.AppConfig.Bool("mysql::debug")
	idle_conns, _ := beego.AppConfig.Int("mysql::idle_conns")
	max_conns, _ := beego.AppConfig.Int("mysql::max_conns")
	Db.LogMode(log_mode)
	// 设定连接池最大空闲连接数
	Db.DB().SetMaxIdleConns(idle_conns)
	// 设定连接池最大连接数
	Db.DB().SetMaxOpenConns(max_conns)
	return nil
}

func InitReids() error {
	maxIdle, _ := beego.AppConfig.Int("redis::max_idle")
	maxActive, _ := beego.AppConfig.Int("redis::max_active")
	address := beego.AppConfig.String("redis::address")

	RedisPool = &redis.Pool{
		// 最大空闲连接
		MaxIdle: maxIdle,
		// 最大活跃连接
		MaxActive: maxActive,
		// 超时时间
		IdleTimeout: 30 * time.Second,
		// 连接创建函数
		Dial: func() (redis.Conn, error) {
			conn, err := redis.Dial("tcp", address, redis.DialConnectTimeout(10*time.Second))
			if err != nil {
				return nil, err
			}
			return conn, err
		},
		// 连接测试函数
		TestOnBorrow: func(c redis.Conn, t time.Time) error {
			_, err := c.Do("PING")
			return err
		},
	}
	c := RedisPool.Get()
	defer c.Close()
	err := RedisPool.TestOnBorrow(c, time.Now())
	if err != nil {
		panic(err)
	}
	return err
}

func Rdo(commandName string, args ...interface{}) (reply interface{}, err error) {
	c := RedisPool.Get()
	defer c.Close()

	return c.Do(commandName, args...)
}

type Pagination struct {
	PageSize   int `json:"page_size"`
	PageNumber int `json:"page_number"`
	TotalPage  int `json:"total_page"`
	Count      int `json:"count"`
}

type BaseResponse struct {
	Code       int         `json:"code"`    // 业务处理状态
	Message    string      `json:"message"` // 业务处理消息
	Pagination *Pagination `json:"pagination,omitempty"`
	Data       interface{} `json:"data"`            // 业务处理返回结果
	Error      string      `json:"error,omitempty"` // 错误信息
}

func NewPagination(page, page_size int) *Pagination {
	p := new(Pagination)
	p.PageSize = page_size
	p.PageNumber = page
	return p
}

func (p *Pagination) Paginate(db *gorm.DB) (*gorm.DB, error) {
	err := db.Count(&p.Count).Error
	if err != nil {
		return nil, err
	}
	offset := (p.PageNumber - 1) * p.PageSize
	p.TotalPage = int(math.Ceil(float64(p.Count) / float64(p.PageSize))) //page总数
	if p.PageNumber > p.TotalPage {
		p.PageNumber = p.TotalPage
	}
	if p.PageNumber <= 0 {
		p.PageNumber = 1
	}
	TempDb := db.Limit(p.PageSize).Offset(offset)
	return TempDb, nil
}

// StampTime 时间输出可变类型
type StampTime struct {
	/*值为1为格式化为数字 值为0为格式化为StampTime*/
	JosnType int8
	Data     int64
}

// MarshalJSON 序列化数据时根据调用的
func (t *StampTime) MarshalJSON() ([]byte, error) {
	if t.JosnType == 0 {
		return []byte(`"` + time.Unix(t.Data, 0).Format("2006-01-02 15:04:05") + `"`), nil
	}
	return []byte(fmt.Sprint(t.Data)), nil
}

// Value 插入 sql 数据时调用
func (t StampTime) Value() (driver.Value, error) {
	if t.JosnType == 0 {
		return driver.Value(time.Unix(t.Data, 0).Format("2006-01-02 15:04:05")), nil
	}
	return []byte(fmt.Sprint(t.Data)), nil
}

// Scan 查询数据库时调用
func (t *StampTime) Scan(value interface{}) error {
	timeParsed, ok := value.(time.Time)
	if !ok {
		return errors.New("Scan source is not time.Time")
	}
	t.Data = timeParsed.Unix()
	if t.Data < 0 {
		t.Data = 0
	}
	return nil
}
