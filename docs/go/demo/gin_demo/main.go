package main

import (
	"fmt"
	"gin/app/blog"
	"gin/app/shop"
	"gin/routers"
)

func main() {
	// 加载多个APP的路由配置
	routers.Include(blog.Routers, shop.Routers)
	// 初始化路由
	r := routers.Init()
	if err := r.Run(); err != nil {
		fmt.Println("startup service failed, err:%v\n", err)
	}
}
