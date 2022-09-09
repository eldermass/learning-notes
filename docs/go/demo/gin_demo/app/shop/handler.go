package shop

import (
	"github.com/gin-gonic/gin"
)

func ShopHandler(c *gin.Context) {
	c.String(200, "nice it is shop")
}
