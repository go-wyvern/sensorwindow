package models

// import (
// 	"center_system/nc-keycenter/models/redis_op"
// 	"center_system/nc-keycenter/models/tokens"
// 	"crypto/sha256"
// 	"encoding/base64"
// 	"fmt"
// 	"strconv"
// 	"strings"
// 	"time"

// 	"code.google.com/p/go-uuid/uuid"
// 	"github.com/astaxie/beego"
// 	"github.com/garyburd/redigo/redis"
// 	"newrocktech.com/logger"
// )

// /* redis op */
// var rp *redis.Pool

// func rInit(conninfo string) {
// 	dialFunc := func() (c redis.Conn, err error) {
// 		c, err = redis.Dial("tcp", conninfo)
// 		return
// 	}
// 	// initialize a new pool
// 	rp = &redis.Pool{
// 		MaxIdle:     3,
// 		IdleTimeout: 1200 * time.Second,
// 		Dial:        dialFunc,
// 	}
// }

// func Rdo(commandName string, args ...interface{}) (reply interface{}, err error) {
// 	c := rp.Get()
// 	defer c.Close()

// 	return c.Do(commandName, args...)
// }

// /* token op */

// var Token_lifeTime = 1200
// var Token_longlifeTime = 60 * 60 * 24 * 14
// var Reset_passwordTime = 60 * 10

// const (
// 	account_prefix = "passport:account:"
// 	server_prefix  = "passport:server:"
// )

// const (
// 	resetpwd_prefix = "resetpassword:"
// )

// func NewResetpwdId(userid string) (string, error) {
// 	var key string
// 	var LifeTime int
// 	id := uuid.New()
// 	LifeTime = Reset_passwordTime
// 	resetid := base64.StdEncoding.EncodeToString([]byte(id))
// 	key = resetpwd_prefix + resetid
// 	Rdo("SET", key, userid, "EX", LifeTime)
// 	return resetid, nil
// }

// func GetResetId(resetid string) (string, bool) {
// 	var key string
// 	key = resetpwd_prefix + resetid
// 	val, err := redis.String(Rdo("GET", key))
// 	if err != nil || "" == val {
// 		return "", false
// 	}
// 	Rdo("EXPIRE", key, Reset_passwordTime)
// 	return val, true
// }

// func DelResetId(resetid string) bool {
// 	var key string
// 	key = resetpwd_prefix + resetid
// 	val, err := redis.Bool(Rdo("DEL", key))
// 	if err != nil || false == val {
// 		return false
// 	}
// 	return true
// }

// func NewPassToken(userid string, lifetime_type bool) (string, error) {
// 	var key string
// 	var LifeTime int
// 	token := uuid.New()
// 	pass_token := base64.StdEncoding.EncodeToString([]byte(token))
// 	key = account_prefix + pass_token
// 	if lifetime_type {
// 		LifeTime = Token_lifeTime
// 	} else {
// 		LifeTime = Token_longlifeTime
// 	}
// 	Rdo("RPUSH", key, userid, LifeTime)
// 	Rdo("EXPIRE", key, LifeTime)
// 	// Rdo("EXPIRE", key, Token_lifeTime)
// 	return pass_token, nil
// }

// func GetPassToken(pass_token string) (string, bool, int) {
// 	var key string
// 	var LifeTime int
// 	key = account_prefix + pass_token
// 	val, err := redis.Strings(Rdo("LRANGE", key, 0, -1))
// 	if err != nil || 2 != len(val) {
// 		return "", false, 0
// 	}
// 	if val[1] != "" {
// 		LifeTime, _ = strconv.Atoi(val[1])
// 	}
// 	Rdo("EXPIRE", key, LifeTime) //reset the timeout
// 	return val[0], true, LifeTime
// }

// func DelPassToken(pass_token string) bool {
// 	var key string
// 	key = account_prefix + pass_token
// 	val, err := redis.Bool(Rdo("DEL", key))
// 	if err != nil || false == val {
// 		return false
// 	}
// 	return true
// }

// func GenerateToken() (token string) {
// 	token = uuid.New()
// 	token = base64.StdEncoding.EncodeToString([]byte(token))
// 	return
// }

// func NewServiceToken(userid, pass_token string, lifetime_type bool) (string, error) {
// 	var key string
// 	var LifeTime int
// 	new_token := &tokens.TokenInfo{
// 		Title:         "auto generate",
// 		Scopes:        "_system:user",
// 		Authorizer_id: userid,
// 		Grantee_id:    userid,
// 		Created_at:    time.Now(),
// 	}
// 	new_token.Token = GenerateToken()

