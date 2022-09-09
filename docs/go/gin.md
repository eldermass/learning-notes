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