# Gin

[Gin 文档](https://learnku.com/docs/gin-gonic/1.7)
[GORM](https://learnku.com/docs/gorm/v2/index/9728)
[入门资料](https://www.topgoer.com/gin%E6%A1%86%E6%9E%B6/%E7%AE%80%E4%BB%8B.html)

## 一、基础配置

### 1. 设置

```go
// 打开mod,默认是 auto 会根据当前目录判断是否开启
go env -w GO111MODULE=on

// 设置七牛云代理
go env -w GOPROXY=https://goproxy.cn,direct
```

## 二、快速开始

### 1. 初始化模块

```bash
# 初始化模块
go mod init <mod_name>

# 整理安装项目依赖
go mod tidy

# 拉取框架
go get -u github.com/gin-gonic/gin
```

### 2. 运行 demo

> go run mod_name 或在目录中 go run main.go

main.go 文件内容

```go
package main
import "github.com/gin-gonic/gin"

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

// 在工作目录运行命令
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

## 五、GORM

### 1. 初试用

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
