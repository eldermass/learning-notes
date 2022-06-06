# python 爬虫

## 常见问题

### 编码问题

```python
# response.content 是 bytes 类型，response.text 是用 response.content.decode(xx) 推断解码,一般是错的
response = requests.get(url)
response.encoding            # 当前推断的编码
response.apparent_encoding   # 页面的真实编码
response.encoding = 'GB2312' # 设为页面的真实编码，utf8，gbk
```

### 代理

```python
# 为了防止自己ip被封，一般会使用三方的高匿代理，百度可搜
# 通过修改下参数确定代理匿名程度，一般后两个隐藏
REMOTE_ADDR = Proxy_IP
HTTP_VIA = not determined
HTTP_X_FORWARDED_FOR = your IP
```

### CA 证书

```python
# 忽略 https 验证
request.get(url, verify=False)
```

### session 连续请求

```python
# 这样的请求会保持cookie状态
session = request.session()
response = session.get(url)
```

### xpath 语法

```python
# lxml 模块使用xpath语法解析 xml/html 数据
html = lxml.entre.HTML(html)
html.xpath('//a[@href="1.html"]/text()')
html.xpath('//a[contains(@href, ".html")]/text()')
```

### selenium

```python
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
driver = webdriver.Chrome(service=Service(executable_path='./path'))
driver.get('https://www.baidu.com')
driver.quit()

# 窗口句柄
driver.window_handles
# 切换窗口
driver.switch_to.window(driver.window_handles[-1])
# 执行js代码
driver.execute_script('js_script')

# 等待
time.sleep() # 强制等待
driver.implicitly_wait(20) # 隐式等待：找不到元素会继续找，直到超时才报错

# 无界面模式
from selenium.webdriver.chrome.options import Options
opt = Options()
opt.add_argument('--headless')
opt.add_argument('--disable-gpu')
webdriver.Chrome(options=opt)
```

### tesseract 图像识别引擎

```python
1. 安装引擎
2. pip install pillow
3. pip install pytesseract
# 腾讯，阿里，有道云ocr平台
```

### 使用类似 js2py 类似的模块尝试, pyv8 executejs splash

### scrapy 框架

```bash
scrapy startproject project_name
scrapy genspider spider_name domain
scrapy crawl spider_name --nolog
# crawlspider 模板
scrapy genspider -t crawl spider_name domain
# scrapy shell url调试代码
```

## 基本描述

[入门博客](https://cuijiahua.com/blog/spider/)

[w3c](https://www.w3cschool.cn/python3/)

[requests 中文 Doc](https://cn.python-requests.org/zh_CN/latest/)

[Beautiful Soup 中文 Doc](https://beautifulsoup.readthedocs.io/zh_CN/latest/)

[教程博文](https://blog.csdn.net/c406495762/article/details/78123502)

### 常用库

```python
# requests库 或 urllib库 请求、抓取网页数据
pip install requests

# 使用 Beautiful Soup 解析 html 文本
pip install beautifulsoup4

# scrapy 爬虫框架
# pyquery 库 解析html文本
# lxml.html.etree 解析html文本
# selenium 配合浏览器驱动 自动化操作
# pyecharts echarts 图形库
# jieba 中文断字解析
# scipy 科学计算、统计分析 库
# PIL 图形处理


```

## 常见

### base64 基本原理

<!-- https://blog.csdn.net/wo541075754/article/details/81734770 -->

```python
# 1. 三个字节一队，3 * 8 = 24 bit
# 2. 每6个bit一组，分为4组。24 / 6 = 4组，  每组2**6=64种可能就是所谓的base64
# 3. 每组前补两个0，组成一个字节，
# 4. 根据base64编码，把相应二进制转为字符， 不足用==补足
# 5. 结果资源变大1/3，约为原来的4/3

例如：
文本            a
asiic           97
二进制          011000  01(补0)     .       .
base64索引      24      16          .       .
base64          Y       Q           =       =

import base64
base64.b64encode('a'.encode()) # 结果为 YQ==

```

### session

```python
# 使用 requests 提供的会话管理
s = requests.session()
s.get()

```

### 文件存储

[pillow 常用方法](https://www.cnblogs.com/chimeiwangliang/p/7130434.html)

```python
req = requests.get(url=img_src, headers=headers, verify=False)
# 二进制
f = open('./a.jpg', 'ab') # 追加写入二进制， 不仅仅是图片
f.write(req.content)
f.close()

# urllib 库中下载文件的方法
from urllib.request import urlretrieve
urlretrieve(IMAGE_URL, './image/img1.png')

# 图片的其他方式
from PIL import Image
from io import BytesIO
i = Image.open(BytesIO(r.content))

```

### https 不友好

```python
# requests 库对 https 不友好，就用原生的解决， 或者使用 selenuim
url = 'https://qqchub.com/index.php/ajax/data.html?mid=1&page=1&limit=8&tid=all&by=t&level=1'

headers = {
    'Content-Type': 'application/json',
    "User-Agent": "Mozilla/5.0 (Linux; Android 8.0.0; MIX 2S Build/OPR1.170623.032)\
    AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.84 Mobile Safari/537.36",
}

req = urllib.request.Request(url=url, headers=headers)

res = urllib.request.urlopen(req)

data = res.read().decode('utf-8')

data = json.loads(data)

f = open('list.txt', 'wb')

pickle.dump(data, f)
f.close()
```
