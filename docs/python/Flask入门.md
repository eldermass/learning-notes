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

app.run(debug=app.config['DEBUG'], host='0.0.0.0', port=5000)
```

## 路由

### 定义

```python
# 装饰器注册
@app.route('/')

# 方法注册
app.add_url_rule('/', view_func=hello_world)
```

## 视图

## 请求

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

## ORM
