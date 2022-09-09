package blog

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func BlogHandler(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"message": "Hello www.topgoer.com",
	})
}
