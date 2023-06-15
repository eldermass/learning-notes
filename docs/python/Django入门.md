# Django 入门

[官方文档](https://docs.djangoproject.com/zh-hans/4.1/intro/tutorial01/)  
[快速体验](https://juejin.cn/post/6844904025888915470)  
[快速体验 api](https://juejin.cn/post/6844904063687983112)

## 初始化

1. 新建目录

```bash
mkdir django_demo && cd django_demo
```

2. 用 pipenv，创建虚拟环境

```bash
pip install pipenv
# 切到虚拟环境
pipenv shell
```

3. 安装 django

```bash
# 虚拟环境下安装时换源，修改 Pipfile 文件中的 [[source]] 为
url = "https://pypi.tuna.tsinghua.edu.cn/simple"

# 临时使用清华源安装
pip install -i https://pypi.tuna.tsinghua.edu.cn/simple django
# 永久使用清华源
pip install pip -U # 升级
pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple

# 使用 pipenv 安装
pipenv install django
# 安装 DFR 和 CORS，用于 api
pipenv install django-rest-framework django-cors-headers
```

这时会生成一个 Pipfile 文件，记录了项目的依赖包，类似于 package.json

4. 使用脚手架创建项目

```bash
django-admin startproject mysite

# 进入项目目录，创建子应用
cd mysite
python manage.py startapp polls
```

5. 配置数据库后，进行数据库迁移，并创建管理用户

```bash
# 在 mysite/settings.py 中，修改数据库配置，这里默认使用 sqlite3
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}

# 有表结构改动时，创建数据库迁移
# python manage.py makemigrations polls
# 执行数据库迁
python manage.py migrate
# 创建管理用户
python manage.py createsuperuser
```

6. 启动项目

```bash
python manage.py runserver ((0.0.0.0):(port))
```

## 全局配置

1. 在 INSTALLED_APPS 中添加应用 rest_framework、corsheaders 和 polls， `polls` 是刚创建的子应用
2. 在 MIDDLEWARE 中添加 corsheaders.middleware.CorsMiddleware，注册跨域请求中间件，放在最前面
3. 设置 CORS_ORIGIN_WHITELIST，添加跨域请求白名单
4. 设置 LANGUAGE_CODE 为 zh-hans，设置为中文
5. 设置 MEDIA_URL 和 MEDIA_ROOT，资源文件的访问

### 为 django 配置 mysql

```bash
# 安装驱动
pipenv install mysqlclient

# 在 mysite/settings.py 中，修改数据库配置
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'cool_admin', # 数据库名
        'USER': 'root',
        'PASSWORD': 'root',
        'HOST': '10.10.2.201',
        'PORT': '3386'
    }
}
```

## 实现一个 polls 应用

1. 在 polls/models.py 中，创建模型

```python
from django.db import models

class Question(models.Model):
    question_text = models.CharField(max_length=200, verbose_name='问题文本')
    pub_data = models.DateTimeField('date published')

    # 定义元素据，用于在后台管理中显示
    class Meta:
        verbose_name = '问题'
        verbose_name_plural = '问题'

    # 定义 __str__ 方法,用于字符串显示
    def __str__(self):
        return self.question_text


class Choice(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    choice_text = models.CharField(max_length=200)
    votes = models.IntegerField(default=0)

    class Meta:
        verbose_name = '选项'
        verbose_name_plural = '选项'

    def __str__(self):
        return self.choice_text
```

2. 在 polls/admin.py 中，注册模型

```python
from django.contrib import admin
from .models import Question, Choice

admin.site.register(Question)
admin.site.register(Choice)
```

3. 定义序列化器 serializers.py, 序列化器是 Django Rest Framework 提供的功能，能够非常方便地将 Django 数据模型序列化成相应的 JSON 数据格式。

```python
from rest_framework import serializers
from .models import Question


class PollSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = ['id', 'question_text', 'pub_data']
```

4. 在 polls/views.py 中，创建视图,使用 Django Rest Framework 提供的模型视图集，实现了增删改查的功能

```python
from rest_framework import viewsets
from .serializers import PollSerializer
from .models import Question


# Create your views here.
class PollViewSet(viewsets.ModelViewSet):
    serializer_class = PollSerializer
    queryset = Question.objects.all().order_by('pub_data')
```

5. 在 polls/urls.py 中，用 DefaultRouter 自动创建路由

```python
from django.urls import path, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register('polls', views.PollViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
```

6. 在 mysite/urls.py 中，注册应用的路由

```python
from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('polls.urls')),
]
```

7. 创建并迁移数据库

```bash
# python manage.py makemigrations 全部应用/指定应用
python manage.py makemigrations polls
python manage.py migrate
```

8. 启动项目，访问 <http://localhost:8000/api/polls/> 或 <http://localhost:8000/admin/polls/> 即可看到数据

## 部署

可使用 heroku 免费部署

### 使用 wsgi 部署

1. 安装 WSGI 服务器，gunicorn，uWSGI 等

```bash
pipenv install gunicorn
```

2. 在 mysite 目录下，创建 wsgi.py 文件。脚手架会自动创建

```python
import os
from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'myproject.settings')

application = get_wsgi_application()
```

3. 在 mysite 目录下，创建 Procfile 文件，指定启动命令

```bash
web: gunicorn mysite.wsgi
```

或使用 shell 启动，gunicorn myproject.wsgi:application

4. 在 mysite/settings.py 中配置

```python
# 修改 DEBUG 为 False，设置 ALLOWED_HOSTS
DEBUG = False

ALLOWED_HOSTS = ['*']

# 设置静态文件的访问
STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'static')

# 设置数据库

# 设置日志
```

5. 配置 Nginx 或其他 Web 服务器以反向代理 Gunicorn 服务器。

```bash
location / {
    proxy_pass http://127.0.0.1:8000;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
}
```

### 使用 asgi 部署

1. 安装 ASGI 服务器，Daphne、Uvicorn、Hypercorn 等。

```bash
pipenv install daphne
```

2. 在 mysite 目录下，创建 asgi.py 文件。脚手架会自动创建

```python
import os
from django.core.asgi import get_asgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'myproject.settings')

application = get_asgi_application()
```

3. 在 mysite 目录下，创建 Procfile 文件，指定启动命令

```bash
web: daphne mysite.asgi:application
```

或使用 shell 启动，daphne myproject.asgi:application

4. 在 mysite/settings.py 中配置

5. 配置 Nginx 或其他 Web 服务器以反向代理 ASGI 服务器。

```bash
    location / {
    proxy_pass http://127.0.0.1:8000;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

    # WebSocket support
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
}
```
