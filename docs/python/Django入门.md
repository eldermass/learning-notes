# Django 基础

[官方文档](https://docs.djangoproject.com/zh-hans/4.1/intro/tutorial01/)  
[快速体验](https://juejin.cn/post/6844904025888915470)  
[快速体验 api](https://juejin.cn/post/6844904063687983112)

## 一、初始化

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

这时会生成一个 Pipfile 文件，记录了虚拟环境的状态，类似于 package.json

3. 安装 django

```bash
# 虚拟环境下安装时换源，修改 Pipfile 文件中的 [[source]] 为
url = "https://pypi.tuna.tsinghua.edu.cn/simple"

# 在虚拟环境中安装
pipenv install django
# 安装 DFR 和 CORS，用于 api
pipenv install django-rest-framework django-cors-headers

# 原来的安装方式
pip install -i https://pypi.tuna.tsinghua.edu.cn/simple django
# 配置全局清华源
pip install pip -U # 升级 pip
pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
```

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

## 二、全局配置

### (一). 基础配置

1. 在 INSTALLED_APPS 中添加应用 rest_framework、corsheaders 和 polls， `polls` 是刚创建的子应用

```python
INSTALLED_APPS = [
    'rest_framework',
    'corsheaders',
    'polls',
    ...
]
```

2. 在 MIDDLEWARE 中添加 corsheaders.middleware.CorsMiddleware，注册跨域请求中间件，放在最前面

```python
MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    ...
]
```

3. 设置 CORS_ORIGIN_WHITELIST，添加跨域请求白名单

```python
CORS_ORIGIN_WHITELIST = [
    'http://localhost:8080',
    'http://localhost:8081',
]
```

4. 设置 LANGUAGE_CODE 为 zh-hans，设置为中文

```python
LANGUAGE_CODE = 'zh-hans'
```

5. 设置 MEDIA_URL 和 MEDIA_ROOT，资源文件的访问

```python
MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
```

### (二). 修改数据库配置

```bash
# 安装驱动
pipenv install mysqlclient

# 在 mysite/settings.py 中，修改数据库配置
DATABASES = {
        # 'default': {
    #     'ENGINE': 'django.db.backends.mysql',
    #     'NAME': 'cool_admin',
    #     'USER': 'root',
    #     'PASSWORD': 'root',
    #     'HOST': 'hostip',
    #     'PORT': '3386'
    # }
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'default',
        'USER': 'default',
        'PASSWORD': 'secret',
        'HOST': 'hostip',
        'PORT': '5432',
    }
}
```

### (三). 使用 simpleui 美化界面

```bash
# 安装
pipenv install django-simpleui

# 在 mysite/settings.py 中，INSTALLED_APPS 中添加 'simpleui'
INSTALLED_APPS = [
    'simpleui',
    ...
]

# 在 setting 中添加主题色
SIMPLEUI_DEFAULT_THEME = 'green'

# 设置 logo
SIMPLEUI_LOGO = 'https://avatars.githubusercontent.com/u/28778856?s=200&v=4'

# 关闭广告和分析
SIMPLEUI_HOME_INFO = False
SIMPLEUI_ANALYSIS = False


# 根据教程处理细节
https://zhuanlan.zhihu.com/p/372185998
```

### (四). 使用 Django Filter 过滤

### (五). 使用 Django Debug Toolbar 调试

```bash
# 安装
pipenv install django-debug-toolbar

# 在 settings.py 中，INSTALLED_APPS 中添加 'debug_toolbar'
INSTALLED_APPS = [
    'debug_toolbar',
    ...
]
# 在 settings.py 中，MIDDLEWARE 中添加 'debug_toolbar.middleware.DebugToolbarMiddleware'
MIDDLEWARE = [
    'debug_toolbar.middleware.DebugToolbarMiddleware',
    ...
]
# 在 settings.py 中，添加配置
DEBUG = True
INTERNAL_IPS = [
    '127.0.0.1',
    'localhost',
]

# 在 mysite/urls.py 中，添加配置
urlpatterns = [
    ...
    path('__debug__/', include('debug_toolbar.urls')),
]
```

## 三、实现一个 polls 应用

如果不使用 rest_framework，只需要 1、2、7 步即可

### 1. 创建模型

在 polls/models.py 中，创建模型

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
    # 处理关联关系时，注意处理 related_name
    question = models.ForeignKey(Question, related_name='choices', on_delete=models.CASCADE)
    choice_text = models.CharField(max_length=200)
    votes = models.IntegerField(default=0)

    class Meta:
        verbose_name = '选项'
        verbose_name_plural = '选项'

    def __str__(self):
        return self.choice_text
```

### 2. 注册模型

在 polls/admin.py 中，注册模型

```python
from django.contrib import admin
from .models import Question, Choice

admin.site.register(Question)
admin.site.register(Choice)
```

### 3. 定义序列化器

定义序列化器 polls/serializers.py, 序列化器是 Django Rest Framework 提供的功能，能够非常方便地将 Django 数据模型序列化成相应的 JSON 数据格式。

```python
from rest_framework import serializers
from .models import Question


class PollSerializer(serializers.ModelSerializer):
    # 在 api 视图中使用关联关系，PrimaryKeyRelatedField 只会返回关联对象的主键
    articles = serializers.PrimaryKeyRelatedField(many=True, queryset=Article.objects.all())
    # 但是如果直接传其他的序列化器，就会返回序列化后的数据
    answer = AnswerSerializer(many=True)
    # 处理关联关系时，还应注意要在model定义时，设置related_name

    class Meta:
        model = Question
        # fields = ['id', 'question_text', 'pub_data', 'articles']
        fields = '__all__'
        depth = 1 # 找查外键的深度，articles 就会加入到返回中
```

### 4. 创建视图

在 polls/views.py 中，创建视图,使用 Django Rest Framework 提供的模型视图集，实现了增删改查的功能

```python
from rest_framework import viewsets
from .serializers import PollSerializer
from .models import Question


# Create your views here.
class PollViewSet(viewsets.ModelViewSet):
    serializer_class = PollSerializer
    queryset = Question.objects.all().order_by('pub_data')
```

### 5. 创建路由

在 polls/urls.py 中，用 DefaultRouter 自动创建路由

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

### 6. 注册路由

6. 在 mysite/urls.py 中，注册应用的路由

```python
from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('polls.urls')),
]
```

### 7. 创建并迁移数据库

创建并迁移数据库

```bash
# python manage.py makemigrations 全部应用/指定应用
python manage.py makemigrations polls
python manage.py migrate
```

### 8. 启动项目

`/api/polls/` 查看 restful api 的页面  
`/admin/polls/` 查看后台管理页面

### 9. 添加权限

在 polls/views.py 中，添加权限

```python
from rest_framework import permissions

# 在 ViewSet 中添加 permission_classes 属性
class PollViewSet(viewsets.ModelViewSet):
    serializer_class = PollSerializer
    queryset = Question.objects.all()
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
```

在 mysite/urls.py 中，添加权限

```python
urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),
    ...
]
```

### 10. 生成依赖文件

```bash
pip freeze > requirements.txt
```

## 四、部署

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

## 五、数据库及迁移

### 1. 数据库迁移命令

```bash
# 创建迁移文件
python manage.py makemigrations
# 查看迁移文件
python manage.py sqlmigrate polls 0001
# 查看迁移状态
python manage.py showmigrations polls
# 回滚迁移
python manage.py migrate polls zero
# 回滚到指定迁移
python manage.py migrate polls 0001
# 执行迁移
python manage.py migrate polls
```

### 2. 模型关联关系

[文档](https://docs.djangoproject.com/zh-hans/4.2/topics/db/examples/)

一对一 用 OneToOneField  
一对多 用 ForeignKey  
多对多 用 ManyToManyField
