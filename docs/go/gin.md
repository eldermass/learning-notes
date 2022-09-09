# Gin

## 安装

[参考资料](https://www.topgoer.com/gin%E6%A1%86%E6%9E%B6/%E7%AE%80%E4%BB%8B.html)

1. 初始化模块

``` go
go mod init gin
go mod edit -require github.com/gin-gonic/gin@latest
go mod vendor
```

2. 安装gin

```go
// 设置代理，不然拉得很慢
go env -w GO111MODULE=on
go env -w GOPROXY=https://goproxy.io,direct

// 拉区框架
go get -u github.com/gin-gonic/gin
```

3. run demo

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

## 路由

1. 基本路由

```go
r := gin.Default()
r.GET("/ping", func(c *gin.Context) {
    c.JSON(200, gin.H{
        "message": "pong",
        })
})
r.POST("/ping", xxx)
```

2. 动态路由参数

```go
r.GET("/user/:name/*action", func(c *gin.Context) {
    name := c.Param("name")
    action := c.Param("action")
    action = strings.Trim(action, "/")
    c.String(http.StatusOK, name + " is " + action)
})
```

3. url 参数

```go
r.GET("/user", func(cont *gin.Context) {
    name := cont.DefaultQuery("name", "没传")
    cont.String(http.StatusOK, "this is user " + name)
})
```

4. 表单参数

```go
r.POST("/form", func(c *gin.Context) {
    types := c.DefaultPostForm("type", "post")
    username := c.PostForm("username")
    c.String(http.StatusOK, fmt.Sprintf("username: %s, types: %s", username, types))
})

```

5. 上传文件

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

6. routers group

```go
v1 := r.Group("/v1")
// {} 是书写规范
{
    v1.GET("/login", login)
    v1.GET("submit", submit)
}
// 3.监听端口，默认在8080
// Run("里面不指定端口号默认为8080")
r.Run(":8000")
```

7. 拆分 router.go 包

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

8. 路由注册

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

结构

```bash
gin_demo
├── app
│   ├── blog
│   │   ├── handler.go
│   │   └── router.go
│   └── shop
│       ├── handler.go
│       └── router.go
├── go.mod
├── go.sum
├── main.go
└── routers
    └── routers.go
```
