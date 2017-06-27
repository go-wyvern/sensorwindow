package models

import (
	"time"

	"github.com/astaxie/beego"
	"github.com/garyburd/redigo/redis"
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
	log_mode, _ := beego.AppConfig.Bool("mysql:debug")
	idle_conns, _ := beego.AppConfig.Int("mysql:idle_conns")
	max_conns, _ := beego.AppConfig.Int("mysql:max_conns")
	Db.LogMode(log_mode)
	// 设定连接池最大空闲连接数
	Db.DB().SetMaxIdleConns(idle_conns)
	// 设定连接池最大连接数
	Db.DB().SetMaxOpenConns(max_conns)
	return nil
}

func InitReids() error {
	maxIdle, _ := beego.AppConfig.Int("redis:max_idle")
	maxActive, _ := beego.AppConfig.Int("redis:max_active")
	address := beego.AppConfig.String("redis:address")
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
