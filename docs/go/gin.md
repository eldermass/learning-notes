# Gin

[GORM](https://learnku.com/docs/gorm/v2/index/9728)

## 一、基础配置

### 1. 设置

```go
// 打开mod
go env -w GO111MODULE=on

// 设置七牛云代理
go env -w GOPROXY=https://goproxy.cn,direct
```

## 二、快速开始

[参考资料](https://www.topgoer.com/gin%E6%A1%86%E6%9E%B6/%E7%AE%80%E4%BB%8B.html)

### 1. 初始化模块

```go
// 初始化模块
go mod init <mod_name>

// 拉取框架
go get -u github.com/gin-gonic/gin
```

### 2. 运行 demo

> go run mod_name.go

```go
package main
import "github.com/gin-goinc/gin"
func main() {
    r := gin.Default()
    r.GET("/ping", func(c *gin.Context) {
    c.JSON(200, gin.H{
        "message": "pong",
        })
    })
    r.Run() // listen and serve on 0.0.0.0:8080 (for windows "localhost:8080")
}
```

### 3. 热更新启动

```go
go install github.com/pilu/fresh@latest

// 运行
fresh
```

## 三、路由

### 1. 基本路由

```go
r := gin.Default()
r.GET("/ping", func(c *gin.Context) {
    c.String(200, "pong")
})
r.POST("/ping", func)
```

### 2. 动态路由及参数

```go
r.GET("/user/:name/*action", func(c *gin.Context) {
    name := c.Param("name")
    // 将 * 的参数放在 action 中
    action := c.Param("action")

    c.String(http.StatusOK, name + " is " + action)
})

// 请求 /user/xxx/yyy
```

### 3. 路由组

```go
v1 := r.Group("/v1")
// {} 是书写规范
{
    v1.GET("/login", login)
    v1.GET("submit", submit)
}
// Run("里面不指定端口号默认为8080")
r.Run(":8000")
```

加中间件鉴权

```go
v1 := r.Group("/v1", gin.BasicAuth(gin.Accounts{
    "admin": "123456",
}))

{
    v1.GET("/h1", func(c *gin.Context) {
        user := c.MustGet(gin.AuthUserKey).(string)
        c.String(200, "v1 h1 %s", user)
    })
}
```

### 4. 拆分路由 router.go

```go
func main() {
    r := gin.Default()
    router.SetupRouter(r)
    router.SetupRouter2(r)
    // ...

    if err := r.Run(":8000"); err != nil {
        fmt.Println("startup service failed, err:%v\n", err)
    }
}

// 分包
func SetupRouter(e *gin.Engine) {
    e.GET("/router", func(c *gin.Context) {
        c.String(200, fmt.Sprintf("router: %s", "hello"))
    })
}

func SetupRouter2(e *gin.Engine) {
    e.GET("/router2", func(c *gin.Context) {
        c.String(200, fmt.Sprintf("router: %s", "hello"))
    })
}
```

### 5. 路由注册

#### 1. 文件内容

```go
// app/blog/router.go
func Routers(e *gin.Engine) {
    e.GET("/post", postHandler)
    e.GET("/comment", commentHandler)
}
// app/shop/router.go
func Routers(e *gin.Engine) {
    e.GET("/goods", goodsHandler)
    e.GET("/checkout", checkoutHandler)
}
```

```go
// routers/routers.go
type Option func(*gin.Engine)

var options = []Option{}

// 注册app的路由配置
func Include(opts ...Option) {
    options = append(options, opts...)
}

// 初始化
func Init() *gin.Engine {
    r := gin.New()
    for _, opt := range options {
        opt(r)
    }
    return r
}
```

```go
// main.go
func main() {
    // 加载多个APP的路由配置
    routers.Include(shop.Routers, blog.Routers)
    // 初始化路由
    r := routers.Init()
    if err := r.Run(); err != nil {
        fmt.Println("startup service failed, err:%v\n", err)
    }
}
```

#### 2. 目录结构

```bash
├── app
│   ├── blog
│   │   ├── handler.go
│   │   └── router.go
│   ├── html
│   │   ├── handler.go
│   │   └── router.go
│   └── json-demo
│       ├── handler.go
│       ├── hanlder2.go
│       └── router.go
├── go.mod
├── go.sum
├── main.go
├── routers
│   └── routers.go
└── template
    └── index.html
```

## 四、请求/响应

### 1. url 参数 Query

```go
r.GET("/user", func(c *gin.Context) {
    name := c.DefaultQuery("name", "没传")
    age := c.Query("age")

    c.String(http.StatusOK, "name: %s, age: %s", name, age)
})
```

### 2. 表单参数 Body

```go
r.POST("/form", func(c *gin.Context) {
    username := c.PostForm("username")
    types := c.DefaultPostForm("type", "post")

    c.String(http.StatusOK, fmt.Sprintf("username: %s, types: %s", username, types))
})

```

### 3. 上传文件 File

```go
r.POST("/upload", func(c *gin.Context) {
    file, err := c.FormFile("file")
    if err != nil {
        c.String(500, "上传出错")
    }
    c.SaveUploadedFile(file, file.Filename)
    c.String(http.StatusOK, file.Filename)
})
```

多个文件

```go
r.POST("/uploads", func(c *gin.Context) {
    form, err := c.MultipartForm()

    if err != nil {
        c.String(http.StatusBadRequest, fmt.Sprintf("get err %s", err.Error()))
    }
    files := form.File["files"]

    for _, file := range files {
        if err := c.SaveUploadedFile(file, file.Filename); err != nil {
            c.String(http.StatusBadRequest, fmt.Sprintf("upload err %s", err.Error()))
            return
        }
    }
    c.String(200, fmt.Sprintf("upload ok %d files", len(files)))
})
```

### 4. cookie

```go
v1.GET("/h1", func(c *gin.Context) {
    cookies := c.Request.Cookies() // 获取全部cookie
    locale, err := c.Cookie("name") // 获取指定cookie

    // 设置cookie
    c.SetCookie("name", "zhangsan", 3600, "/", "localhost", false, true)

    if err == nil {
        c.String(200, "v1 h1 %v %s", cookies, locale)
    } else {
        c.String(200, "get cookie error")
    }
})
```

### 5. json 响应

```go
// 定义了值得来源
type Login struct {
    User    string `form:"username" json:"user" uri:"user" xml:"user" binding:"required"`
    Pssword string `form:"password" json:"password" uri:"password" xml:"password" binding:"required"`
}

func JsonHandler(c *gin.Context) {
    var json Login
    // ShouldBindJSON 取用结构体中的 json 值
    if err := c.ShouldBindJSON(&json); err != nil {
        c.JSON(http.StatusOK, gin.H{"error": err.Error()})
        return
    }

    c.JSON(http.StatusOK, gin.H{"status": "200"})
}
```

带验证器的 json 响应

```go
package test

import (
	"github.com/gin-gonic/gin"
	"github.com/gin-gonic/gin/binding"
	"github.com/go-playground/validator/v10"
)

// omitempty 忽略空值，binding:"required" 必填，binding:"checkSchool" 自定义验证器
type JsonTest struct {
	Name   string `json:"name"`
	Age    int    `json:"age,omitempty"`
	School string `json:"school" form:"school" binding:"required,checkSchool"`
}

func Post(c *gin.Context) {
	var testJson JsonTest

    // 注册自定义验证器
	if v, ok := binding.Validator.Engine().(*validator.Validate); ok {
		v.RegisterValidation("checkSchool", checkSchool)
	}

	err := c.ShouldBindJSON(&testJson)
	if err != nil {
		c.JSON(400, gin.H{
			"error": err.Error(),
		})
		return
	}

	c.JSON(200, testJson)
}

func checkSchool(fl validator.FieldLevel) bool {
	if fl.Field().String() == "school" {
		return true
	}

	return false
}
```

### 6. 重定向

```go
e.GET("/", func(ctx *gin.Context) {
    // 302
    ctx.Redirect(http.StatusFound, "/index")
})
```

### 7. html 模板

```go
r := gin.Default()
r.LoadHTMLGlob("tem/*")
r.GET("/index", func(c *gin.Context) {
    // 模板中 {{.title}} 替换值
    c.HTML(http.StatusOK, "index.html", gin.H{"title": "我是测试"})
})
r.Run()
```

### 8. 异步

```go
r.GET("/long_async", func(c *gin.Context) {
    // 需要搞一个副本
    copyContext := c.Copy()
    // 异步处理
    go func() {
        time.Sleep(3 * time.Second)
        log.Println("异步执行：" + copyContext.Request.URL.Path)
    }()
    c.JSON(http.StatusOK, gin.H{"msg": "okok"})
})
// 同步处理
r.GET("/long_sync", func(c *gin.Context) {
    time.Sleep(3 * time.Second)
    log.Println("同步执行：" + c.Request.URL.Path)
    c.JSON(http.StatusOK, gin.H{"msg": "okok"})
})

```

## 中间件

类似 koa 的洋葱圈模型,进来和出去都会调用

```go
r := gin.Default()
r.Use(middleWare())

func middleWare() gin.HandlerFunc {
	return func(c *gin.Context) {
		println("before middleware")
		c.Next()
		println("after middleware")
	}
}
```

## 五、GORM

### 1. 连接

创建 database/database.go

```go
package database

import (
	"fmt"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

type Product struct {
	gorm.Model
	Code  string
	Price uint
}

func InitDB() *gorm.DB {
	host := "127.0.0.1"
	port := "3306"
	database := "test"
	username := "root"
	password := "123456"
	charset := "utf8mb4"
	dsn := fmt.Sprintf("%s:%s@(%s:%s)/%s?charset=%s&parseTime=true",
		username,
		password,
		host,
		port,
		database,
		charset)

	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})

	if err != nil {
		panic("failed to connect database, err:" + err.Error())
	}

	// 迁移 schema
	db.AutoMigrate(&Product{})

	return db
}
```

main.go

```go
package main

import (
	"gin-demo/database"
	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	v1 := r.Group("/v1")

	{
		v1.GET("/h1", func(c *gin.Context) {
			var product database.Product
			var products []database.Product
			db := database.InitDB()

			db.First(&product)
			db.Find(&products)

			c.JSON(200, gin.H{
				"product":  product,
				"products": products,
			})
		})
	}
	r.Run(":8080")
}
```

### 2. 建表

```go
package database

// gorm 跟建表字段属性， - 表示不会自动创建该字段
type User struct {
	Id       uint   `json:"id" gorm:"primaryKey;autoIncrement;not null"`
	Name     string `gorm:"-"`
	UserName string `json:"username" gorm:"unique;not null;column:username;type:varchar(255);index"`
}

// TableName 自定义表名
func (User) TableName() string {
	return "tb_user"
}
```

### 3. 关联关系

重写外键

```go
type User struct {
    UserName string `gorm:"column:username;"`
    ProfileId int
    // ProfileId 作为外键，关联 Profile 的引用字段，默认 表名_id
    Profile Profile `gorm:"foreignKey:ProfileId"`
    // 重写引用，将 Code 作为 Company 关联的字段
    Company   Company `gorm:"references:Code"`
}
```

#### 1. has one 拥有一个(一对一)

```go
// IdCard 一对一，一个用户有一个身份证，一个身份证只属于一个用户
type User struct {
	Id       uint
	UserName string
	IdCard   IdCard
}

type IdCard struct {
	ID     int
	Uuid   string
	UserID int
}

func List(c *gin.Context) {
	var user database.User

	database.DB.First(&user)

	idCard := database.IdCard{
		Uuid: "123456789",
	}

	database.DB.Model(&user).Association("IdCard").Append(&idCard)

	c.JSON(200, gin.H{
		"message": user,
	})
}
```

#### 2. has many 拥有多个(一对多)

```go
// 一对多，一个用户有多个地址，一个地址只属于一个用户
type User struct {
	Id       uint
	UserName string
	Address  []Address
}

type Address struct {
	ID       int
	Location string
	UserID   int
}

func FindOne(c *gin.Context) {
	var user database.User

	database.DB.Preload("Address").First(&user)

	addr := database.Address{
		Location: "地址2",
	}

	user.Address = append(user.Address, addr)

	database.DB.Updates(&user)

	c.JSON(200, gin.H{
		"message": user,
	})
}


```

#### 3. belongs to 属于(多对一)

相当于 一对多 的反向关系

```go
// Address 多对一，一个用户有多个地址，一个地址只属于一个用户
type User struct {
	Id       uint
	UserName string
}


type Address struct {
	ID       int
	Location string
	UserID   int
	User     User
}

func List(c *gin.Context) {
	var address database.Address

	database.DB.Preload("User").Find(&address)

	c.JSON(200, gin.H{
		"message": address,
	})
}
```

#### 4. many to many 多对多

```go
// Company 多对多，一个公司有多个用户，一个用户可以属于多个公司
type User struct {
	Id        uint
	UserName  string
	Companies []*Company `gorm:"many2many:user_companies;"` // 关联关系只需要在查询的一方定义即可
}

type Company struct {
	ID    int
	Name  string
	Users []*User `gorm:"many2many:user_companies;"`
}


func List(c *gin.Context) {
	var user database.User

	companies := []*database.Company{
		&database.Company{Name: "company1"},
		&database.Company{Name: "company2"},
	}

	database.DB.Preload("Companies").First(&user)

    // 保存关联关系 的数据
	// database.DB.Session(&gorm.Session{FullSaveAssociations: true}).Updates(&u)
	database.DB.Model(&user).Association("Companies").Append(companies)

	c.JSON(200, user)
}
```

### 4. 预加载、实体关联

看社区文档

```go
// 更新关联的数据，使用 FullSaveAssociations 模式：
db.Session(&gorm.Session{FullSaveAssociations: true}).Updates(&user)

// 如果您想要忽略关联模式，您可以使用 Omit
db.Omit("Languages").Create(&user)

// 关联模式， 如果匹配了会开始关联模式，否则会返回错误
db.Model(&user).Association("Languages").Error

// 查找所有匹配的关联记录
db.Model(&user).Association("Languages").Find(&languages)
```

处理关系

```go
// 增加关联关系，传入地址
db.Model(&user).Association("Languages").Append([]Language{languageZH, languageEN})
db.Model(&user).Association("Languages").Append(&Language{Name: "DE"})

// 替换关联关系
db.Model(&user).Association("Languages").Replace([]Language{languageZH, languageEN})
db.Model(&user).Association("Languages").Replace(Language{Name: "DE"}, languageEN)

// 删除关联关系
db.Model(&user).Association("Languages").Delete([]Language{languageZH, languageEN})
db.Model(&user).Association("Languages").Delete(languageZH, languageEN)

// 清空关联关系
db.Model(&user).Association("Languages").Clear()

// 计数
db.Model(&user).Association("Languages").Count()

// 条件计数
codes := []string{"zh-CN", "en-US", "ja-JP"}
db.Model(&user).Where("code IN ?", codes).Association("Languages").Count()
```