// 	if lifetime_type {
// 		LifeTime = Token_lifeTime
// 	} else {
// 		LifeTime = Token_longlifeTime
// 	}
// 	key = "tinfo:" + new_token.Token
// 	logger.FDEBUG("Auto SaveTokenInfo %s scope %s", key, new_token.Scopes)
// 	d, _ := redis_op.Encode("tokeninfo", new_token)
// 	redis_op.Rdo("HSET", key, "tokeninfo", string(d))
// 	redis_op.Rdo("HSET", key, "pass_token", pass_token)
// 	redis_op.Rdo("HSET", key, "life_time", LifeTime)
// 	redis_op.Rdo("EXPIRE", key, LifeTime)

// 	return new_token.Token, nil
// }

// /*return userid,pass_token,bool*/
// func GetServiceToken(serv_token string) (string, string, bool, int) {
// 	var key, pass_token string
// 	var LifeTime int
// 	// var err error
// 	var tinfo *tokens.TokenInfo
// 	key = "tinfo:" + serv_token

// 	logger.FDEBUG("LoadTokenInfo: %s", serv_token)
// 	v, _ := redis.String(redis_op.Rdo("HGET", key, "tokeninfo"))
// 	if len(v) != 0 {
// 		od2, err := redis_op.Decode("tokeninfo", []byte(v))
// 		if err != nil {
// 			return "", "", false, 0
// 		}
// 		tinfo, _ = od2.(*tokens.TokenInfo)
// 		pass_token, err = redis.String(redis_op.Rdo("HGET", key, "pass_token"))
// 		if err != nil || pass_token == "" {
// 			//no pass_token with it
// 			return "", "", false, 0
// 		}
// 		if _, ok, _ := GetPassToken(pass_token); false == ok {
// 			return "", "", false, 0
// 		}
// 		LifeTime, err = redis.Int(redis_op.Rdo("HGET", key, "life_time"))
// 		if err == nil && LifeTime > 0 {
// 			redis_op.Rdo("EXPIRE", key, LifeTime)
// 		}
// 		return tinfo.Grantee_id, pass_token, true, LifeTime
// 	}
// 	return "", "", false, 0
// }

// func DelServiceToken(serv_token string) bool {
// 	var key string
// 	key = "tinfo:" + serv_token
// 	val, err := redis.Bool(redis_op.Rdo("DEL", key))
// 	if err != nil || false == val {
// 		return false
// 	}
// 	return true
// }

// const (
// 	FIX_ENC_STR = "newrock_account" //don't change this anymore
// )

// func Encrypt_password(pass string) string {
// 	tmp := fmt.Sprintf("%x", time.Now().Nanosecond())
// 	crypt := sha256.Sum256([]byte(FIX_ENC_STR + tmp + pass))
// 	return tmp + ":" + fmt.Sprintf("%02x", crypt)
// }

// func Validation_password(pass, enc_pass string) bool {
// 	key_pass := strings.Split(enc_pass, ":")
// 	if len(key_pass) != 2 {
// 		logger.FWARN("invalid encrypted pass string %s", enc_pass)
// 		return false
// 	}
// 	crypt := sha256.Sum256([]byte(FIX_ENC_STR + key_pass[0] + pass))
// 	crypt_str := fmt.Sprintf("%02x", crypt)
// 	if crypt_str == key_pass[1] {
// 		return true
// 	}
// 	return false
// }

// func test() {
// 	uid := "123456789"
// 	pk, _ := NewPassToken(uid, true)
// 	logger.FDEBUG("NEW PASSTOKEN", pk)
// 	ui, _, _ := GetPassToken(pk)
// 	logger.FDEBUG("NEW uid", ui)
// 	sk, _ := NewServiceToken(uid, pk, true)
// 	logger.FDEBUG("NEW SERVTOKEN", sk)
// 	ui, pk, _, _ = GetServiceToken(sk)
// 	logger.FDEBUG("NEW SK", ui, pk)
// 	DelPassToken(pk)
// 	DelServiceToken(sk)
// }

// func init() {
// 	var redis_server string
// 	redis_server = beego.AppConfig.String("redis_server")
// 	if redis_server == "" {
// 		redis_server = "127.0.0.1:6379"
// 	}
// 	logger.FINFO("redis server:%s", redis_server)
// 	rInit(redis_server)
// 	c := rp.Get()
// 	defer c.Close()
// 	// test()
// }
