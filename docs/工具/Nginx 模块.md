# Nginx 模块

## headers-more-nginx-module

用于修改 HTTP 头部的模块，可以用来添加、修改、删除 HTTP 头部的模块。
[源码](https://github.com/openresty/headers-more-nginx-module/)

### 安装方式

```bash
wget 'http://nginx.org/download/nginx-1.17.8.tar.gz'
 tar -xzvf nginx-1.17.8.tar.gz
 cd nginx-1.17.8/

 # Here we assume you would install you nginx under /opt/nginx/.
 ./configure --prefix=/opt/nginx \
     --add-module=/path/to/headers-more-nginx-module

 make
 make install
```

### 如何在已有的nginx中添加模块

1. 下载扩展模块

```bash
# 找到一个目录，下载扩展模块
cd /data/software/ 
git clone https://github.com/openresty/headers-more-nginx-module
```

2. 获取原有配置

```bash
# 输入 nginx -V 查看原有配置
nginx version: nginx/1.15.3
built by gcc 6.3.0 20170516 (Debian 6.3.0-18+deb9u1)
built with OpenSSL 1.1.0f  25 May 2017
TLS SNI support enabled
configure arguments: --prefix=/usr/local/nginx --with-http_ssl_module ......

# configure arguments: 后面的就是原有配置, 复制出来
```

3. 编译安装新模块

```bash
# 将 add-module= 加入到原有配置中
./configure --prefix=/usr/local/nginx --with-http_ssl_module ...... --add-module=/data/software/headers-more-nginx-module
make   
#千万不要make install，不然就真的覆盖了
```

4. 替换启动文件

```bash
# 替换文件时需要先关闭服务
systemctl stop nginx
# 备份旧文件，替换新文件
cp /usr/local/nginx/sbin/nginx /usr/local/nginx/sbin/nginx.bak
# 用which命令查看nginx的启动路径
cp ./objs/nginx /usr/local/nginx/sbin/
# 重新启动服务
systemctl start nginx
```
