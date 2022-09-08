# docker 入门

[docker 官网](https://www.docker.com)  
[命令大全](https://www.runoob.com/docker/docker-command-manual.html)  

## docker 命令

### 安装

[手动安装](https://juejin.cn/post/6999962316439552030)

```bash
# 使用官方自动安装脚本
curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun
```

### 用户相关

```bash
# 登录到docker官方
docker login -u "$DOCKER_USERNAME" --password-stdin # 然后输入密码
```

### 镜像相关

#### 查找镜像

```bash
# 找查镜像
docker search image
```

#### 拉取镜像

```bash
# 拉取镜像
docker pull image:tag
```

#### 运行镜像

```bash
# 运行镜像
docker run [OPTIONS] IMAGE [COMMAND] [ARG...]
          -P                    是容器内部端口随机映射到主机的高端口(无参数))
          -p ip:端口:容器端口    指定映射端口
          -d                    后台运行
          -it                   交互式,伪终端
          -v                    映射文件目录,linux里的路径
          --network host        指定容器的网络连接类型，
                                支持四种类型 bridge/host/none/container
          --link=[]             添加链接到另一个容器
          --expose=[]           开放一个端口或一组端口
# 例如
docker run -d -p 80:80  ubuntu ping 127.0.0.1
# 可用sh执行多条命令 (sh -c '... && ...')
```

#### 构建镜像

```bash
# 构建镜像
# dockerfile构建镜像, docker build [选项] <上下文路径/URL/->
docker build -t image:tag .
          -f          指定 Dockerfile 文件
# 使用Git repo路径时，指定默认的 master 分支，构建目录为 url#path 。
# 还可使用tar路径 docker build http://server/context.tar.gz
```

#### 生成发布镜像

```bash
# 容器生成镜像
docker commit container_id image:tag
        -a        作者
        -m        描述

# 设置镜像标签
docker tag image runoob/centos:dev

# 镜像列表
docker image ls
docker images

# 发布镜像
docker push image

# 移除镜像
docker rmi image

```

### 容器相关

```bash
# container 可以是容器名，也可以是4位以上的id
# 查看容器列表
  docker ps         运行中的
          -a        全部
          -l        最近修改

# 查看容器的详情
  docker inspect container
          -f        按模板找查 {{.NetworkSettings.Ports}}

# 查看映射端口
  docker port container

# 查看容器里的进程
  docker top container

# 停/启容器
  docker stop/start container

# 移除容器
  docker rm container

# 进入容器
  docker exec -it container /bin/bash

# 查看容器日志
  docker logs container

# 将容器的内容拷贝到宿主
  docker cp mysql:/var/lib/mysql /www/docker/mysql/data

# 查看容器的网络情况
  docker network ls
```

## Dockfile 文件

[Dockfile 文件指令](https://www.cnblogs.com/lighten/p/6900556.html)

## docker-compose

### docker-compose 命令

[docker-compose.yml 的使用](https://www.jianshu.com/p/658911a8cff3)  
[各个参数的解释](https://blog.csdn.net/qq_36148847/article/details/79427878)

```bash
# 检查配置是否ok
docker-compose config  -q

# 运行
  docker-compose up       执行当前目录的.yml文件
              -d          后台运行,以分离模式(-d)启动所有服务(您不会在分离模式下看到任何日志)
              --force-recreate 可以强制重建容

  docker-compose down 停止所有容器，并删除容器

# 列出所运行的容器
  docker-compose ps

# 查看服务日志
  docker-compose logs
  docker-compose logs -f -t 重视自己的日志中所有正在运行的服务,而-f意味着你跟随日志输出和-t选项使您的时间戳

# 某服务里3000端口，映射的公共端口
  docker-compose port service_name 3000

# 构建或重构某服务
  docker-compose build service_name

# 启动/停止/删除/指令停止 服务
docker-compose start/stop/rm/kill service_name

# 在一个服务上执行命令
docker-compose run service_name command

```

### docker-compose.yaml 文件

```yaml
version: 3
```

## 其他

### 数据拷贝

```bash
# 从容器里拷贝数据到主机
  docker cp container:/var/www/html /var/www/

# 主机拷贝到容器里
  cp docker/docker-start.sh /var/lib/docker/aufs/mnt/a77a72ac178c1e35708d2af446197c10239b0b1bd8932104578e334b83eb93a2/root/

```

## 使用

### 1.docker 简单使用

```bash
# 根据目录下dockerfile构建镜像
  docker build -t image_name .

# -p ip:端口:容器端口, -d 后台运行 -P映射路由 it: 可命令行交互 -v 映射目录
  docker run -it -d -P --name tag -v /www:/var image_name node index

# 查看日志
  docker logs container

# 进入容器
  docker exec -it container /bin/bash     bash 或 sh
# 查看映射端口
  docker port containerId

  docker images   查看镜像
  docker ps       查看容器
  docker rm       移除容器
  docker rmi      移除镜像
  docker stop id  停止容器
  docker start -i containerName #重启启动一个运行过的容器
```

### 2.使用 Dockerfile 部署项目

1.编写 dockerfile 文件

```Dockerfile
# 选择一个体积小的镜像 (~5MB)
FROM node:16-alpine

# 设置为工作目录，以下 RUN/CMD 命令都是在工作目录中进行执行
WORKDIR /code

# 把宿主机的代码添加到镜像中
ADD . /code

# 安装依赖
RUN yarn

EXPOSE 3000

# 启动 Node Server
CMD npm start
```

2.根据 dockerfile 生成镜像

```bash
# 构建一个名为 simple-app 的镜像
# -t: "name:tag" 构建镜像名称
$ docker build -t simple-app .

# git rev-parse --short HEAD: 列出当前仓库的 CommitId
# 也可将当前 Commit 作为镜像的 Tag
# 如果该前端项目使用 git tag 以及 package.json 中的 version 进行版本维护，也可将 version 作为生产环境镜像的 Tag
$ docker build -t simple-app:$(git rev-parse --short HEAD)
```

3.运行容器

```bash
docker run --rm -p 3000:3000 simple-app
```

### 3.使用 docker-compose 部署项目

dockerfile 文件

```Dockerfile
FROM node:16-alpine as builder

WORKDIR /code

# 单独分离 package.json，是为了 yarn 可最大限度利用缓存
ADD package.json yarn.lock /code/
RUN yarn

# 单独分离 public/src，是为了避免 ADD . /code 时，因为 Readme/nginx.conf 的更改避免缓存生效
# 也是为了 npm run build 可最大限度利用缓存
ADD public /code/public
ADD src /code/src
RUN npm run build

# 选择更小体积的基础镜像，进行多阶段构建
FROM nginx:alpine
ADD nginx.conf /etc/nginx/conf.d/default.conf
# 将node镜像生成的build文件拷贝到nginx镜像，运行更小的nginx镜像来服务
COPY --from=builder code/build /usr/share/nginx/html
```

docker-compose.yaml 文件

```yaml
version: "3"
services:
    nginx-app:
        build:
            context: .
            dockerfile: Dockerfile
        ports:
            - 3000:80
```
