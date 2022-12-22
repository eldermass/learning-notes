# Flask 入门

## 开始

最小的服务

```python
from flask import Flask

app = Flask(__name__)
app.config.from_object('setting')

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

app.run(debug=True, host='0.0.0.0', port=5000)
```

## 路由

### 定义

```python
# 装饰器注册
@app.route('/', methods=['GET']) # 默认get
@app.post('/')

# 方法注册
app.add_url_rule('/', view_func=hello_world)

# url_for 从shell 测试路由通路
url_for('/')
```

### 动态路由

```python
from markupsafe import escape

@app.route("/<name>")
def hello_world(name):
    return "<h1>hello world {}</h1>".format(escape(name))

# 转换器类型
@app.route("/<string:name>")
# string（缺省值） 接受任何不包含斜杠的文本
# int 接受正整数
# float 接受正浮点数
# path 类似 string ，但可以包含斜杠
# uuid  接受 UUID 字符串
```

## 视图

### 渲染模板

使用render_template调用模板，Flask 会在 templates 文件夹内寻找模板，（Jinja2 模板）。

```python
@app.get("/<name>")
def hello_world(name):
    return render_template("test.html", name=name)
```

## 请求

### 请求处理

```python
@app.route('/login', methods=['POST', 'GET'])
def login():
    error = None
    if request.method == 'POST':
        # request.args.get('key', '') 替代 request.form
        if valid_login(request.form['username'],
                       request.form['password']):
            return log_the_user_in(request.form['username'])
        else:
            error = 'Invalid username/password'
    # the code below is executed if the request method
    # was GET or the credentials were invalid
    return render_template('login.html', error=error)
```

### cookies

```python
from flask import request

@app.route('/')
def index():
    username = request.cookies.get('username')
    # use cookies.get(key) instead of cookies[key] to not get a
    # KeyError if the cookie is missing.

# 存储cookie时
from flask import make_response

@app.route('/')
def index():
    resp = make_response(render_template(...))
    resp.set_cookie('username', 'the username')
    return resp
```

### 上传文件

上传的文件属性基本和标准 Python file 对象一样

```python
from flask import request

@app.route('/upload', methods=['GET', 'POST'])
def upload_file():
    if request.method == 'POST':
        f = request.files['the_file']
        f.save('/var/www/uploads/uploaded_file.txt')
```

## 响应

### 响应处理

```py
@app.route('/')
def hello_world():
    headers = {
        'content-type': 'text/html'
    }
    response = make_response('<h1>Hello World!</h1>', 201)
    response.headers = headers
    return response
    # 或者
    return '<h1>Hello World!</h1>', 200, headers
```

### 重定向和错误

```python
from flask import abort, redirect, url_for

@app.route('/')
def index():
    return redirect(url_for('login'))

@app.route('/login')
def login():
    abort(401)
    this_is_never_executed()

# 错误兜底页面
@app.errorhandler(404)
def page_not_found(error):
    return render_template('page_not_found.html'), 404
```

### 静态文件

/static 目录的静态文件目录再 Flask 中默认开放，直接新建一个该名的目录即可

## ORM
