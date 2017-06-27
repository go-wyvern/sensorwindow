package models

import (
	"encoding/base64"
	"strconv"

	"github.com/garyburd/redigo/redis"
	"github.com/pborman/uuid"
)

var Token_lifeTime = 1200
var Token_longlifeTime = 60 * 60 * 24 * 14
var Reset_passwordTime = 60 * 10

const (
	account_prefix = "passport:account:"
)

func NewPassToken(userid string, lifetime_type bool) (string, error) {
	var key string
	var LifeTime int
	token := uuid.New()
	pass_token := base64.StdEncoding.EncodeToString([]byte(token))
	key = account_prefix + pass_token
	if lifetime_type {
		LifeTime = Token_lifeTime
	} else {
		LifeTime = Token_longlifeTime
	}
	Rdo("RPUSH", key, userid, LifeTime)
	Rdo("EXPIRE", key, LifeTime)
	return pass_token, nil
}

func GetPassToken(pass_token string) (string, bool, int) {
	var key string
	var LifeTime int
	key = account_prefix + pass_token
	val, err := redis.Strings(Rdo("LRANGE", key, 0, -1))
	if err != nil || 2 != len(val) {
		return "", false, 0
	}
	if val[1] != "" {
		LifeTime, _ = strconv.Atoi(val[1])
	}
	Rdo("EXPIRE", key, LifeTime) //reset the timeout
	return val[0], true, LifeTime
}

func DelPassToken(pass_token string) bool {
	var key string
	key = account_prefix + pass_token
	val, err := redis.Bool(Rdo("DEL", key))
	if err != nil || false == val {
		return false
	}
	return true
}
