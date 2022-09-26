const fs = require("fs")
const path = require("path")
const file = path.join(__dirname, "./node_modules/@vuepress/plugin-docsearch/lib/client/components/Docsearch.js")

//去除gojs水印
fs.readFile(file, "utf8", function (err, data) {
    if (err) throw err

    let content = data.replace(/facetFilters,/gi, "")

    fs.writeFile(file, content, "utf8", (err) => {
        if (err) throw err
        console.log("删除 facetFilters 成功")
    })
})
